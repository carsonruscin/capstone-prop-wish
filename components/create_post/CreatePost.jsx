import { useState, useEffect } from "react"
import { Box } from "@mui/material"
import { TextField } from "@mui/material";
import { 
    FormControl, 
    FormControlLabel, 
    FormLabel, 
    RadioGroup, 
    Radio,
    Button,
    Stack
} from "@mui/material"

export const CreatePost = ({ addedNewPost, initialPost, handleClearEdit, onPostSubmit }) => {
  const [formValues, setFormValues] = useState(initialPost || {})
  const [selectedPropId, setSelectedPropId] = useState(initialPost?.propSizeOptionsId || null)
  const [selectedBattId, setSelectedBattId] = useState(initialPost?.batterySizeOptionsId || null)
  const [isEditing, setIsEditing] = useState(!!initialPost)

  const userId = localStorage.getItem("propwish_user")
  const parsedUser = JSON.parse(userId)
  const loggedInUserId = parsedUser.id

  useEffect(() => {
    setFormValues(initialPost || {})
    setIsEditing(!!initialPost)
  }, [initialPost])

  const handleSubmitButton = async () => {
    const postData = {
      ...formValues,
      propSizeOptionsId: +selectedPropId,
      batterySizeOptionsId: +selectedBattId,
      propSizeOption: selectedPropId.Size,
      batterySizeOption: selectedBattId.size,
      userId: loggedInUserId
    }

    try {
      if (isEditing) {
        // Send a PUT request for editing an existing post
        const response = await fetch(`http://localhost:8088/posts/${initialPost.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(postData)
        });
        if (response.ok) {
          handleClearEdit() // Clear edit mode after successful update
          onPostSubmit() // Call the onPostSubmit function to trigger a re-render of MyPosts
          console.log("Post updated successfully!")
        } else {
          console.error("Failed to update post:", response.statusText)
        }
      } else {
        // Send a POST request for creating a new post
        const response = await fetch("http://localhost:8088/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(postData)
        });
        if (response.ok) {
          setFormValues({}) // Clear form values after successful creation
          setSelectedPropId(null)
          setSelectedBattId(null)
          addedNewPost(postData)
          onPostSubmit() // call the onPostSubmit function to trigger a re-render of MyPosts
          console.log("Post submitted successfully!")
        } else {
          console.error("Failed to submit post:", response.statusText)
        }
      }
    } catch (error) {
      console.error("Error submitting post:", error)
    }
  }

  const handleImgUrlTextFieldChange = (event) => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleDroneNameTextFieldChange = (event) => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleDescriptionTextFieldChange = (event) => {
    const { name, value } = event.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

    const handlePropRadioChange = (event) => {
      setSelectedPropId(event.target.value)
    }
  
    const handleBattRadioChange = (event) => {
      setSelectedBattId(event.target.value)
    }

  return (
    <Box
      height={700}
      width={1000}
      my={4}
      mx={4}
      display="flex"
      flexWrap="wrap"
      flexDirection="row"
      justifyContent="center"
      alignItems="flex-end"
      gap={3}
      p={2}
      sx={{
        border: "2px solid #FAFAFA",
        borderRadius: "5px",
        boxShadow: "0px 1px 2px 1px rgba(0,0,0,0.5)",
      }}
    >
      <Box order="2">
        <FormControl>
          <FormLabel
            id="radio-buttons-group"
            sx={{
              fontWeight: "bold",
              color: "#2979ff",
              fontSize: "18px",
            }}
          >
            Prop Size
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group"
            name="propSizeOptionId"
            value={selectedPropId}
            onChange={handlePropRadioChange}
          >
            <FormControlLabel 
              value={1}
              label="3 Inch" 
              control={<Radio />} 
            />

            <FormControlLabel
              value={2}
              label="3.5 Inch"
              control={<Radio />}
            />

            <FormControlLabel 
              value={3} 
              label="4 Inch" 
              control={<Radio />} 
            />

            <FormControlLabel 
              value={4} 
              label="5 Inch" 
              control={<Radio />} 
            />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel
            id="radio-buttons-group"
            sx={{
              fontWeight: "bold",
              color: "#2979ff",
              fontSize: "18px",
            }}
          >
            Battery Size
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group"
            name="batterySizeOptionId"
            value={selectedBattId}
            onChange={handleBattRadioChange}
          >
            <FormControlLabel
              value={1}
              control={<Radio />}
              label="3s (3 cell)"
            />
            <FormControlLabel
              value={2}
              control={<Radio />}
              label="4s (4 cell)"
            />
            <FormControlLabel
              value={3}
              control={<Radio />}
              label="6s (6 cell)"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Box
        flexBasis="55%"
        order="1"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "62ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Image Url"
          variant="outlined"
          name="imgUrl"
          value={formValues?.imgUrl || ""}
          onChange={handleImgUrlTextFieldChange}
        />
        <TextField
          id="outlined-basic"
          label="Drone Name"
          variant="outlined"
          name="droneName"
          value={formValues?.droneName || ""}
          onChange={handleDroneNameTextFieldChange}
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          name="description"
          value={formValues?.description || ""}
          onChange={handleDescriptionTextFieldChange}
        />
      </Box>
      <Stack order="3" mx={3} my={1} gap={4}>
        {isEditing && (
          <Button variant="contained" onClick={handleClearEdit}>
            Cancel
          </Button>
        )}

        <Button variant="contained" onClick={handleSubmitButton}>
          {isEditing ? "Save Post" : "Submit Post"}
        </Button>
      </Stack>
    </Box>
  );
};
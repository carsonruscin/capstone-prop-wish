import { useState, useEffect } from "react"
import { Box, Typography } from "@mui/material"
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

export const CreatePost = () => {
  const [formValues, setFormValues] = useState({})
  const [selectedPropValue, setSelectedPropValue] = useState('')
  const [selectedBattValue, setSelectedBattValue] = useState('')

  const handleSaveButton = () => {
    const postData = {
      ...formValues,
      propSizeOptionId: selectedPropValue,
      batterySizeOptionId: selectedBattValue,
    }

    fetch("http://localhost:8088/posts", {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    console.log(postData)
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
      setSelectedPropValue(event.target.value)
    }
  
    const handleBattRadioChange = (event) => {
      setSelectedBattValue(event.target.value)
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
            sx={{ fontWeight: "bold", color: "#2979ff", fontSize: "18px" }}
          >
            Prop Size
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group"
            name="propSizeOptionId"
            value={selectedPropValue}
            onChange={handlePropRadioChange}
          >
            <FormControlLabel 
              value="3" 
              label="3 Inch"
              control={<Radio />}  
            />

            <FormControlLabel
              value="3.5"
              label="3.5 Inch"
              control={<Radio />}
            />

            <FormControlLabel 
            value="4" 
            label="4 Inch"
            control={<Radio />}  
            />

            <FormControlLabel 
            value="5" 
            label="5 Inch"
            control={<Radio />}  
            />
          </RadioGroup>
        </FormControl>

        <FormControl>
          <FormLabel
            id="radio-buttons-group"
            sx={{ fontWeight: "bold", color: "#2979ff", fontSize: "18px" }}
          >
            Battery Size
          </FormLabel>
          <RadioGroup
            aria-labelledby="radio-buttons-group"
            name="batterySizeOptionId"
            value={selectedBattValue}
            onChange={handleBattRadioChange}
          >
            <FormControlLabel
              value="3"
              control={<Radio />}
              label="3s (3 cell)"
            />
            <FormControlLabel
              value="4"
              control={<Radio />}
              label="4s (4 cell)"
            />
            <FormControlLabel
              value="6"
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
          name='imgUrl'
          onChange={handleImgUrlTextFieldChange}
        />
        <TextField 
          id="outlined-basic" 
          label="Drone Name" 
          variant="outlined"
          name='droneName'
          onChange={handleDroneNameTextFieldChange} 
        />
        <TextField
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          name='description'
          onChange={handleDescriptionTextFieldChange}
        />
      </Box>
      <Box order="3" mx={3} my={1}>
        <Button variant="contained" onClick={handleSaveButton}>Save Post</Button>
      </Box>
    </Box>
  );
};
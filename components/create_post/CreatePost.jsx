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
  return (
    <Box
      height={700}
      width={1000}
      my={4}
      mx={4}
      display="flex"
      justifyContent='space-around'
      alignItems='flex-end'
      gap={0}
      p={2}
      sx={{ border: "2px solid #FAFAFA", borderRadius: '5px', boxShadow: '0px 1px 2px 1px rgba(0,0,0,0.5)' }}
    >
        <Box 
           component='form'
           sx={{
            '& .MuiTextField-root': { m: 1, width: '75ch'},
           }}
           noValidate
           autoComplete="off"
        >
            <TextField id="outlined-basic" label="Name" variant="outlined" />

            <TextField
                id='outlined-multiline-static'
                label='Description'
                multiline
                rows={4}
                defaultValue=''
            ></TextField>
            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Select Prop Size</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Select Prop Size"
                name="radio-buttons-group"
            >
                <FormControlLabel value="3" control={<Radio />} label="3 Inch" />
                <FormControlLabel value="3.5" control={<Radio />} label="3.5 Inch" />
                <FormControlLabel value="4" control={<Radio />} label="4 Inch" />
                <FormControlLabel value="5" control={<Radio />} label="5 Inch" />
            </RadioGroup>
            </FormControl>

            <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Select Battery Size</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="Select Battery Size"
                name="radio-buttons-group"
            >
                <FormControlLabel value="3" control={<Radio />} label="3s (3 cell)" />
                <FormControlLabel value="4" control={<Radio />} label="4s (4 cell)" />
                <FormControlLabel value="6" control={<Radio />} label="6s (6 cell)" />
            </RadioGroup>
            </FormControl>
        </Box>
        <Button variant="contained">Save</Button>
    </Box>
  );
};
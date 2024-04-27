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
      flexWrap='wrap'
      flexDirection='row'
      justifyContent='center'
      alignItems='flex-end'
      gap={3}
      p={2}
      sx={{ border: "2px solid #FAFAFA", borderRadius: '5px', boxShadow: '0px 1px 2px 1px rgba(0,0,0,0.5)' }}
    >   <Box order='2'>
            <FormControl>
            <FormLabel id="radio-buttons-group" sx={{fontWeight: 'bold', color: '#2979ff', fontSize: '18px'}}>Prop Size</FormLabel>
            <RadioGroup
                aria-labelledby="radio-buttons-group"
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
            <FormLabel id="radio-buttons-group" sx={{fontWeight: 'bold', color: '#2979ff', fontSize: '18px'}}>Battery Size</FormLabel>
            <RadioGroup
                aria-labelledby="radio-buttons-group"
                defaultValue="Select Battery Size"
                name="radio-buttons-group"
            >
                <FormControlLabel value="3" control={<Radio />} label="3s (3 cell)" />
                <FormControlLabel value="4" control={<Radio />} label="4s (4 cell)" />
                <FormControlLabel value="6" control={<Radio />} label="6s (6 cell)" />
            </RadioGroup>
            </FormControl>
        </Box>
        
        <Box 
            flexBasis='55%'
            order='1'
           component='form'
           sx={{
            '& .MuiTextField-root': { m: 1, width: '62ch'},
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
            ></TextField>
        </Box>
        <Box order='3' mx={3} my={1}>
        <Button variant="contained">Save Post</Button>
        </Box>
    </Box>
  );
};
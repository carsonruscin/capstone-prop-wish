import { Box, Typography } from "@mui/material"
import { Card, CardActions, CardContent, CardMedia, Button, } from "@mui/material"

export const MyCards = () => {
    return (
        <Card sx={{ maxWidth: 400 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="src/assets/images/geprc-green.jpg"
          title="GepRC"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            GepRC Mark V
          </Typography>
          <Typography variant="body2" color="text.secondary">
          "Omnia mutantur, nos et mutamur in illis; tempus et nos mutamur in illis, 
           et omnia mutantur in tempore, et tempus non remanet."
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="med">Edit</Button>
          <Button size="med">Delete</Button>
        </CardActions>
      </Card>
    )
}
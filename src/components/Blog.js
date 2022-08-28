import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import { Box } from '@mui/system';
import React from 'react'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
const Blog = ({title,description,imageURL,userName, isUser, id}) => {
  const navigate = useNavigate();
  const handleEdit = (e) => {
    navigate(`/myBlogs/${id}`)
  }
  const deleteRequest = async ()=>{
    const res = await axios.delete(`https://blog-application-api.herokuapp.com/api/blog/${id}`).catch(err=>console.log(err))
    const data = await res.data;
    return data;
  }
  const handleDelete = (e) => {
    deleteRequest().then(()=>navigate("/")).then(()=>navigate("/blogs"));
  }
  console.log(title,isUser);
  return (
    <div>
         <Card sx={{ width: "40%", margin: 'auto', marginTop: 2, padding: 2, boxShadow: "5px 5px 10px #ccc", ":hover:":{
            boxShadow: "10px 10px 20px #ccc"
         } }}>
          {isUser &&(
            <Box display="flex">
              <IconButton onClick={handleEdit} sx={{marginLeft: 'auto'}}><ModeEditIcon /></IconButton>
              <IconButton onClick={handleDelete}><DeleteIcon /></IconButton>
            </Box>
          )}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            {userName}
          </Avatar>
        }
        title={title}
      />
      <CardMedia
        component="img"
        height="194"
        image={imageURL}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        <b>{userName}</b> {": "}  {description}
        </Typography>
      </CardContent>
      
    </Card>

    </div>
  )
}

export default Blog
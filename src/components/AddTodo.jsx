import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import { addTodo } from '../features/todoHandler/todoReducer';
import { Box, TextField, Button, Paper, Typography } from "@mui/material";





const AddToDo = () => {
    const [input, setInput] = useState("");
    const dispatch  = useDispatch();

    const addToDoHandler = (e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }

  return (
    <>
  <Box
    sx={{
      minHeight: "40vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom:"5 rem"
    }}
  >
    <Paper
      elevation={4}
      sx={{
        padding: 4,
        width: 400,
        borderRadius: 3,
        backgroundColor: "rgba(255, 255, 255, 0.1)",  
        backdropFilter: "blur(10px)",  
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)" 
      }}
    >
      <Typography
        variant="h6"
        sx={{ textAlign: "center", fontWeight: 600, marginBottom: "1em", color: "white"}}
      >
        Add New Todo
      </Typography>

      <Box
        component="form"
        onSubmit={addToDoHandler}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3
        }}
      >
        <TextField
          label="Task"
          variant="outlined"
          placeholder='Enter your task here'
          fullWidth
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
          sx={{
            "& .MuiOutlinedInput-root": {
              color: "white",
              "& fieldset": { borderColor: "rgba(255,255,255,0.4)" },
              "&:hover fieldset": { borderColor: "rgba(255,255,255,0.8)" },
            },
            "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.7)" },
          }}
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600,
            background: "#1DB954 "
          }}
        >
          Add Task
        </Button>
      </Box>
    </Paper>
  </Box>
</>
  )
}

export default AddToDo
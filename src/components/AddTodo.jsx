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
        borderRadius: 3
      }}
    >
      <Typography
        variant="h6"
        sx={{ textAlign: "center", fontWeight: 600, marginBottom: "1em"}}
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
        />

        <Button
          type="submit"
          variant="contained"
          size="large"
          sx={{
            borderRadius: 2,
            textTransform: "none",
            fontWeight: 600
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
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todoHandler/todoReducer'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Box } from '@mui/material';

const Todos = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

  return (
    <Box sx={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(2, 1fr)", 
      gap: "1rem",
      padding: "1rem"
    }}>
      {todos.map((todo) => (
        <ListItem key={todo.id} sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "whitesmoke",
          borderRadius: "4px",
          gap:"2rem",
          backgroundColor: "rgba(255, 255, 255, 0.1)",   
          backdropFilter: "blur(10px)",                   
          border: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",  
          
        }}>
          <span style={{ flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", color:"white" }}>
    {todo.text}
  </span>
           <button onClick={() => { dispatch(removeTodo(todo.id)) }} style={{
            backgroundColor: "rgba(224, 4, 4, 0.7)",
            color: "#fff",
            border: "none",
            borderRadius: "30px",
            padding: "4px 10px",
            cursor: "pointer",
            flexShrink: 0
          }}>X</button>
        </ListItem>
      ))}
    </Box>
  )
}

export default Todos
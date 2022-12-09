// import React from "react";
import {book_img} from "./style"
import {container} from "./style"


function App() {
   return(
    <>
    <div style={container}>
    <h1>This is an amazing book</h1>
    
    <img src="book_image.jpg" style={book_img}></img>
    </div>
    </>
  )
}

export default App;


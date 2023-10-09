import React, { useContext } from "react"
import { ThemeContext } from "../MoreHooks"

const ContextTest = () => {
    const name = useContext (ThemeContext)
  return (
    <>
       <div>ContextTest</div>
       <p>{name} </p>
    </> 
  ) 
}
export default ContextTest
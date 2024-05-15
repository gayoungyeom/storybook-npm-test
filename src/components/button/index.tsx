import { Button as MUIButton } from "@mui/material"
import React from "react"

interface IButtonProps {
  text: string
  onClick: () => void
}

const Button = ({ text = "버튼", onClick }: IButtonProps) => {
  return (
    <MUIButton variant="contained" onClick={onClick}>
      {text}
    </MUIButton>
  )
}

export default Button

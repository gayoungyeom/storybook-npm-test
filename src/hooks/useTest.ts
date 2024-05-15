import { useState } from "react"

const useCustomTest = () => {
  const [test, setTest] = useState("")

  return { test, setTest }
}

export default useCustomTest

"use client"

import { useGetTestList } from "@apis/test"
import Button from "@components/button"
import React, { useState } from "react"

const Test = () => {
  const { data, isLoading, isError } = useGetTestList()
  const [num, setNum] = useState(0)

  if (isLoading) return <div>LOADING...</div>
  if (isError) return <div>ERROR...</div>
  return (
    <div>
      <h1>테스트 {num}</h1>
      <Button text="클릭" onClick={() => setNum((prev) => prev + 1)} />
      <ul>
        {data?.map((d) => (
          <li key={d.id} style={{ padding: "4px" }}>
            {d.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Test

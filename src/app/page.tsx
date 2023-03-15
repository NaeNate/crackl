"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

const Home = () => {
  const [room, setRoom] = useState("")
  const [name, setName] = useState("")

  const router = useRouter()

  const enter = (e: FormEvent) => {
    e.preventDefault()

    localStorage.setItem("name", name)

    router.push("/" + room)
  }

  return (
    <>
      <form onSubmit={enter}>
        <input
          placeholder="Room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button>Enter</button>
      </form>
    </>
  )
}

export default Home

import type { NextPage } from "next"
import { useRouter } from "next/router"
import { FormEvent, useState } from "react"
import styles from "../styles/Index.module.css"

const Index: NextPage = () => {
  const [room, setRoom] = useState("")
  const [username, setUsername] = useState("")

  const router = useRouter()

  const handleEnterRoom = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    localStorage.setItem("username", username)

    router.push(`/${room}`)
  }

  return (
    <>
      <h1 className={styles.header}>Crackl</h1>
      <form onSubmit={handleEnterRoom}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Room"
          value={room}
          onChange={(e) => {
            setRoom(e.target.value)
          }}
        />
        <button type="submit">Enter Room</button>
      </form>
    </>
  )
}

export default Index

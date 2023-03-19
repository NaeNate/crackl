"use client"

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import styles from "../styles/Home.module.css"

const Home = () => {
  const [room, setRoom] = useState("")
  const [name, setName] = useState("")
  const [error, setError] = useState("")

  const router = useRouter()

  const enter = (e: FormEvent) => {
    e.preventDefault()

    if (!room) {
      setError("Please enter a room")

      return
    }

    if (!name) {
      setError("Please enter a name")

      return
    }

    localStorage.setItem("name", name)
    router.push("/" + room.toLowerCase())
  }

  return (
    <>
      <form onSubmit={enter} className={styles.form}>
        {error && <p className={styles.error}>{error}</p>}

        <input
          placeholder="Room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          className={styles.room}
        />

        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={styles.name}
        />

        <button className={styles.button}>Enter</button>
      </form>
    </>
  )
}

export default Home

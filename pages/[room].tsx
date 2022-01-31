import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import { FormEvent, useEffect, useState } from "react"
import { db } from "../firebase"
import styles from "../styles/Room.module.css"

const Room: NextPage = () => {
  const [room, setRoom] = useState("")
  const [username, setUsername] = useState("")
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState<
    { message: string; author: string }[]
  >([])

  const router = useRouter()

  useEffect(() => {
    if (!router.isReady) return

    const username = localStorage.getItem("username")
    if (!username) router.push("/")

    setRoom(router.asPath.substring(1))
    setUsername(username as string)

    onSnapshot(
      query(
        collection(db, router.asPath.substring(1)),
        orderBy("timestamp", "asc")
      ),
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { message: doc.data().message, author: doc.data().author },
          ])
        })
      }
    )
  }, [router.isReady])

  const handleSendMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const tempMessage = message

    setMessages([])
    setMessage("")

    await addDoc(collection(db, router.asPath.substring(1)), {
      message: tempMessage,
      author: username,
      timestamp: Date.now(),
    })
  }

  return (
    <>
      <h1 className={styles.header}>{room.replace(/%20/g, " ")}</h1>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Send Message</button>
      </form>
      {messages.map(({ message, author }, i) => {
        return (
          <div key={i}>
            <p style={{ fontWeight: "bold" }}>{author}</p>
            <p>{message}</p>
          </div>
        )
      })}
    </>
  )
}

export default Room

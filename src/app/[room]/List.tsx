"use client"

import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Message from "../../components/Message"
import { db } from "../../firebase"

const List = () => {
  const [messages, setMessages] = useState<DocumentData[]>([])

  const q = query(
    collection(db, usePathname().substring(1).toLowerCase()),
    orderBy("timestamp", "asc")
  )

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  return (
    <>
      {messages.map((message, i) => {
        let first = true

        if (messages[i - 1]) {
          if (messages[i - 1].author == message.author) {
            first = false
          }
        }

        return <Message data={message} first={first} key={i} />
      })}
      <div
        style={{
          height: "40px",
        }}
      ></div>
    </>
  )
}

export default List

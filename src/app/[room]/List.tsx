"use client"

import {
  collection,
  DocumentData,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { db } from "../../firebase"
import Message from "./Message"

const List = () => {
  const [messages, setMessages] = useState<DocumentData[]>([])

  const q = query(
    collection(db, usePathname().substring(1)),
    orderBy("timestamp", "asc"),
    limit(10)
  )

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  console.log(messages)

  return (
    <>
      {messages.map((message, i) => (
        <Message data={message} key={i} />
      ))}
    </>
  )
}

export default List

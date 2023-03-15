"use client"

import { addDoc, collection } from "firebase/firestore"
import { usePathname } from "next/navigation"
import { FormEvent, useState } from "react"

import { db } from "../../firebase"

const Form = () => {
  const [message, setMessage] = useState("")

  const pathname = usePathname()

  const submit = async (e: FormEvent) => {
    e.preventDefault()

    const temp = message
    setMessage("")

    await addDoc(collection(db, pathname.substring(1)), {
      message: temp,
      author: localStorage.getItem("name"),
      timestamp: Date.now(),
    })
  }

  return (
    <>
      <form onSubmit={submit}>
        <input
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  )
}

export default Form

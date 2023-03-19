"use client"

import { addDoc, collection } from "firebase/firestore"
import styles from "../../styles/Form.module.css"
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

    await addDoc(collection(db, pathname.substring(1).toLowerCase()), {
      message: temp,
      author: localStorage.getItem("name"),
      timestamp: Date.now(),
    })
  }

  return (
    <div className={styles.container}>
      <form onSubmit={submit}>
        <input
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={styles.message}
        />

        <button className={styles.button}>Submit</button>
      </form>
    </div>
  )
}

export default Form

import styles from "../styles/Message.module.css"

const Message = ({ data }: any) => {
  return (
    <div className={styles.container}>
      <span className={styles.author}>{data.author}</span>{" "}
      <span className={styles.date}>DATE</span>
      <p>{data.message}</p>
    </div>
  )
}

export default Message

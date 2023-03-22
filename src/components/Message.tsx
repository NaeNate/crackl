import styles from "../styles/Message.module.css"

const Message = ({ data, first }: any) => {
  return (
    <div className={styles.container}>
      {first && (
        <>
          <p className={styles.author}>{data.author}</p>{" "}
        </>
      )}
      <p className={styles.text}>{data.message}</p>
    </div>
  )
}

export default Message

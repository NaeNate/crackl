const Message = ({ data }: any) => {
  return (
    <>
      <p>
        {data.author} - {new Date(data.timestamp).toDateString()}
      </p>
      <p>{data.message}</p>
    </>
  )
}

export default Message

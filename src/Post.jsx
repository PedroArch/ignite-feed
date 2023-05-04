function Post({author, content} = props) {

  return (
    <div>
     <strong>{author}</strong>
     <p>{content}</p>
    </div>
  )
}

export default Post;
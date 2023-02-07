import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EditFormPost from "../../components/posts/EditForm";



const EditPost = () => {
  const {postId} = useParams()
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)
 
 useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
  .then(res => res.json())
  .then(data => {
    setPost(data)
    setLoading(false)
    setError(null)
  })
  .catch(err => {
    setError(err.message)
    setLoading(false)
  })
 },[postId])


  return(
    <>
    <h2>Edit Post :</h2>
    {error && <div>{error}</div> }
    {loading && <div className="spinner-border"></div>}
    {post && <EditFormPost  post={post}/>}
    </>
  )}

export default EditPost;
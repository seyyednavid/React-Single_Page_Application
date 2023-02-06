import { Link } from "react-router-dom"



const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto alias expedita tenetur eligendi eos adipisci optio, quas sapiente tempore in corporis hic nam. <br></br> voluptatem! Neque nemo cum illo reiciendis cumque aut numquam fugiat dolores, nostrum perspiciatis adipisci assumenda totam et.</p>
        <Link className="btn btn-dark" to="/users">Users</Link>
        <Link className="btn btn-light ms-3" to="/posts">Posts</Link>
        </div>
      </div>
    </div>
  )
}
export default Home
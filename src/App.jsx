import { useState } from 'react';
import axios from "axios";

export const App = () => {

  const [post, setPost] = useState({
    title: '',
    photo: null,
  });

  const handleSubmit = async (e) => { 
    e.preventDefault();
    const formData = new FormData();
    //formData.append('title', post.title);
    formData.append('photo', post.photo);

    const response = await axios.post('http://localhost:3000/upload', formData, { headers: { "Content-Type": "multipart/form-data" }});
    console.log(response)
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div className="row justify-content-center align-items-center mt-5">
        <div className="col-md-4">
          <label htmlFor="title">Title:</label>
          <input className="form-control" type="text" name="title" placeholder="Title" value={post.title} onChange={(e) => setPost({ ...post, title: e.target.value })} />
        </div>
        <div className="col-md-4">
          <label htmlFor="title">File:</label>
          <input className="d-block" type="file" name="photo" id="photo" onChange={(e) => setPost({ ...post, photo: e.target.files[0] })}  accept="image/*" />
        </div>
        <div className="col-md-12 text-center mt-5">
          <button className="btn btn-primary">Subir</button>
        </div>
      </div>
    </form>
    </>
  )
}
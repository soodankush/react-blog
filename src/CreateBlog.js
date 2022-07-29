import { useState } from "react";

const CreateBlog = () => {

  const [title, setTitle ] = useState('');
  const [description, setDescription ] = useState('');
  const [body, setBody] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [isPending, setIsPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, description, body, author:authorName, id:authorId};
    fetch('http://localhost:8000/blogs', {
       method: 'POST',
      headers:  { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log("New Blog added");
      setIsPending(true);
    })
  }

  return (
    <div>
      <h2>Add A new Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="blogTitle">Title</label>
          <input type="text" className="form-control" id="blogTitle" placeholder="Enter blog title" value={title} onChange={ (e) => setTitle(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="blogDescription">Description</label>
          <input type="text" className="form-control" id="blogDescription" placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="blogBody">Body</label>
          <input type="text" className="form-control" id="blogBody" placeholder="Blog Body" value={body} onChange={(e) => setBody(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="blogAuthor">Author</label>
          <input type="text" className="form-control" id="blogAuthor" placeholder="Enter Author Name" value={authorName} onChange={(e) => {setAuthorName(e.target.value)}}/>
        </div>
        <div className="form-group">
          <label htmlFor="blogAuthorId">Author's Id</label>
          <input type="text" className="form-control" id="blogAuthorId" placeholder="Enter Author Id" value={authorId} onChange={(e) => {setAuthorId(e.target.value)}}/>
        </div>
        <div className="form-group text-center">
          {!isPending && <button type="submit" className="btn btn-warning btn-outline-info">Add Blog</button>}
          {isPending && <button className="btn btn-warning btn-outline-info">Adding</button>}
        </div>
      </form>
    </div>
  );
}

export default CreateBlog;
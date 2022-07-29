import Navbar from "./Navbar";
import Home from "./Home";
import {Route, Routes} from "react-router-dom";
import CreateBlog from "./CreateBlog";
import BlogDetails from "./BlogDetails";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />}>Home</Route>
          <Route path="/new-blog" element={<CreateBlog />}>Create Blog</Route>
          <Route path="/blogs/:id" element={<BlogDetails />}>View Blog</Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;

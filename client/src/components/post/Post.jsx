import "./post.css";
import { Link } from "react-router-dom";
import { getPhotoFile } from "../../config"
export default function Post({ post }) {
  return (
    <div className="post">
      {post.photo && (
        <img
          crossOrigin="use-credentials"
          className="postImg"
          src={getPhotoFile(post.photo)}
          alt={post.title}
        />
      )}
      <div className="postInfo">
        <div className="postCats">
          {post.categories.map((c) => (
            <span className="postCat">{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className="link">
          <span className="postTitle">{post.title}</span>
        </Link>
        <hr />
        <span className="postDate">
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className="postDesc">{post.desc}</p>
    </div>
  );
}

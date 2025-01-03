import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4 flex flex-col justify-between h-80">
        <div className="w-full mb-4 relative aspect-w-16 aspect-h-9">
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;

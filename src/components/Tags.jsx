import React from "react";
import { Link } from "react-router-dom";

export default function Tags() {
  return (
    <div className="nav tag-cloud">
      <Link to="/blog-post-2">Design</Link>
      <Link to="/blog-post-1">Development</Link>
      <Link to="/blog-post-3">Travel</Link>
    </div>
  );
}

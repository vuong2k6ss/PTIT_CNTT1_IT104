import React from 'react';

type Post = {
  id: number;
  title: string;
  content: string;
  author: string;
};

const DetailPost = ({ post }: { post: Post }) => {
  return (
    <div style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
      <p><strong>Id:</strong> {post.id}</p>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Content:</strong> {post.content}</p>
      <p><strong>Author:</strong> {post.author}</p>
    </div>
  );
};

export default DetailPost;

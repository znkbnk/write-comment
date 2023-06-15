//Comment.js
import React, { useState } from 'react';

function Comment() {
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newComment = {
      content: commentInput,
      timestamp: new Date().toLocaleString(),
    };
    setComments([...comments, newComment]);
    setCommentInput('');
  };

  return (
    <div>
      <h1>Write a Comment</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={commentInput}
          onChange={(event) => setCommentInput(event.target.value)}
          placeholder="Write your comment..."
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
      <div>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment.content}</p>
            <small>{comment.timestamp}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;

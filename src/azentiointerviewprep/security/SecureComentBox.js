import React, { useState } from "react";
import DOMPurify from "dompurify";

const SecureComentBox = () => {
  const [comments, setComments] = useState("");
  const [displayComments, setDisplayComments] = useState("");

  const handleInputChange = (input) => {
    setComments(input);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const senitizeComment = DOMPurify.sanitize(comments);
    setDisplayComments(senitizeComment);
  };
  return (
    <div>
      <h3>Comment Section (XSS-Proof ✅)</h3>

      <form onSubmit={handleSubmit}>
        <textarea
          rows={4}
          cols={50}
          value={comments}
          onChange={(e) => handleInputChange(e.target.value)}
          placeholder="Write a comment..."
        />
        <br />
        <button type="submit">Submit Comment</button>
      </form>

      {displayComments && (
        <div>
          <h3>Preview:</h3>
          <p dangerouslySetInnerHTML={{ __html: displayComments }}></p>
        </div>
      )}
    </div>
  );
};

export default SecureComentBox;

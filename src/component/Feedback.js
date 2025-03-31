import React, { useState } from "react";

const feedbackCategories = [
  "Readability",
  "Performance",
  "Security",
  "Documentation",
  "Testing"
];

const FeedbackItem = ({ category, votes, onUpvote, onDownvote }) => {
  return (
    <div className="feedback-item">
      <h3>{category}</h3>
      <button onClick={() => onUpvote(category)}>⬆️ {votes[category].upvotes}</button>
      <button onClick={() => onDownvote(category)}>⬇️ {votes[category].downvotes}</button>
    </div>
  );
};

const CodeReviewFeedback = () => {
  const [votes, setVotes] = useState(
    feedbackCategories.reduce((acc, category) => {
      acc[category] = { upvotes: 0, downvotes: 0 };
      return acc;
    }, {})
  );

  const handleUpvote = (category) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [category]: {
        ...prevVotes[category],
        upvotes: prevVotes[category].upvotes + 1
      }
    }));
  };

  const handleDownvote = (category) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [category]: {
        ...prevVotes[category],
        downvotes: prevVotes[category].downvotes + 1
      }
    }));
  };

  return (
    <div className="feedback-container">
      <h2>Code Review Feedback</h2>
      {feedbackCategories.map((category) => (
        <FeedbackItem
          key={category}
          category={category}
          votes={votes}
          onUpvote={handleUpvote}
          onDownvote={handleDownvote}
        />
      ))}
    </div>
  );
};

export default CodeReviewFeedback;

import { Input } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { CommentContext } from "../../context/commentsContext";
import Comments from "../Commentarii/Comments";
import "./Comments.css";
import Likes from "../Likes/Likes";

const CommentList = ({ id }) => {
  const { getComments, comments, createComment } = useContext(CommentContext);
  const [email, setEmail] = useState(false);
  const [newComment, setNewComment] = useState({
    word: "",
  });
  

  useEffect(() => {
    setEmail(localStorage.getItem('user') ? true : false)
    getComments(id);
  });

  const handleValues = (e) => {
    const createdAtMs = Date.now();
    setNewComment({
      ...newComment,
      [e.target.name]: e.target.value,
      createdAtMs,
      tanksId: id,
    });
  };

  const checkValues = () => {
    if (!newComment.word) {
      alert("Вы еще ничего не написали!");
      return;
    }
    createComment(newComment, id);
    setNewComment({ word: "" });
  };

  return (
    <div className="comment-list">
      <div className="comment-header">
        <h3 className="comment-title">Оставьте отзыв/комментарий</h3>
        {email && <Likes />}
      </div>
      <div className="comments-container">
        {comments &&
          comments
            .sort((a, b) => b.createdAtMs - a.createdAtMs)
            .map((item) => <Comments id={id} key={item.id} item={item} />)}
      </div>
      {email && (
        <div className="comment-actions">
          <Input
            id="comment"
            onChange={handleValues}
            name="word"
            placeholder="Enter text..."
            value={newComment.word}
            className="comment-input"
          />
          <button onClick={checkValues} className="comment-button">
            Add comment
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentList;

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
    getComments(id);
  }, [getComments, id]); 

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
    <div
      style={{
        width: "100%",
        height: "600px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "10px 20px",
        border: "solid black 2px",
      }}
    >
      <div className="d-flex justify-content-between">
        <h3 style={{ textAlign: "center" }}>Оставьте отзыв/комментарий</h3>
        {email ? <Likes /> : null}
      </div>
      <div className="items-list">
        {comments &&
          comments
            .sort((a, b) => b.createdAtMs - a.createdAtMs)
            .map((item) => <Comments id={id} key={item.id} item={item} />)}
      </div>
      {email && (
        <div style={{ display: "flex", height: "60px" }}>
          <Input
            id="comment"
            onChange={handleValues}
            name="word"
            placeholder="Enter text..."
            value={newComment.word}
          />
          <button
            onClick={checkValues}
            style={{
              background: "#3399ff",
              borderRadius: "5px",
              border: "none",
              color: "white",
            }}
          >
            Add comment
          </button>
        </div>
      )}
    </div>
  );
};

export default CommentList;

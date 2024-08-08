
import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons/lib/icons";
import { Tooltip } from "antd";
import React, { useContext, useState } from "react";
import { CommentContext } from "../../context/commentsContext";
import moment from "moment";
import "./Comments.css";
import { timeSince } from "../helpers/calcTimeLeft";

const Comments = ({ item, id }) => {
  const { deleteComment } = useContext(CommentContext); 
  const [email] = useState(false); 
  const [likes, setLikes] = useState(item.newComment.likes || 0); 
  const [dislikes, setDislikes] = useState(item.newComment.dislikes || 0); 
  const [action, setAction] = useState(null);

  const like = () => {
    setLikes(prev => prev + 1); 
    setDislikes(0); 
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0); 
    setDislikes(prev => prev + 1); 
    setAction("disliked");
  };

  return (
    <div className="comment-item">
      <img className="comment-avatar" src="https://joeschmoe.io/api/v1/random" alt="" />
      <div className="comment-details">
        <div className="comment-header-details">
          <span className="comment-author">{item.newComment.email}</span>
          <Tooltip title={moment(item.newComment.createdAtMs).format("YYYY-MM-DD HH:mm:ss")}>
            <span className="comment-date">
              {timeSince(item.newComment.createdAtMs)} назад
            </span>
          </Tooltip>
        </div>
        <p className="comment-text">{item.newComment.word}</p>
        {email === item.newComment.email && (
          <button
            className="comment-button"
            onClick={() => deleteComment(item.id, id)}
          >
            delete
          </button>
        )}
        <div className="comment-actions-buttons">
          <Tooltip title="Like">
            <span className="comment-action-icon" onClick={like}>
              {action === "liked" ? (
                <LikeFilled style={{ color: "red" }} />
              ) : (
                <LikeOutlined />
              )}
              <span className="comment-action-count">{likes}</span>
            </span>
          </Tooltip>

          <Tooltip title="Dislike">
            <span className="comment-action-icon" onClick={dislike}>
              {action === "disliked" ? (
                <DislikeFilled style={{ color: "red" }} />
              ) : (
                <DislikeOutlined />
              )}
              <span className="comment-action-count">{dislikes}</span>
            </span>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Comments;

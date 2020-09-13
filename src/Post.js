import React from "react";
import s from "./Post.module.css"

function Post(props) {
  return (
    <div className={s.postWrapper}>
      <img className={s.authorImage} src={props.author.photo} alt='Anakin skywalker' />
      <div className={s.authorInfo}>
        <span className={s.authorName}>{props.author.name}</span>
        <span className={s.authorNickname}>{props.author.nickname}</span>
        <span className={s.date}>{props.date}</span>
      </div>
      <div className={s.contentText}>{props.content}</div>
      <img className={s.contentImage} src={props.image} alt='Ray' />
    </div>
  );
}

export default Post;

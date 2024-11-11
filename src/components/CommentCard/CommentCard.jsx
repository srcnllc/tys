import styles from './CommentCard.module.scss';

export default function CommentCard({avatarImg,avatarName,date,comment}) {
  return (
<div className={styles.commentcard}>
  <div className={styles.avatar}>
    <img src={avatarImg} alt={avatarName} />
  </div>
  <div className={styles.content}>
    <div className={styles.info}>
      <div className={styles.name}>{avatarName}</div>
      <div className={styles.date}>{date}</div>
    </div>
    <div className={styles.comment}>
      <p>{comment}</p>
    </div>
    <div className={styles.reply}>
      <img src="/images/icons/reply.png" alt="Reply" />
      <p>Reply</p>
    </div>
  </div>
</div>
)
}
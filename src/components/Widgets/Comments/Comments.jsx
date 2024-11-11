import { useState } from 'react';
import CommentCard from '../../CommentCard/CommentCard';
import styles from './Comments.module.scss';

export default function Comments() {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Yorum Gönderildi:', comment);
    setComment('');
  };
  const commentLink = [
    {
      avatarName: 'Ali Demir',
      avatarImg: '/images/ali.png',
      date: '20 Dec 2021 - 05:47AM',
      comment: 'I am getting message from customers that when they place order always get error message .',
      subcomment: [
        {
          avatarName: 'Ayşe Yılmaz',
          avatarImg: '/images/ayşe.png',
          date: '20 Dec 2021 - 05:47AM',
          comment:
            'Please be sure to check your Spam mailbox to see if your email filters have identified the email from Dell as spam.',
        },
      ],
    },
    {
      avatarName: 'Ali Demir',
      avatarImg: '/images/ali.png',
      date: '20 Dec 2021 - 05:47AM',
      comment: 'I am getting message from customers that when they place order always get error message .',
    },
    {
      avatarName: 'Ali Demir',
      avatarImg: '/images/ali.png',
      date: '20 Dec 2021 - 05:47AM',
      comment: 'I am getting message from customers that when they place order always get error message .',
    },
  ];
  return (
    <div className={styles.comments}>
      <h2>Yorumlar</h2>
      <ul>
        {commentLink.map((item, index) => (
          <li key={index}>
            <CommentCard
              avatarImg={item.avatarImg}
              avatarName={item.avatarName}
              date={item.date}
              comment={item.comment}
            />
            {item.subcomment &&
              item.subcomment.map((subItem, subIndex) => (
                <div className={styles.subcomment} key={subIndex}>
                  <CommentCard
                    key={subIndex}
                    avatarImg={subItem.avatarImg}
                    avatarName={subItem.avatarName}
                    date={subItem.date}
                    comment={subItem.comment}
                  />
                </div>
              ))}
          </li>
        ))}
      </ul>
      <div className={styles.rule}></div>
      <div className={styles.commentForm}>
        <h3>Yorum Bırakın</h3>
        <form onSubmit={handleSubmit}>
          <textarea value={comment} onChange={handleChange} rows="4" placeholder="Yorumunuzu yazın" />
          <button type="submit">Yorumu Gönder</button>
        </form>
      </div>
    </div>
  );
}

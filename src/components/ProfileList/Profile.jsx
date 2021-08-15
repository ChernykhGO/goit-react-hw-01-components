// Компонент c шаблоном. Для каждого компонента есть отдельная папка с файлом React-компонента и файлом
//   стилей.
import PropTypes from 'prop-types'; 
import styles from './Profile.module.css'

export default function Profile({url, name, tag, location, followers, views, likes='no likes'}) {
    return <div className={styles.Profile}>
      <h2>Profile</h2>
    <div className={styles.Description}>
      <img
        src={url}
        alt="Аватар пользователя"
        width="280"
      />
      <p className={styles.Name}>{name}</p>
      <p className={styles.Tag}>@{tag}</p>
      <p className={styles.Location}>{location}</p>
    </div>
  
    <ul className={styles.Stats}>
      <li className ={styles.Item}>
        <span className={styles.Label}>Followers </span>
        <span className={styles.Quantity}>{followers}</span>
      </li>
      <li className ={styles.Item}>
        <span className={styles.Label}>Views </span>
        <span className={styles.Quantity}>{views}</span>
      </li>
      <li className ={styles.Item}>
        <span className={styles.Label}>Likes </span>
        <span className={styles.Quantity}>{likes}</span>
      </li>
    </ul>
  </div>
  }

  Profile.propTypes = {
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }
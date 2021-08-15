
import PropTypes from 'prop-types'; 
import styles from './FriendListItem.module.css'

export default function FriendListItem(props) {
    // console.log(props);
    const {id, isOnline, url, friendName} = props;
    return (
    <li className={styles.FriendsItem} key={id}>
    <span className={styles.status} style={{background: isOnline ? 'green' : 'red'}}>{isOnline}</span>
    <img className={styles.Avatar} src={url} alt={friendName} width="48" />
    <p className={styles.FriendsName}>{friendName}</p>
  </li>)
  }

  FriendListItem.propTypes = {
    isOnline: PropTypes.bool.isRequired,
    url: PropTypes.string.isRequired,
    friendName: PropTypes.string.isRequired,
  }
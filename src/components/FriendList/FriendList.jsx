
import PropTypes from 'prop-types'; 
import FriendListItem from './FriendListItem'
import styles from './FriendList.module.css'

export default function FriendList ({items}) {
return (
<ul className={styles.FriendList}>
  <h2>Friend list</h2>
{items.map(item => (
<FriendListItem 
  isOnline={item.isOnline}
  url={item.avatar}
  friendName={item.name}
  key={item.id}
  /> 
))}
</ul>
)
}


FriendList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape(
        {
      id: PropTypes.number.isRequired, 
        }) 
    )
}

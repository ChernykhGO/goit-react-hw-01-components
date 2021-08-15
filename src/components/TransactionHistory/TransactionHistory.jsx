import PropTypes from 'prop-types'; 
import styles from './TransactionHistory.module.css'

export default function TransactionHistory({id, type, amount, currency}) {
    // console.log(props);
    return (

        <tr>
        <td className={styles.title}>{type}</td>
        <td className={styles.title}>{amount}</td>
        <td className={styles.title}>{currency}</td>
        </tr>

    )
  }

  TransactionHistory.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired, 
    currency:PropTypes.string.isRequired,

}
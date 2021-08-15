import TransactionHistory from "./TransactionHistory"
import PropTypes from 'prop-types'; 
import styles from './TransactionList.module.css'

export default function TransactionList({items}) {
  return (
<table className={styles.transaction}>
    <thead>
        <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
        </tr>
    </thead>

    {items.map (item => (
    <tbody key={item.id}>
    <TransactionHistory 
    type={item.type}
    amount={item.amount}
    currency={item.currency}
    />
    </tbody>
    // </tr>
    ))} 
</table>
    )
}

TransactionList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(
      {
    id: PropTypes.string.isRequired, 
      }) 
  )
}

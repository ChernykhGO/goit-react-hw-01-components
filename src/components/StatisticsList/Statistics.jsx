import PropTypes from 'prop-types'; 
import styles from './Statistics.module.css'

export default function Statistics({title, stats}) {
    // console.log(stats);
    return <section className={styles.Statistics}>
    {{title} && <h2 className={styles.Title}>{title}</h2>}
    
    <ul className={styles.StatList}>

   {stats.map((el) => {
       return <li className={styles.Item} key={el.id}>
          <span className={styles.Label}>{el.label}</span>
          <span className={styles.Percentage}>{el.percentage}%</span>
       </li>
   }
   )}
    </ul>
    </section>
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape(
        {
      id: PropTypes.string.isRequired, 
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
        }
    ) 
    )
}





// optionalArrayOf: React.PropTypes.arrayOf(React.PropTypes.number)

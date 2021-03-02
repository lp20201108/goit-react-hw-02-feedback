import Notification from '../Notification/Notification'
import PropTypes from 'prop-types'
import styles from '../Style.module.css'


const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return (
        total > 0 ?
        <ul>
            <li>Good: { good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
                <li>Positive feedback:
                 <span className={styles.feedbackResults}>{positivePercentage}</span>
            </li>
            </ul>
        
            : <Notification message="No feedback given yet" />
    )
}

Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number
}

export default Statistics;
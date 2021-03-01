import PropTypes from 'prop-types'
import styles from '../Style.module.css'


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        options.map(option => {
            return <button className={styles.btn}
                type='button'
                key={option}
                onClick={onLeaveFeedback}>{option}</button>
        })
    
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired),
    onLeaveFeedback: PropTypes.func.isRequired
}

export default FeedbackOptions;
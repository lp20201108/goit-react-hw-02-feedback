import PropTypes from 'prop-types'
import styles from '../Style.module.css'

const Notification = ({ message }) => {
    return (
        <h2 className={styles.feedbackResults}>
            { message}
        </h2>
)
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
}

    export default Notification;
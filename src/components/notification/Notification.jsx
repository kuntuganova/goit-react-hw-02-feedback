import PropTypes from 'prop-types';
import {Notific} from './notification.styled'

const Notification = ({message}) => {
    return <Notific>{message}</Notific>;
};

export default Notification;

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};



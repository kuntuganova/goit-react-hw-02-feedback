import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
      <ul className={css.ul}>
      {options.map(item => (
        <button
          key={item}
          className={css.btn}
          onClick={onLeaveFeedback}
        >
          {item}
        </button>
      ))}
      </ul>
    );    
};

FeedbackOptions.propTypes= {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};

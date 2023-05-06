import React from 'react';
import {ButtonsUl,Li, Button} from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const Buttons = ({options, onLeaveFeedback}) => {
    return (
        <ButtonsUl>
            {options.map(option => {
                <Li key={option}>
                    <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
                </Li>
            })}{' '}
        </ButtonsUl>
    );
};

export default Buttons;

Buttons.propTypes= {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}


import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { PhoneStyled } from '../styled/StyledCard';

const Phone = (props) => {
    return (
        <PhoneStyled colors={props.colors}>
            <FontAwesomeIcon icon={faPhone} /> {props.phone}
        </PhoneStyled>
    )
}
export default Phone;

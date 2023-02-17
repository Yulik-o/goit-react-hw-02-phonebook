import PropTypes from 'prop-types';
import StyledButton from './ContactItem.styled';

export function ContactItem({ name, number, handleDelete, btnId}) {
    return (
        <li>{name}: &nbsp{number}
            <StyledButton id={btnId} onClick={handleDelete}>Delete</StyledButton></li>
    )
}

ContactItem.propTypes={
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    handleDelete: PropTypes.func.isRequired,
    btnId: PropTypes.string.isRequired,
    
}
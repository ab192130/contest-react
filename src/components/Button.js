import PropTypes from 'prop-types';

const Button = ({ label, onClick, type, icon }) => {
    return (
        <button type={type} onClick={onClick} className="flex flex-wrap inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-indigo-500 rounded-full shadow ripple hover:shadow-lg hover:bg-indigo-600 focus:outline-none waves-effect">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d={icon} />
            </svg>
            {label}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
};

Button.defaultProps = {
    type: 'button',
    icon: 'M5 13l4 4L19 7'
}

export default Button

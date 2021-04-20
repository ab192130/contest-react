import PropTypes from 'prop-types';

const Button = ({ label, onClick, type }) => {
    return (
        <button type={type} onClick={onClick} className="flex flex-wrap inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-indigo-500 rounded-full shadow ripple hover:shadow-lg hover:bg-indigo-600 focus:outline-none waves-effect">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
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
    type: 'button'
}

export default Button

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onToggleAdd, showAdd }) => {
    return (
        <header className="text-center mb-10">
            <h1 className="text-4xl text-center mb-1">Giveaway Seçimləri</h1>
            <div className="mb-5 text-gray-400">{title}</div>
            <div className="flex flex-wrap justify-center">
                {showAdd ? '' : <Button label="Yeni iştirakçı" onClick={onToggleAdd} />}
            </div>
        </header>
    )
}

Header.defaultProps = { title: 'Heyooo' }
Header.propTypes = { title: PropTypes.string.isRequired }

export default Header

import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onToggleAdd, showAdd, onStart }) => {
    return (
        <header className="text-center mb-10">
            <h1 className="text-4xl text-center mb-1">Giveaway Seçimləri</h1>
            <div className="mb-5 text-gray-400">{title}</div>

            {showAdd ? '' :
                <div className="flex flex-wrap justify-center space-x-3">
                    <Button label="Yeni iştirakçı" onClick={onToggleAdd} icon="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    <Button label="Seç" icon="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" onClick={onStart} />
                </div>
            }
        </header>
    )
}

Header.defaultProps = { title: 'Heyooo' }
Header.propTypes = { title: PropTypes.string.isRequired }

export default Header

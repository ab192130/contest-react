import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('salamlar')
    }

    return (
        <header className="text-center">
            <h1 className="text-4xl text-center mb-1">Giveaway Seçimləri</h1>
            <div className="mb-5 text-gray-400">{title}</div>
            <div className="flex flex-wrap justify-center">
                <Button label="Yeni iştirakçı" onClick={onClick} />
            </div>
        </header>
    )
}

Header.defaultProps = { title: 'Heyooo' }
Header.propTypes = { title: PropTypes.string.isRequired }

export default Header

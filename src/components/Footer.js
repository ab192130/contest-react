import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="text-center">
            <div className="">Copyright &copy; 2021</div>
            <div className="text-gray-400 mb-3">Made by Burhan Aghazada</div>
            <div className="space-x-5">
                <Link to="/" className="mb-10">Əsas səhifə</Link>
                <Link to="/about" className="mb-10">Haqqımızda</Link>
            </div>
        </footer>
    )
}

export default Footer

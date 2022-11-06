import Logo from "./Images/react-logo-vector.svg"
import "./body.css"


export default function Header() {
    return (
        <div className="Header">
            <header>
                <nav className="navigationItems">
                    <ul>
                        <li className="header-logo">
                            <img src={Logo} alt='Header Logo' width={'80px'} height={'80px'} />
                            <h1>React Facts</h1>
                        </li>
                        <li>Home</li>
                        <li>About</li>
                        <li className="end-item">Contact</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}
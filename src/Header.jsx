import Logo from "./Images/react-logo-vector.svg"


export default function Header(){
    return(
        <div className="Header">
              <header>
                <nav>
                    <img src={Logo} alt='Header Logo' width={'80px'} height={'80px'} />
                </nav>
            </header>
        </div>
    )
}
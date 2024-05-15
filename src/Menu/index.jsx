import { Link } from "react-router-dom";
import '../Menu/Menu.css'

export default function Menu(){
    return(
        <nav>
            <Link className="menu-link" to='/'>Home</Link>
            <Link className="menu-link" to='/sabores'>Sabores</Link>
            <Link className="menu-link" to='/sobre'>Sobre</Link>
        </nav>
    )
}
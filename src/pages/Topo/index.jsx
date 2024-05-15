import logo from "../../assets/logo.png";
import Menu from '../../Menu';
import './Topo.css';
export default function Topo(){
    return(
        <header>
            <div className="topo">
            <img src={logo} className="topo-logo"/>
            <Menu />
            </div>
        </header>
    )
}
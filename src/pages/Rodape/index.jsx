import logo from "../../assets/logo.png";
import "./Rodape.css";

export default function Rodape(){
    return(
        <footer>
        <div className="secao-rodape">
            <div className="sub-secao-rodape">
                <div className="logo-rodape">
                    <img src={logo} />
                </div>
                <div className="card-rodape ">
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className="card-rodape">
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className="card-rodape">
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
        </div>
        <div className="autor"><p> Gelateria. Orgulhosamente desenvolvido por "nome do desenvolvedor"</p></div>
        </footer>
    )
}
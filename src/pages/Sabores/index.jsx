import Rodape from "../Rodape";
import Topo from "../Topo";
import './Sabores.css';
import banerSabores from "../../assets/banner-sabores.jpg";
import oreo from '../../assets/sabor-oreo.png';
import pistache from '../../assets/sabor-pistache.png';
import cookies from '../../assets/sabor-cookies-avela.png';
import kiwi from '../../assets/sorbet-kiwi.png';
import morango from '../../assets/sorbet-morango.png';
import limao from '../../assets/sorbet-limao.png';

export default function Sabores(){
    return(
        <>
        <Topo />
        <main>
            <section className="saboresBaner">
                <img src={banerSabores} className="baner"/>
                <h1 className="saboresTitulo">NOSOS SABORES</h1>
            </section>
            <section className="saboresProdutos">
                <h2>SABORES DE SORVETE</h2>
                <div className="saboresSecao">
                    <div className="cardSabor">
                        <img src={oreo}/>
                        <h3>Sorvete de Oreo</h3>
                        <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                    </div>
                    <div className="cardSabor">
                        <img src={pistache}/>
                        <h3>Sorvete Pistache</h3>
                        <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                    </div>
                    <div className="cardSabor">
                        <img src={cookies}/>
                        <h3>Sorvete Cookies & Avelã</h3>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                    <div className="cardSabor">
                        <img src={kiwi}/>
                        <h3>Sorvete de Kiwi</h3>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                    <div className="cardSabor">
                        <img src={morango}/>
                        <h3>Sorvete de Morango</h3>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                    <div className="cardSabor">
                        <img src={limao}/>
                        <h3>Sorvete de Limão Siciliano</h3>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
            </section>
        </main>
        <Rodape />
        </>
    )
}
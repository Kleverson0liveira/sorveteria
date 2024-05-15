import Rodape from "../Rodape"
import Topo from "../Topo"
import baner from "../../assets/banner-sobre.png"
import "./Sobre.css"
import sobreImage from "../../assets/sobre-image.jpg"
import sorveteria from "../../assets/sorveteria.jpg"

export default function Sobre(){
    return(
        <>
        <Topo />
        <main>
            <section>
            <h1>A GELATERIA</h1>
            <img src={baner} className="baner" />
            </section>
            <section className="sobre">
                <div className="secaoSobre">
                    <h2>Sobre Nós</h2>
                    <span>Nós simplesmente amamos sorvete!</span>
                    <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                </div>
                <div className="sobreImagens">
                <div>
                        <img src={sobreImage}/>
                    </div>
                    <div>
                        <img src={sorveteria}/>
                    </div>
                </div>
            </section>
        </main>
        <Rodape />
        </>
    )
}
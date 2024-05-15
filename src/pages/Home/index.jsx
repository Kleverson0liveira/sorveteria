import Menu from "../../Menu";
import Rodape from "../Rodape";
import Topo from "../Topo";
import './Home.css';
import sorvete from "../../assets/banner-home.png";
import sabores from "../../assets/banner-sabores.jpg";
import eventos from "../../assets/eventos-image.jpg";
import sobre from "../../assets/sobre-image.jpg";


export default function Home(){
    return(
        <>
        <Topo />
        <main className="mainHome" >
            <section className="home-baner" >
            <h1 className="home-titulo">SORVETE ARTESANAL</h1>
            <img src={sorvete} className="baner"/>
            </section>
            <section className="home-cards">

                <div className="home-imagem home-card">
                    <img src={sabores}/>
                </div>

                <div className="home-card">
                    <div className="home-texto">
                    <h2>NOSSOS PRODUTOS</h2>
                    <span>Novos e deliciosos!</span>
                    <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                    </div>
                </div>

                <div className="home-card">
                    <div className="home-texto">
                    <h2>NOSSOS EVENTOS</h2>
                    <span>Delicias com sorvete!</span>
                    <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                    </div>
                </div>

                <div className="home-imagem home-card">
                    <img src={eventos}/>
                </div>

                <div className="home-imagem home-card">
                    <img src={sobre}/>
                </div>

                <div className="home-card">
                    <div className="home-texto">
                    <h2>SOBRE NÓS</h2>
                    <span>Alegria em cada casquinha!</span>
                    <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                    </div>
                </div>

            </section>     
        </main>
        <Rodape />
        </>
    )
}
import Card from "../Card/card.jsx";
import Simulador from "../Simulador.jsx";

export default function LP(){
    const cardsData = [
        {
          title: 'Hoje | 19:00',
          content: 'Vencedor',
          buttons: ['Nick Cassidy - 1.85', 'Pascal Wehrlein - 3.40', 'Oliver Rowland - 5.30', '+'],
         
        },
        {
          title: 'Amanhã | 21:30',
          content: 'Top 3/Pódio',
          buttons: ['Nick Cassidy - 1.05', 'Jake Dennis - 5.60', 'Mitch Evans - 7.30', '+'],
         
        },
        {
          title: 'Quinta-feira | 16:30',
          content: 'Melhor volta',
          buttons: ['Nick Cassidy - 1.45', 'Jake Dennis - 9.80', 'Lucas Di Grassi - 15.30', '+'],
         
        },
      ];
    return(
        <>
        <div className="bg-[linear-gradient(to_top,#143896,#000000_100%)]">
          <div className="flex mx-16 justify-between text-white">
              <div className="my-10 w-72">
                  <h1 className="text-3xl">Informações</h1><br />
                  <p className="text-lg">Para melhorar a vizualização da corrida, temos à direita um mini simulador da corrida, onde podemos ver o número de voltas realizadas por cada corredor, a linha de chegada representada pelo retângulo na mesma linha do circulo (que representa a pista) e os quadradinhos coloridos que representam os carros.</p><br />
                  <p className="text-lg">Para conhecer mais estatísticas e o funcionamento dos pontos dos competidor em cada corrida, clique no botão abaixo!</p><br/>
                  <button className="bg-[#486ac0] text-white p-4 rounded-[10px] text-[20px] w-[180px] h-[50px] flex items-center justify-center border border-[#143896] cursor-pointer">Saiba mais</button>
              </div>
            <Simulador />
          </div>
          <div className="flex justify-around">
            {cardsData.map((card, index)=>
            <Card 
              key = {index}
              title={card.title}
              content={card.content}
              buttons={card.buttons}
            />
            )}
          </div>
        </div>
        
        </>
        
    )
}
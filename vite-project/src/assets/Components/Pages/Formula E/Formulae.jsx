import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

export default function FormulaE() {
    return (
        <>
            <Header />
            <div className="bg-gradient-to-t from-[#143896] to-black py-12">
                <div className="w-full max-w-4xl mx-auto px-6 flex flex-col items-center text-white text-center">
                    <article className="text-left">
                        <h2 className="text-2xl font-bold text-[#98baec] mb-6">O que é Fórmula E?</h2>
                        <p className="mb-6">
                            A Fórmula E é um <strong>campeonato</strong> criado pela Federação Internacional de Automobilismo (FIA). A ideia foi concebida em 2011, mas o campeonato só começou mesmo em <strong>2014</strong>.
                        </p>
                        <p className="mb-6">
                            Na temporada de 2021, a Fórmula E passou a ser reconhecida pela FIA como um campeonato mundial, se juntando numa lista que tem:
                        </p>
                        <ul className="list-disc list-inside mb-6">
                            <li>Fórmula 1</li>
                            <li>Campeonato Mundial de Endurance</li>
                            <li>Campeonato Mundial de Rally</li>
                            <li>Campeonato Mundial de Rallycross</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-[#98baec] mb-6">Qual é a proposta da Fórmula E?</h2>
                        <p className="mb-6">
                            A ideia era tornar a Fórmula E um campeonato de monopostos (carros para um piloto só), com <strong>motores elétricos</strong>, em pistas de rua, temporárias, dentro das cidades. Isso se concretizou em 13 de setembro de 2014, no ePrix de Pequim, na China, a primeira corrida da história da categoria.
                        </p>
                        <p className="mb-6">
                            No geral, a Fórmula E é para o mercado de veículos elétricos, o que a Fórmula 1 foi para os veículos a combustão: um laboratório de desenvolvimento.
                        </p>
                        <p className="mb-6">
                            Lá, são <strong>testadas novas tecnologias</strong> que aos poucos podem chegar aos veículos elétricos de passeio, que a gente vê pelas ruas das grandes cidades.
                        </p>
                        <p className="mb-6">
                            Veja só como a evolução correu tão rápido quanto esses carros: nas primeiras temporadas, os pilotos precisavam trocar de carro no meio da corrida, porque <strong>a bateria não tinha autonomia suficiente para durar um ePrix inteiro</strong>.
                        </p>
                        <p className="mb-6">
                            Hoje, as baterias contam com uma <strong>autonomia 150% maior</strong> e duram até o final da prova.
                        </p>

                        <h2 className="text-2xl font-bold text-[#98baec] mb-6">Como é o carro da Fórmula E?</h2>
                        <p className="mb-6">
                            A Fórmula E está em sua terceira geração de carros. Confira as principais mudanças que aconteceram nessas 9 temporadas de história.
                        </p>

                        <h3 className="text-xl font-bold text-[#98baec] mb-4">Geração 1</h3>
                        <p className="mb-6">
                            Utilizado de 2014 até 2018, o Gen 1 da Fórmula E foi um carro com chassi fabricado pela Dallara, em parceria com a Spark Racing Technology, usando fibra de carbono e alumínio na composição.
                        </p>
                        <p className="mb-6">
                            Na primeira temporada, os motores foram feitos pela McLaren Electronic Systems, mas isso mudou da segunda temporada para frente, sendo permitido que cada equipe tivesse sua própria fornecedora.
                        </p>
                        <p className="mb-6">
                            O carro Gen 1 atingia <strong>225 km/h de velocidade máxima</strong>, sendo que fazia de 0 a 100 km/h em 3 segundos. O motor contava com três modos:
                        </p>
                        <ul className="list-disc list-inside mb-6">
                            <li>Normal: 200 kW</li>
                            <li>Econômico: 150 kW</li>
                            <li>Push to pass (avançado): 230 kW</li>
                        </ul>
                        <p className="mb-6">
                            O design não era tão agressivo e se assemelhava a um carro monoposto de Fórmula 2 e Fórmula 3. Ele tinha 5 metros de comprimento e 1,8 m de largura.
                        </p>

                        <h3 className="text-xl font-bold text-[#98baec] mb-4">Geração 2</h3>
                        <p className="mb-6">
                            Em 2016, a categoria começou a se preparar para uma nova geração de carros, que seria implantada a partir de 2018, ficando até 2021.
                        </p>
                        <p className="mb-6">
                            A composição do carro não mudou, mas ele ganhou novas formas, com um design mais agressivo e futurista. O modelo mudou um pouco de tamanho, ficando mais comprido (5,1 metros) e ligeiramente menos largo (1,7 m).
                        </p>
                        <p className="mb-6">
                            Outra novidade no carro foi a integração do Halo, um dispositivo que protege a cabeça do piloto em casos de acidentes.
                        </p>
                        <p className="mb-6">
                            No começo, a adoção da peça foi muito criticada, principalmente por dar aos carros uma aparência de chinelo. Mas, em pouco tempo, o Halo se mostrou importante no reforço da segurança, salvando vidas nas pistas.
                        </p>
                        <p className="mb-6">
                            Naquela época, os motores já eram desenvolvidos e fornecidos por várias fabricantes. O carro Gen 2 tinha um motor com três modos:
                        </p>
                        <ul className="list-disc list-inside mb-6">
                            <li>Normal: 200 kW</li>
                            <li>Modo ataque: 225 kW</li>
                            <li>Fan Boost (potência extra para os pilotos mais votados): 250 kW</li>
                        </ul>
                        <p className="mb-6">
                            Com esse motor, os pilotos podiam acelerar de 0 a 100 km/h em 2,8 segundos e atingiam uma <strong>velocidade máxima de 280 km/h</strong>, 55 km/h a mais que o carro Gen 1.
                        </p>

                        <h3 className="text-xl font-bold text-[#98baec] mb-4">Geração 3</h3>
                        <p className="mb-6">
                            Um avião militar? Um cone? Uma tortilha? Não! Essa é a Geração 3 dos carros da Fórmula E.
                        </p>
                        <p className="mb-6">
                            Com um design ainda mais arrojado e que se desprende do visual tradicional dos monopostos, a Gen 3 chegou carregando ainda mais novidades. Começando pelo motor, que tem dois modos de uso e muito mais potência:
                        </p>
                        <ul className="list-disc list-inside mb-6">
                            <li>Normal: 300 kW</li>
                            <li>Modo ataque: 350 kW</li>
                        </ul>
                        <p className="mb-6">
                            Os pilotos podem acelerar muito mais, agora que os motores proporcionam uma <strong>velocidade máxima de 320 km/h</strong>. E se a preocupação era a autonomia da bateria, isso já não é mais um problema.
                        </p>
                        <p className="mb-6">
                            Agora os carros contam com dois motores, um para o funcionamento e outro para a regeneração de energia.
                        </p>
                        <p className="mb-6">
                            A meta é que 40% da eletricidade usada nas corridas seja gerada pelas próprias freadas dos pilotos, o que faria do Gen 3 o carro elétrico mais eficiente do mundo.
                        </p>
                        <p className="mb-6">
                            No chassi, não foi só o design que mudou. O carro está ainda menos largo, para facilitar as ultrapassagens. Ele voltou aos 5 metros de comprimento e agora tem 1,7 m de largura.
                        </p>
                    </article>
                </div>
            </div>
            <Footer />
        </>
    );
}
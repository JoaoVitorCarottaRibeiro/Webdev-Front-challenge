import React, { useEffect, useRef, useState } from "react";
import { atualizarPosicaoCarrinhos, desenharCarrinhos } from "../simulador";

const Simulador = () => {
  const canvasRef = useRef(null);
  const [voltas, setVoltas] = useState({
    voltasCarrinho1: 0,
    voltasCarrinho2: 0,
    voltasCarrinho3: 0,
    voltasCarrinho4: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = 350;
    canvas.height = 400;

    function animar() {
      // Atualiza as posições dos carrinhos
      const novasVoltas = atualizarPosicaoCarrinhos();

      // Desenha os carrinhos no canvas
      desenharCarrinhos(ctx, canvas);

      // Atualiza o estado com as novas voltas
      setVoltas(novasVoltas);

      // Chama a função de animação novamente
      requestAnimationFrame(animar);
    }

    animar(); // Inicia a animação

    // Cleanup function quando o componente for desmontado
    return () => cancelAnimationFrame(animar);
  }, []);

  return (
    <div className="border rounded-lg p-5 m-4 w-96 flex flex-col items-center bg-white text-black">
      {/* Canvas para o simulador */}
      <canvas ref={canvasRef} className="border mb-4" />

      {/* Mostra o número de voltas de cada carrinho */}
      <div className="flex flex-col items-center space-y-2">
        <p>
          Voltas Carrinho 1: <span>{voltas.voltasCarrinho1}</span>
        </p>
        <p>
          Voltas Carrinho 2: <span>{voltas.voltasCarrinho2}</span>
        </p>
        <p>
          Voltas Carrinho 3: <span>{voltas.voltasCarrinho3}</span>
        </p>
        <p>
          Voltas Carrinho 4: <span>{voltas.voltasCarrinho4}</span>
        </p>
      </div>
    </div>
  );
};

export default Simulador;
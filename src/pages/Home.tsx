import { useState } from 'react';
import "./Home.css";
export default function Home() {
const [mostrarCaminoVida, setMostrarCaminoVida]=useState<boolean>(false)//(readData())
    const [dia, setDia] = useState("");
    const [mes, setMes] = useState("");
    const [anio, setAnio] = useState("");

   // const [operacion, setOperacion] = useState("");
    //const [resultado, setResultado] = useState(0);
    //const [pasos, setPasos] = useState<string[]>([]);
    const [caminoVida, setCaminoVida] = useState({
  suma: "-",
  resultado: "-",
  pasos: [] as string[],
});

const reducirNumero = (numero: number) => {

  const historial: string[] = [];

  while (numero > 9 && numero !== 11 && numero !== 22 && numero !== 33) {

    const digitos = numero.toString().split("");

    const operacion = digitos.join(" + ");

    const suma = digitos.reduce(
      (total, digito) => total + Number(digito),
      0
    );

    historial.push(`${operacion} = ${suma}`);

    numero = suma;
  }

  return {
    resultadoFinal: numero,
    pasos: historial
  };

};

const calcular = () => {

  const fecha = dia + mes + anio;

  const numeros = fecha.split("");

  const suma = numeros.reduce(
    (total, numero) => total + Number(numero),
    0
  );

  const historial = [`${numeros.join(" + ")} = ${suma}`];

  const reduccion = reducirNumero(suma);

  setCaminoVida({
    suma: suma.toString(),
    resultado: reduccion.resultadoFinal.toString(),
    pasos: [...historial, ...reduccion.pasos],
  });

};

  return (
    <div className="contenedor">

      <div className="card">

        <h2>7 PILARES DEL SER</h2>

        <div className="fila encabezado">
          <div>Pilar</div>
          <div>Suma sin reducir</div>
          <div>Numero final</div>
        </div>

        <div className="fila vida">
          <button onClick={() => setMostrarCaminoVida(!mostrarCaminoVida)}>Camino de Vida</button>
       <span>{caminoVida.suma}</span>
<span>{caminoVida.resultado}</span>
        </div>
         {mostrarCaminoVida && (
            <div className="fila-formulario">
              <div className="controles">
              <input maxLength={2}  
              placeholder="DD"   
              inputMode="numeric"
              onChange={(e) => setDia(e.target.value.replace(/\D/g, ""))}
              />
              <input maxLength={2} placeholder="MM" inputMode="numeric" 
              onChange={(e) => setMes(e.target.value.replace(/\D/g, ""))}/>
              <input maxLength={4} placeholder="YYYY" inputMode="numeric" 
              onChange={(e) => setAnio(e.target.value.replace(/\D/g, ""))}/>

              <button onClick={calcular}>Calcular</button>
              </div>
              {/* <p>{operacion} = {resultado}</p> */}
  {caminoVida.pasos.map((paso, index) => (
  <p key={index}>{paso}</p>
))}

<h3>Resultado Final: {caminoVida.resultado}</h3>
            </div>
          )}

        <div className="fila mision">
          <button>Misión Cósmica</button>
          <span>-</span>
          <span>-</span>
        </div>

        <div className="fila alma">
          <button>Número de Alma</button>
          <span>-</span>
          <span>-</span>
        </div>

        <div className="fila personalidad">
          <button>Número de Personalidad</button>
          <span>-</span>
          <span>-</span>
        </div>

        <div className="fila expresion">
          <button>Número de Expresión</button>
          <span>-</span>
          <span>-</span>
        </div>

        <div className="fila equilibrio">
          <button>Número de Equilibrio</button>
          <span>-</span>
          <span>-</span>
        </div>

        <div className="fila fuerza">
          <button>Número de Fuerza</button>
          <span>-</span>
          <span>-</span>
        </div>

      </div>

    </div>
  );
}
/*export default function Home() {
  return (
    <div style={{ textAlign: "center",backgroundColor: "#f0f0f0", padding: "20px", borderRadius: "8px" }}>
      <h2>7 Pilares del SER</h2>
      
    </div>
  );
}*/
import { useState } from 'react';
import "./Home.css";
import { significadoCaminoVida } from "../numerology/caminoVida";
import { valoresLetras } from "../numerology/tablaLetras";

export default function Home() {
//const [mostrarCaminoVida, setMostrarCaminoVida]=useState<boolean>(false)//(readData())
const [formulaActiva, setFormulaActiva] = useState<string | null>(null);  
const [dia, setDia] = useState("");
const [mes, setMes] = useState("");
const [anio, setAnio] = useState("");
const [nombre, setNombre] = useState("");
const [apellidoPaterno, setApellidoPaterno] = useState("");
const [apellidoMaterno, setApellidoMaterno] = useState("");
const [caminoVida, setCaminoVida] = useState({
  suma: "-",
  resultado: "-",
  pasos: [] as string[],
});
const significado =
  significadoCaminoVida[Number(caminoVida.resultado)];

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

const tabla = Object.entries(valoresLetras).reduce(
  (acc, [letra, valor]) => {
    if (!acc[valor]) {
      acc[valor] = [];
    }

    acc[valor].push(letra);

    return acc;
  },
  {} as Record<number, string[]>
);

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
          <button  onClick={() =>
    setFormulaActiva(
      formulaActiva === "caminoVida" ? null : "caminoVida"
    )
  }>Camino de Vida</button>
       <span>{caminoVida.suma}</span>
<span>{caminoVida.resultado}</span>
        </div>
         {formulaActiva === "caminoVida" && (
            <div className="fila-formulario">
              <div className="controles">
              <input maxLength={2}  
              placeholder="DÍA"   
              inputMode="numeric"
              onChange={(e) => setDia(e.target.value.replace(/\D/g, ""))}
              />
              <input maxLength={2} placeholder="MES" inputMode="numeric" 
              onChange={(e) => setMes(e.target.value.replace(/\D/g, ""))}/>
              <input maxLength={4} placeholder="AÑO" inputMode="numeric" 
              onChange={(e) => setAnio(e.target.value.replace(/\D/g, ""))}/>

              <button onClick={calcular}>Calcular</button>
              </div>
              {/* <p>{operacion} = {resultado}</p> */}
  {caminoVida.pasos.map((paso, index) => (
  <p key={index}>{paso}</p>
))}

<h3>Resultado Final: </h3>
<h3 className="resultado-final">{caminoVida.resultado}</h3>
<h3>Significado</h3>
    <p>{significado}</p>
            </div>
          )
}

        <div className="fila mision">
          <button onClick={() =>
    setFormulaActiva(
      formulaActiva === "misionCosmica" ? null : "misionCosmica"
    )
  }>Misión Cósmica</button>
          <span>-</span>
          <span>-</span>
        </div>
                 {formulaActiva === "misionCosmica" && (
            <div className="fila-formulario">
              <div className="controles-cosmica">
                <div className="referencia-letras">
<div className="referencia-letras">
  {Object.entries(tabla).map(([valor, letras]) => (
    <div key={valor} className="referencia-item">
      <div className="valor">{valor}</div>
      <div className="letras">{letras.join(" ")}</div>
    </div>
  ))}
</div>
</div>
<div className="input-cosmica-zone">
  <div className="inputs-cosmica">
      <input
  type="text"
  placeholder="Nombre(s)"
  value={nombre}
  onChange={(e) => setNombre(e.target.value)}
/>

<input
  type="text"
  placeholder="Apellido paterno"
  value={apellidoPaterno}
  onChange={(e) => setApellidoPaterno(e.target.value)}
/>

<input
  type="text"
  placeholder="Apellido materno"
  value={apellidoMaterno}
  onChange={(e) => setApellidoMaterno(e.target.value)}
/>
</div>
  <div className="button-cosmica">
    <button onClick={calcular}>Calcular</button>
  </div>
</div>
              </div>
              {/* <p>{operacion} = {resultado}</p> 
  {caminoVida.pasos.map((paso, index) => (
  <p key={index}>{paso}</p>
))}

<h3>Resultado Final: </h3>
<h3 className="resultado-final">{caminoVida.resultado}</h3>
<h3>Significado</h3>
    <p>{significado}</p>*/}
            </div>
          )
}

        <div className="fila alma">
          <button onClick={() =>
    setFormulaActiva(
      formulaActiva === "numeroAlma" ? null : "numeroAlma"
    )
  }>Número de Alma</button>
          <span>-</span>
          <span>-</span>
        </div>

{formulaActiva === "numeroAlma" && (
            <div className="fila-formulario">
              <div className="controles">
        <h3>Número de Alma en construccion...</h3>
              </div>
              {/* <p>{operacion} = {resultado}</p> 
  {caminoVida.pasos.map((paso, index) => (
  <p key={index}>{paso}</p>
))}

<h3>Resultado Final: </h3>
<h3 className="resultado-final">{caminoVida.resultado}</h3>
<h3>Significado</h3>
    <p>{significado}</p>*/}
            </div>
          )
}



        <div className="fila personalidad">
          <button onClick={() =>
    setFormulaActiva(
      formulaActiva === "numeroPersonalidad" ? null : "numeroPersonalidad"
    )
  }>Número de Personalidad</button>
          <span>-</span>
          <span>-</span>
        </div>

{formulaActiva === "numeroPersonalidad" && (
            <div className="fila-formulario">
              <div className="controles">
        <h3>Número de Personalidad en construccion...</h3>
              </div>
              {/* <p>{operacion} = {resultado}</p> 
  {caminoVida.pasos.map((paso, index) => (
  <p key={index}>{paso}</p>
))}

<h3>Resultado Final: </h3>
<h3 className="resultado-final">{caminoVida.resultado}</h3>
<h3>Significado</h3>
    <p>{significado}</p>*/}
            </div>
          )
}


        <div className="fila expresion">
          <button onClick={() =>
    setFormulaActiva(
      formulaActiva === "numeroExpresion" ? null : "numeroExpresion"
    )
  }>Número de Expresión</button>
          <span>-</span>
          <span>-</span>
        </div>

{formulaActiva === "numeroExpresion" && (
            <div className="fila-formulario">
              <div className="controles">
        <h3>Número de Expresión en construccion...</h3>
              </div>
              {/* <p>{operacion} = {resultado}</p> 
  {caminoVida.pasos.map((paso, index) => (
  <p key={index}>{paso}</p>
))}

<h3>Resultado Final: </h3>
<h3 className="resultado-final">{caminoVida.resultado}</h3>
<h3>Significado</h3>
    <p>{significado}</p>*/}
            </div>
          )
}



        <div className="fila equilibrio">
          <button onClick={() =>
    setFormulaActiva(
      formulaActiva === "numeroEquilibrio" ? null : "numeroEquilibrio"
    )
  }>Número de Equilibrio</button>
          <span>-</span>
          <span>-</span>
        </div>

{formulaActiva === "numeroEquilibrio" && (
            <div className="fila-formulario">
              <div className="controles">
        <h3>Número de Equilibrio en construccion...</h3>
              </div>
              {/* <p>{operacion} = {resultado}</p> 
  {caminoVida.pasos.map((paso, index) => (
  <p key={index}>{paso}</p>
))}

<h3>Resultado Final: </h3>
<h3 className="resultado-final">{caminoVida.resultado}</h3>
<h3>Significado</h3>
    <p>{significado}</p>*/}
            </div>
          )
}


        <div className="fila fuerza">
          <button onClick={() =>
    setFormulaActiva(
      formulaActiva === "numeroFuerza" ? null : "numeroFuerza"
    )
  }>Número de Fuerza</button>
          <span>-</span>
          <span>-</span>
        </div>

        {formulaActiva === "numeroFuerza" && (
            <div className="fila-formulario">
              <div className="controles">
        <h3>Número de Fuerza en construccion...</h3>
              </div>
              {/* <p>{operacion} = {resultado}</p> 
  {caminoVida.pasos.map((paso, index) => (
  <p key={index}>{paso}</p>
))}

<h3>Resultado Final: </h3>
<h3 className="resultado-final">{caminoVida.resultado}</h3>
<h3>Significado</h3>
    <p>{significado}</p>*/}
            </div>
          )
}



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
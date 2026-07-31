import { jsPDF } from "jspdf";

type Formula = {
  suma: string;
  resultado: string;
  operacion: string;
  pasos: string[];
};

type CartaNumerologica = {
  nombre: string;
  fechaNacimiento: string;

  caminoVida: Formula;
  misionCosmica: Formula;
  /*alma: ResultadoFormula;
  personalidad: ResultadoFormula;
  donDivino: ResultadoFormula;
  fuerzaEspiritual: ResultadoFormula;
  madurez: ResultadoFormula;*/
};

export const generarCarta = (datos: CartaNumerologica) => {

  const pdf = new jsPDF();

  pdf.text("Carta Numerológica", 20, 20);

  pdf.text(`Nombre: ${datos.nombre}`, 20, 40);

  pdf.text(`Fecha: ${datos.fechaNacimiento}`, 20, 50);

  pdf.text(`Camino de Vida`, 20, 60);
  pdf.text(`Suma sin reducir: ${datos.caminoVida.suma}`, 20, 65);
  pdf.text(`Numero Final: ${datos.caminoVida.resultado}`, 20, 70);

  pdf.text(`Misión Cósmica`, 20, 80);
  pdf.text(`Suma sin reducir: ${datos.misionCosmica.suma}`, 20, 85);
  pdf.text(`Numero Final: ${datos.misionCosmica.resultado}`, 20, 90);

  pdf.save("Carta.pdf");
};
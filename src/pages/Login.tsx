import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /*const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      email,
      password
    });

    // temporalmente entramos al Home
    navigate("/home");
  };*/

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const correoCorrecto = "admin@numerologia.com";
  const passwordCorrecto = "123demonumerologia456";


  if (email === correoCorrecto && password === passwordCorrecto) {

    navigate("/home");

  } else {

    alert("Correo o contraseña incorrectos");

  }
};


  return (
    <div className="login-container">

      <div className="login-card">

        <h1>Numerología</h1>

        <h2>Iniciar sesión</h2>


        <form onSubmit={handleSubmit}>

          <div>
            <label>
              Correo
            </label>

            <input
              type="email"
              placeholder="correo@ejemplo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

          </div>


          <div>

            <label>
              Contraseña
            </label>

            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

          </div>


          <button type="submit">
            Ingresar
          </button>


        </form>

      </div>

    </div>
  );
}
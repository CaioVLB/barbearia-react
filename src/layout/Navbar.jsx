import { useNavigate } from "react-router-dom";

export default function Navbar() {
  
  const navigate = useNavigate();

  return (
    <div className="my_navbar">
      <div style={{width: 270, margin: 7}}>
        <img src="images/logo-barbearia.png" alt="logo da barbearia of king" width={"100%"} />  
      </div>
      
      {/* <ul className="my_ul">
        <li>
          <a className="my_a" onClick={() => {navigate("/corte")}}>Cortes</a>
        </li>
        <li>
          <a className="my_a" onClick={() => {navigate("/barba")}}>Barbas</a>
        </li>
        <li>
          <a className="my_a" onClick={() => {navigate("/sombrancelha")}}>Sobrancelhas</a>
        </li>
        <li>
          <a className="my_a" onClick={() => {navigate("/controle")}}>Controle de serviços</a>
        </li>
      </ul> */}
    </div>
  );
}
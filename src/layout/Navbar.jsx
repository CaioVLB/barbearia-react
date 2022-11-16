
export default function Navbar() {
  
  return (
    <div className="navbar">
      <div style={{width: 200}}>
        <img src="images/BARBEARIA_TO_KING-logo.png" alt="logo da barbearia of king" width={"100%"} />  
      </div>
      
      <ul>
        <li>
          <a href="#">Cortes</a>
        </li>
        <li>
          <a href="#">Barbas</a>
        </li>
        <li>
          <a href="#">Sobrancelhas</a>
        </li>
        <li>
          <a href="#">Controle de serviços</a>
        </li>
      </ul>
    </div>
  );
}

import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Routers";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css";

function App() {

  return (
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
  );
}

export default App;

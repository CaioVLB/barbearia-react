
import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/Routers";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/main.css";
import { Provider } from "react-redux";
import { store } from "./store";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <Provider store={store}>
      <ToastContainer />
      <BrowserRouter>
        <Routers/>
      </BrowserRouter>
    </Provider>
      
  );
}

export default App;

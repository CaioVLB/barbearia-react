import { useDispatch, useSelector } from "react-redux";
import {setCheckbox} from "../store/slices/dadosSlices"

export default function CardServicos({title, dados, tipo_servico}) {

  const dispatch = useDispatch();

  return (
    <div className="container-servicos">

      <h1 style={{ color: "#ffc107", marginBottom: 15, fontSize: 22}}>{title}</h1>
      
      {dados.map((item, index) => (
        <div className="tipos-servico" key={index}>
          <img className="fotos" src={`images/${item.img}`} />
          <p>{item.tipo}</p>
          <span>R$ {item.valor.toFixed(2)}</span>
          <input type="checkbox" checked={item.checked} onChange={() => { dispatch(setCheckbox({tipo_servico, item, index, value: !item.checked})) }}/>
        </div>
      ))}

    </div>
  );
}
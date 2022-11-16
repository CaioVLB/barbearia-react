
export default function CardServicos({title, dados}) {

  return (
    <div className="container-servicos">
      <h1 style={{ color: "#ffc107", marginBottom: 15 }}>{title}</h1>
      
      {dados.map((item) => (
        <div className="tipos-servico">
          <img className="fotos" src={`images/${item.img}`} />
          <p>{item.tipo}</p>
          <span>R$ {item.valor.toFixed(2)}</span>
          <input type="checkbox" name="" id="" />
        </div>
      ))}

    </div>
  );
}
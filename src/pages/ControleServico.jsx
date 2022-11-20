import { Table, Card } from "react-bootstrap"
import {
  useSelector // serve para pegar as variáveis do redux/estado global
} from "react-redux"

function ControleServico() {

  const rd_listAtend = useSelector(store => store.atendimentos.listAtendimentos)


  return (<Card style={{display: 'flex', justifyContent: 'center', flexDirection: 'row', flexWrap: "wrap", width: '80vw', border: "10", backgroundColor: "#ccc8" }} className="m-4">
    {rd_listAtend.map((e, i) => (
      <Card key={i} style={{ width: 420}} className="m-4">
        <Card.Body>
          <h1>{i+1 +". "+ e.nome_cliente}</h1>
          <Table striped bordered hover className="my_table">
            <thead>
              <tr>
                <th>#</th>
                <th>SERVIÇO</th>
                <th>VALOR</th>
              </tr>
            </thead>
            <tbody>
              {e.servicos?.map((el, idx) => (
                <tr>
                  <td>{idx + 1}</td>
                  <td>{el.tipo}</td>
                  <td>{el.valor}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>))}

    {rd_listAtend.length === 0 && (
    <Card  style={{display: 'flex', width: '80vw', border: "10", backgroundColor: "#fff8" }} className="m-4 text-center">
      <h1>Nenhum cliente adicionado!</h1>
      </Card>    
      )}
  </Card>);
}

export default ControleServico;
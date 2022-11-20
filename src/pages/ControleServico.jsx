import {Table} from "react-bootstrap"

function ControleServico() {
  return (
    <div>
        <Table striped bordered hover className="my_table">
            <thead>
                <tr>
                  <th>CLIENTE</th>
                  <th>CORTE</th>
                  <th>BARBA</th>
                  <th>SOMBRANCELHA</th>
                  <th>VALOR</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                  <td>Caio</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td colSpan={2}>Larry the Bird</td>
                  <td>@twitter</td>
                </tr>
            </tbody>
            </Table>
    </div>
    
  );
}

export default ControleServico;
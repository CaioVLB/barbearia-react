import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import  { addCliente, editCliente } from "../store/slices/clienteSlices"

export default function CardForm({ title, dados }) {
    
    const rd_dados = useSelector(store => store.dados)
    const dispatch = useDispatch();
    const [selected, setSelected] = useState([])

    function filtraDados() {
        const barbas_checked = rd_dados.barba.filter((e) => e.checked === true)
        const cortes_checked = rd_dados.corte.filter((e) => e.checked === true)
        const sombrancelhas_checked = rd_dados.sombrancelha.filter((e) => e.checked === true)
        setSelected([...barbas_checked, ...cortes_checked, ...sombrancelhas_checked])
    }

    useEffect(() => {
        filtraDados()
    }, [rd_dados])

    return (
        <div className="container-form">

            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>CLIENTE</Form.Label>
                    <Form.Control type="text" placeholder="Nome do cliente" />
                </Form.Group>

                <ul>
                    {selected.map((e, i) => (<li key={i}>{e.tipo}</li>))}
                </ul>
                
                <Button variant="primary" type="submit">SALVAR</Button>
                <Button variant="primary" onClick={() => {console.log(selected)}}>teste</Button>
            </Form>

        </div>
    );
}
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { addAtendimento, editAtendimento, changeInput } from "../store/slices/atendimentosSlice"
import { limpaMarcados } from '../store/slices/dadosSlice'

export default function CardForm({ title, dados }) {

    const rd_dados = useSelector(store => store.dados)
    const rd_atendimentos = useSelector(store => store.atendimentos)
    const dispatch = useDispatch();
    const [selected, setSelected] = useState([])
    const nome = "Celso"

    function filtraDados() {
        const barbas_checked = rd_dados.barba.filter((e) => e.checked === true)
        const cortes_checked = rd_dados.corte.filter((e) => e.checked === true)
        const sombrancelhas_checked = rd_dados.sombrancelha.filter((e) => e.checked === true)
        setSelected([...barbas_checked, ...cortes_checked, ...sombrancelhas_checked])
    }

    function limpaDados() {
        dispatch(changeInput(''))
        dispatch(limpaMarcados())
        setSelected([])
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (selected.length > 0) {
            dispatch(addAtendimento({
                nome_cliente: rd_atendimentos.inputNomeCliente,
                servicos: selected
            }))
            limpaDados()
        } else {
            alert("Selecione algum serviço")
        }
    }

    useEffect(() => {
        filtraDados()
    }, [rd_dados])

    useEffect(() => {
        // console.log(rd_atendimentos.atendimentos)
    }, [rd_atendimentos.atendimentos])

    return (
        <div className="container-form">

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>atendimento</Form.Label>
                    <Form.Control minLength={3} onChange={(e) => { dispatch(changeInput(e.target.value)) }} value={rd_atendimentos.inputNomeCliente} type="text" placeholder="Nome do atendimento" />
                </Form.Group>

                <ul>
                    {selected.map((e, i) => (<li key={i}>{e.tipo}</li>))}
                </ul>

                <Button variant="primary" type="submit">SALVAR</Button>{" "}
                <Button variant="secondary" onClick={limpaDados}>Limpar Formulário</Button>
            </Form>

        </div>
    );
}
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addAtendimento, editAtendimento, changeInput } from "../store/slices/atendimentosSlice"
import { limpaMarcados, setListServices } from '../store/slices/dadosSlice'
import { filtraDados } from '../helps/filtros'
import { toast } from 'react-toastify';

export default function CardForm({ title, dados }) {

    const rd_dados = useSelector(store => store.dados)
    const rd_atendimentos = useSelector(store => store.atendimentos)
    const dispatch = useDispatch();

    function limpaDados() {
        dispatch(changeInput('')) // limpa o input do nome_cliente
        dispatch(limpaMarcados()) // limpa os checkbox marcados e a lista de serviços no CardForm
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (rd_dados.listServices.length > 0) {
            const atendimento = {
                nome_cliente: rd_atendimentos.inputNomeCliente,
                servicos: rd_dados.listServices
            }
            dispatch(addAtendimento(atendimento))
            toast.success("Cliente cadastrado com sucelso!")
            limpaDados()
        } else {
            toast.warning("Selecione algum serviço")
        }
    }

    useEffect(() => {
        dispatch(setListServices(filtraDados(rd_dados)))
    }, [rd_dados.marcados]);

    return (
        <div className="container-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>ATENDIMENTO</Form.Label>
                    <Form.Control minLength={3} required onChange={(e) => { dispatch(changeInput(e.target.value)) }} value={rd_atendimentos.inputNomeCliente} type="text" placeholder="Nome do atendimento" />
                </Form.Group>
                <ul>
                    {rd_dados.listServices.map((e, i) => (<li key={i}>{e.tipo}</li>))}
                </ul>
                <h5>Total: {rd_dados.listServices.reduce((acumulador, e) => acumulador += e.valor, 0)}</h5>
                <Button variant="success" type="submit">SALVAR</Button>{" "}
                <Button variant="secondary" onClick={limpaDados}>Limpar Formulário</Button>
            </Form>
        </div>
    );
}
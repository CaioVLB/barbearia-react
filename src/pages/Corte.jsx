import CardServicos from "../components/CardServicos";
import CardForm from "../components/CardForm"
import {useSelector} from "react-redux"
import { useEffect } from "react";

export default function Corte({ title }) {

    const rd_dados = useSelector(store => store.dados);
    useEffect( () => {console.log(rd_dados)}, [rd_dados]);

    return (
        <>
            <CardForm />
            <CardServicos title="CORTES" dados={rd_dados.corte} tipo_servico="corte"/>
        </>

    );
}
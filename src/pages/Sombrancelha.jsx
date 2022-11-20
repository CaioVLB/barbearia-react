import CardServicos from "../components/CardServicos";
import CardForm from "../components/CardForm"
import {useSelector} from "react-redux"
import { useEffect } from "react";

export default function Sombrancelha({ title }) {
    const rd_dados = useSelector(store => store.dados);
    useEffect( () => {console.log(rd_dados)}, [rd_dados]);
    
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 40}}>
            
            <CardServicos title="SOMBRANCELHAS" dados={rd_dados.sombrancelha} tipo_servico="sombrancelha"/>
            <CardForm />
        </div>

    );
}
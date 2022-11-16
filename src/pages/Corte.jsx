import CardServicos from "../components/CardServicos";
import { dados } from "../dadosDB/dados_externos";

export default function Corte({ title }) {

    return (
        <>
            <CardServicos title="CORTES" dados={dados.corte} />
        </>

    );
}
import CardServicos from "../components/CardServicos";
import { dados } from "../dadosDB/dados_externos";

export default function Sombrancelha({ title }) {

    return (
        <>
            <CardServicos title="SOMBRANCELHAS" dados={dados.sombrancelha} />
        </>

    );
}
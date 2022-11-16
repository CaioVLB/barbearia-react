import CardServicos from "../components/CardServicos";
import { dados } from "../dadosDB/dados_externos";

export default function Barba({ title }) {

    return (
        <>
            
            <CardServicos title="BARBAS" dados={dados.barba} />
            
        </>

    );
}
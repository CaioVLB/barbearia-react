import { Routes, Route, Navigate } from "react-router-dom";
import Main from "../layout/Main";
import Corte from "../pages/Corte";
import Barba from "../pages/Barba";
import Sombrancelha from "../pages/Sombrancelha";
import ControleServico from "../pages/ControleServico";

export default function Routers () {
    return (
        <Routes>
            
            <Route element={<Main Page={Corte} />} path="/corte" />
            <Route element={<Main Page={Sombrancelha} />} path="/sombrancelha" />
            <Route element={<Main Page={Barba} />} path="/barba" />
            <Route element={<Main Page={ControleServico} />} path="/controle" />
            <Route path="*" element={<Navigate to="/corte" replace />}/>
            
        </Routes>
    );
}
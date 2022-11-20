import { configureStore } from "@reduxjs/toolkit";
import clientes from "./slices/clienteSlices";
import dados from "./slices/dadosSlices";

export const store = configureStore({
  reducer: {
    clientes,
    dados
  },
});
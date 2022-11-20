import { configureStore } from "@reduxjs/toolkit";
import atendimentos from "./slices/atendimentosSlice";
import dados from "./slices/dadosSlice";

export const store = configureStore({
  reducer: {
    atendimentos,
    dados
  },
});
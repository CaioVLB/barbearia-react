import { createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const dadosSlice = createSlice({
  name: "dados",

  initialState: {
    corte: [
      { id: 1, tipo: "Corte Social", valor: 25, img: "corte-social2.png" },
      { id: 2, tipo: "Corte Militar", valor: 25, img: "corte-militar2.png" },
      { id: 3, tipo: "Corte Degradê", valor: 30, img: "degrade-clasico.png" },
      { id: 4, tipo: "Degradê Geométrico", valor: 35, img: "degrade-geometric.png" },
    ],
    barba: [
      { id: 5, tipo: "Barba Feita", valor: 5, img: "barba-raspada.png" },
      { id: 6, tipo: "Barba Clássica", valor: 10, img: "barba-classica.png" },
      { id: 7, tipo: "Barba Degradê", valor: 15, img: "barba-degrade.png" },
      { id: 8, tipo: "Barba Pigmentação", valor: 20, img: "barba-pigmentacao.png" },
    ],
    sombrancelha: [
      { id: 9, tipo: "Sobrancelha na navalha", valor: 10, img: "sobrancelha-navalha.png" },
      { id: 10, tipo: "Sobrancelha na pinça", valor: 15, img: "sobrancelha-pinça.png" },
      { id: 11, tipo: "Sobrancelha na linha", valor: 15, img: "sobrancelha-linha.png" }
    ],
    marcados: [],
    listServices: [],
  },
  reducers: {
    setMarcados(state, action) {
      if (state.marcados.includes(action.payload)) {
        state.marcados = state.marcados.filter(e => e !== action.payload)
      } else {
        state.marcados.push(action.payload);
      }
    },
    limpaMarcados(state) {
      state.marcados = []
      state.listServices = []
    },
    setListServices(state, action) {
      state.listServices = action.payload
    },
  },
});

export const { setMarcados, limpaMarcados, setListServices } = dadosSlice.actions;
export default dadosSlice.reducer;
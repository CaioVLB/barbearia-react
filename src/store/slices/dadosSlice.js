import { createSlice } from "@reduxjs/toolkit";

const dadosSlice = createSlice({
  name: "dados",

  initialState: {
    corte: [
      {id: 1, tipo: "Corte Social", valor: 25, img: "corte-social2.png", checked: false },
      {id: 2, tipo: "Corte Militar", valor: 25, img: "corte-militar2.png", checked: false },
      {id: 3, tipo: "Corte Degradê", valor: 30, img: "degrade-clasico.png", checked: false },
      {id: 4, tipo: "Degradê Geométrico", valor: 35, img: "degrade-geometric.png", checked: false },
    ],
    barba: [
      {id: 5, tipo: "Barba Feita", valor: 5, img: "barba-raspada.png", checked: false },
      {id: 6, tipo: "Barba Clássica", valor: 10, img: "barba-classica.png", checked: false },
      {id: 7, tipo: "Barba Degradê", valor: 15, img: "barba-degrade.png", checked: false },
      {id: 8, tipo: "Barba Pigmentação", valor: 20, img: "barba-pigmentacao.png", checked: false },
    ],
    sombrancelha: [
      {id: 9, tipo: "Sobrancelha na navalha", valor: 10, img: "sobrancelha-navalha.png", checked: false },
      {id: 10, tipo: "Sobrancelha na pinça", valor: 15, img: "sobrancelha-pinça.png", checked: false },
      {id: 11, tipo: "Sobrancelha na linha", valor: 15, img: "sobrancelha-linha.png", checked: false }
    ],
    marcados: [4, 3]
  },
  reducers: {
    setMarcados(state, action) {
      console.log("chegou aqui");
      for (let i = 0; i < state.marcados.length; i++) {
        if (state.marcados[i] == action.payload) {
          state.marcados.splice(i)
        } else {
          state.marcados.push(action.payload);
        }
      }
    },
    limpaMarcados(state) {
      state.marcados = []
    }
  },
});

export const { setMarcados, limpaMarcados } = dadosSlice.actions;
export default dadosSlice.reducer;
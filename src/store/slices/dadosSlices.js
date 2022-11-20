import { createSlice } from "@reduxjs/toolkit";

const dadosSlice = createSlice({
  name: "dados",

  initialState: {
    corte: [
      { tipo: "Corte Social", valor: 25, img: "corte-social2.png", checked: false },
      { tipo: "Corte Militar", valor: 25, img: "corte-militar2.png", checked: false },
      { tipo: "Corte Degradê", valor: 30, img: "degrade-clasico.png", checked: false },
      { tipo: "Degradê Geométrico", valor: 35, img: "degrade-geometric.png", checked: false },
    ],
    barba: [
      { tipo: "Barba Feita", valor: 5, img: "barba-raspada.png", checked: false },
      { tipo: "Barba Clássica", valor: 10, img: "barba-classica.png", checked: false },
      { tipo: "Barba Degradê", valor: 15, img: "barba-degrade.png", checked: false },
      { tipo: "Barba Pigmentação", valor: 20, img: "barba-pigmentacao.png", checked: false },
    ],
    sombrancelha: [
      { tipo: "Sobrancelha na navalha", valor: 10, img: "sobrancelha-navalha.png", checked: false },
      { tipo: "Sobrancelha na pinça", valor: 15, img: "sobrancelha-pinça.png", checked: false },
      { tipo: "Sobrancelha na linha", valor: 15, img: "sobrancelha-linha.png", checked: false }
    ],
  },
  reducers: {
    setCheckbox(state, action) {
      state[action.payload.tipo_servico][action.payload.index].checked = action.payload.value;
    },
  },
});

export const { setCheckbox } = dadosSlice.actions;
export default dadosSlice.reducer;
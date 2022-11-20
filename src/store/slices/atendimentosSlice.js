import { createSlice } from "@reduxjs/toolkit";

const atendimentosSlice = createSlice({
    name: "atendimentos",
    initialState: {
        inputNomeCliente: '',
        atendimentos: [],
    },
    reducers: {
        changeInput(state, action) {
            state.inputNomeCliente = action.payload
        },
        addAtendimento(state, action) {
            state.atendimentos.push(action.payload);
        },
        editAtendimento(state, action) {
            state.atendimentos[action.payload.index] = action.payload.atendimento;
        },
    },
});

export const { 
    changeInput,
    addAtendimento,
    editAtendimento,
 } = atendimentosSlice.actions;
export default atendimentosSlice.reducer;
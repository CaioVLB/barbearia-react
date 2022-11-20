import { createSlice } from "@reduxjs/toolkit";

const atendimentosSlice = createSlice({
    name: "atendimentos",
    initialState: {
        inputNomeCliente: '',
        listAtendimentos: [],
    },
    reducers: {
        changeInput(state, action) {
            state.inputNomeCliente = action.payload
        },
        addAtendimento(state, action) {
            state.listAtendimentos.push(action.payload);
        },
        editAtendimento(state, action) {
            state.listAtendimentos[action.payload.index] = action.payload.atendimento;
        },
    },
});

export const { 
    changeInput,
    addAtendimento,
    editAtendimento,
 } = atendimentosSlice.actions;
export default atendimentosSlice.reducer;
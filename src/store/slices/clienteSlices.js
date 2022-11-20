import { createSlice } from "@reduxjs/toolkit";

const clientesSlice = createSlice({
    name: "clientes",
    initialState: {
        clientes: [],
    },
    reducers: {
        addCliente(state, action) {
            state.clientes.push(action.payload);
        },
        editCliente(state, action) {
            state.clientes[action.payload.index] = action.payload.cliente;
        },
    },
});

export const { addCliente, editCliente } = clientesSlice.actions;
export default clientesSlice.reducer;
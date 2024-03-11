import {createSlice, current} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
    },
    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload);
        },
        removeItems: (state, action) => {
            state.items = state.items.filter((data) => {
                return data.card.info.id != action.payload
            })
        },
        clearCart: (state, action) => {
            state.items.length = 0;
        },
    },
});

export default cartSlice.reducer;
export const {addItems, removeItems, clearCart} = cartSlice.actions;
import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    items: [ "Model S",  "Model 3",  "Model X",  "Model Y", "Solar Roof", "Solar Panels" ]
}

const carSlice = createSlice({
    name: 'item',
    initalState,
    reducers: {}
})

export const selectItems = state => state.item.items

export default carSlice.reducer
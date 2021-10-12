import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    cars: [ "Model S",  "Model 3",  "Model X",  "Model Y", "Solar Roof", "Solar Panels" ]
}

const carSlice = createSlice({
    name: 'car',
    initalState,
    reducers: {}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer
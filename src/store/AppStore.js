import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./CartSlice";

const AppStore = configureStore({
    reducer: {
        CartSlice: CartSlice,
    }
})

export default AppStore
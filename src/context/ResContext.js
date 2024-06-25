import { createContext } from "react";

export const ResContext = createContext({
    userName: "defaultUser",
    setUser: () => {}
})
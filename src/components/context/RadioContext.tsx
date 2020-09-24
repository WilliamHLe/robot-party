import {createContext} from "react"

//RadioContext bruker "createContext" funksjonen til å initialisere verdiene for "speed" og "color"
//Speed blir tolket som type "number" og color som type "string"

const RadioContext = createContext({
    speed: 60,
    color: "#FF0000"
})

export default RadioContext;
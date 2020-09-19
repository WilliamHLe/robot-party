//UFERDIG OG IKKE TESTET ENDA

import React, {useState} from "react"
import {getJson} from "./jsonStorage";

const Name = () => {
    const [value, setValue] = React.useState('')

    // The event type is a "ChangeEvent"
    // We pass in "HTMLInputElement" to the input
    function onChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value)
        //JSON-lagring
    }

    return <input value={value} onChange={onChange} id="input-example"/>
}

export default Name;
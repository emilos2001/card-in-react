import {createRoot} from "react-dom/client";
import {useState} from "react";
import {CardInfo} from "./card.jsx";


const root = createRoot(document.getElementById('root'))
root.render(
    <>
        <CardInfo/>
    </>
)

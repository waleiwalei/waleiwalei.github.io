import _ from "lodash";
import "./index.css";

function component() {
    console.log(1)
    const element = document.createElement("div");

    element.innerHTML = 'hello ci/cd'

    return element;
}

document.body.appendChild(component());

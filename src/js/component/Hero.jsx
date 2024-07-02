import React from "react";

import {Button} from "./Button.jsx";

export function Hero(){
    const title = "A Warm Welcome!";
    const description = "Lorem Ipsum this is the description of the website for the hero";
    return(
        <div class="p-4 px-10 pb-10 bg-blue-100 rounded flex-col flex space-y-4 ">
            <h1 class="text-7xl font-normal">{title}</h1>
            <h4 class="text-gray-600">{description}</h4>
            <Button name="Call to Action!" href="Action!"/>
        </div>
    )
}
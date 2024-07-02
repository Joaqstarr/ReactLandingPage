import React from "react";

import { Button } from "./Button";

export function Card({title, description, buttonLabel, buttonUrl, image}){
    return (
        <div class="drop-shadow-sm border border-slate-100 rounded overflow-hidden">
            <img src={image} class="w-full rounded"/>
            <div class="p-4 flex flex-col items-center justify-around space-y-4">
                <h4 class="text-lg">{title}</h4>
                <p>{description}</p>
            </div>
            <div class="bg-gray-200">
                <div class="m-auto py-4 w-max">
                    <Button name={buttonLabel} href={buttonUrl}/>
                </div>
            </div>
        </div>
    )
}
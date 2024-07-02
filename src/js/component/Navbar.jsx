import React from "react";

export function Navbar(){
    return (
    <div class = "fixed top-0 bg-gray-800 h-10 w-full items-center flex justify-center"> 
        <div class="w-full flex flex-row justify-between max-w-5xl">
            <div class="flex">
                <h3 class="text-slate-200 font-bold" >Start Bootstrap</h3>

            </div>
            <div class="flex flex-row justify-end w-fit space-x-4">
                <Navbutton name="Home" href="to Contact"/>
                <Navbutton name="About" href="to Contact"/>
                <Navbutton name="Service" href="to Contact"/>
                <Navbutton name="Contact" href="to Contact"/>
            </div>
        </div>
    </div>);

}

function Navbutton({name, href}){
    return (
        <div>
        <a href={href}>
            <h3 class="text-slate-500 hover:text-slate-200 ease-in duration-20">{name}</h3>
        </a></div>);
}
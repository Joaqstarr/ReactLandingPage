import React from "react";

import {Card} from "./Card.jsx";

export function CardRow(){
    return (
    <div class="flex flex-row space-x-4">
        <Card title="Placeholder" buttonLabel="Find out More!" description="Placeholder lorem ipsum description until further writing ok?"image="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"/>
        <Card title="Placeholder" buttonLabel="Find out More!" description="Placeholder lorem ipsum description until further writing ok?"image="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"/>
        <Card title="Placeholder" buttonLabel="Find out More!" description="Placeholder lorem ipsum description until further writing ok?"image="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"/>
        <Card title="Placeholder" buttonLabel="Find out More!" description="Placeholder lorem ipsum description until further writing ok?"image="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg"/>

    </div>)
}
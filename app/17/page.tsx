"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <img src={"finale.gif"}/>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Thank you very much for a-to playing my game!' Content={CurrentContent} prevRef={'16'}/>
    ); 
}
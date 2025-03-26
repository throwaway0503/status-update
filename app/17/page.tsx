"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    // TODO: change the finale gif
    return (<>
        <img src={"finale.gif"}/>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Thank you so much a-for-to playing my game!' Content={CurrentContent} prevRef={'16'}/>
    ); 
}
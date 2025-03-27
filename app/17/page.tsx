"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    const banca = () => {
        const basePathOption: string | undefined = process.env.NEXT_PUBLIC_PAGES_BASE_PATH;
        let basePath: string;
        if (basePathOption === undefined) {
            basePath = "";
        }
        else {
            basePath = basePathOption;
        }

        window.location.href = basePath + '/' + "cyan";
    };

    return (<>
        <p>
            Sí, creditos.
        </p>
        <p>
            Primero lo obvio. Quiero agradecer a Fiestita en general por estar aquí.
        </p>
        <img src={"fiestita.jpg"}/>
        <p>
            Segundo a una persona que tuvo su sección entera XD: Cyan. Ya dije lo que tenía que decir antes, así que allí queda.
        </p>
        <div style={{ cursor: "pointer" }} onClick={banca}>
            <img src={"banca.jpg"}/>
        </div>
        <p>
            Tercero, Pachis. Gracias por estar allí para escuchar mis mierdas en cualquier momento y por soportar mis estupideces como si fueses mi pseudo-psicólogo o algo así, gracias por tanto y perdón por tan poco XD
        </p>
        <p>
            Cuarto, Pachis otra vez XD, porque fui la primera persona a la que le mostré la página y se ofreció a corregir varias faltas ortográficas por allí XD
        </p>
        <img src={"pachis.png"}/>
        <p>
            Y bueno, ahora sí sería todo...
        </p>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Créditos???' Content={CurrentContent} prevRef={'16'} nextRef={'18'}/>
    ); 
}
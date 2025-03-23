"use client";

import { MainPage } from "../main-page";

const CurrentContent: React.FC = () => {
    return (<>
        <p>
            En otra nota similar, esto que diré ahora es algo bastante experimental (sí, aun más que lo del nuevo username y el género).
        </p>
        <p>
            Similar a lo que dije anteriormente, siempre tuve el nombre 'Alejandro' en baja estima. No me malinterpreten, no me parece un mal nombre; solo que nunca me sentí realmente identificado con esto. De hecho inicialmente tampoco me sentía identificado con 'Jano', pero luego siento que me queda mejor que Alejandro la verdad XD
        </p>
        <p>
            Bueno, pues igual pensé que era porque no estaba acostumbrado, al igual que cuando inicialmente me empezaron a llamar 'Oré' en innova, o 'Jano' en fiestita. Así que bueno, lo intenté.
        </p>
        <p>
            En este tiempo en el que tuve amigos de universidad que se referían a mí exclusivamente como 'Alejandro' pensé tal vez que me acostumbraría, y la verdad que aun me parece un nombre ajeno a mí; no siento que soy yo. Hasta me sentía más identificado con mi nombre de usuario que con Alejandro, así que eso dice algo definitivamente XD
        </p>
        <p>
            Es por ello que, luego de bastante consideración, me decidí en un nombre que siento que me representa mejor y que me gustó (que además era gender-neutral): 'Moon'.
        </p>
        <p>
            Pero bueno, no estoy exigiendo que ahora me digan así. También voy por 'Oré' o 'Jano' (y 'Alejandro' por tecnicidad, pero prefereiblemente no); así que en teoría no debería de haber ningun cambio para ustedes (porque imagina llamarme Alejandro XD), y entonces solo les estaba contando sobre esta decisión que tome.
        </p>
        <p>
            Como les digo, esta es probablemente la decisión más experimental aquí, porque decirles a las personas que conozca en universidad que me llamen 'Moon' es algo que nunca he hecho realmente, pero bueno toca intentar supongo XD
        </p>
        <img src={"moon.png"}/>
    </>);
};

export default function Home() {
    return (
        <MainPage title='Moon.' Content={CurrentContent} prevRef={'11'} nextRef={'13'}/>
    ); 
}
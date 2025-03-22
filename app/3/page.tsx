"use client";

import { useState } from "react";
import { MainPage } from "../main-page";

const CurrentContent = ({ isChecked, setIsChecked }: { isChecked: boolean, setIsChecked: (val: boolean) => void }) => {
  	return (<>
		<p>
			Quizás esto sea medio innecesario de mencionar, pero quiero asegurarme de que va a ser el caso.
		</p>
		<p>
			Prometes no odiarme luego de leer esto.
		</p>
		<p style={{ fontSize: '40%' }}>
			(También me vendes tu alma)
		</p>
		<div style={{ display: "block ruby", width: "10%", alignSelf: "center"}}>
			<label>
				<input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />
					Acepto los términos y condiciones
				</label>
			</div>
		<p>
			Si bien dudo que esto sea necesario, nunca se sabe XD
		</p>
  	</>);
}

export default function Home() {
	const [isChecked, setIsChecked] = useState(false);
	const content: React.FC = (() => <CurrentContent isChecked={isChecked} setIsChecked={setIsChecked} />) as React.FC;

	return (
		<MainPage title="Contrato:" Content={content} prevRef="2" nextRef={isChecked ? "4" : undefined}/>
	); 
}

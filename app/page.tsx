"use client";

import { useEffect } from "react";
import './main-style.css';

export default function Home() {
  useEffect(() => {
    window.location.href = "direct";
  });

  return (<>
    <div className="main"></div>
  </>); 
}
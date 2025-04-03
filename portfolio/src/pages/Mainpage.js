import React from "react";
import { useLocation } from "react-router-dom";
import Sidebar from "../componetns/Sidebar";
import ResumePreview from "./ResumePreview";
import "./MainPage.css";
import Backend from "./Backend";
import Header from "../componetns/Header";
import Frontend from "./Frontend";
import Terminal from "../componetns/Terminal";
export default function MainPage() {
    const location = useLocation();

    return (
        <div className="main-page">
            <Header />
            <Sidebar />


            {(location.pathname === "/" || location.pathname === "/home") && <ResumePreview />}
            {location.pathname === "/backend" && <Backend />}
            {location.pathname === "/frontend" && <Frontend />}
            <Terminal />
        </div>
    );
}
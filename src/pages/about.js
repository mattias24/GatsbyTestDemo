import * as React from "react";
import Counter from "./blogs/counter";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

export default function AboutPage (){
    return (<div>
        <h1> Its about page. </h1>
        <StaticImage alt="rävunge" src="../images/10419284-red-fox-in.png" width={1100} />
        <Counter color="blue" />
    </div>)
}


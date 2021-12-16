import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = () => {
    const [catergorias, setCatergorias] = useState(['One Punch']);

    return (
        <>
            <h2>GifExperApp</h2>
            <AddCategory setCatergorias = {setCatergorias}/>
            <hr/>
            <ol>
                {
                    catergorias.map(category => (
                         <GifGrid
                                key= {category}
                                categoria= {category}
                            />
                            ))
                }
            </ol>
        </>
    );
}

export default GifExpertApp;
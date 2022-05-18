import React from "react";
import Card from "./Card";

function CardList({Filtered_Data}){
    return(
        <div className="players">
            {
                Filtered_Data.map((a,b)=>{
                    return <Card a={a} b={b}/>
                })
            }
        </div>
    )
}

export default CardList;
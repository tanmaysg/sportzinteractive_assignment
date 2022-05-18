import React from "react";
import Card from "./Card";

function CardList({Filtered_Data}){
    return(
        <div className="players">
            {
                Filtered_Data.map((a)=>{
                    return <Card a={a}/>
                })
            }
        </div>
    )
}

export default CardList;
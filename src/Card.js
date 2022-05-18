import React from "react";
import "./App.css"

function Card({a}){
    let string=`/player-images/${a.Id}.jpg`;

    return(
        <div className="players">   
                <div className="data-card">
                    <div className="player-image">
                        {a.Id!='' &&<img src={string} alt="player image"></img>}
                    </div>
                    <div className="player-info">
                        <p className="name">{a.PFName}</p>
                        <p className="skill">{a.SkillDesc}</p>
                        <span className="price">${a.Value}</span>
                        {a.UpComingMatchesList[0].CCode!='' && <p className="match">{a.UpComingMatchesList[0].CCode} VS {a.UpComingMatchesList[0].VsCCode}</p>}
                        <p className="match-date">{a.UpComingMatchesList[0].MDate.toString()}</p>
                    </div>
                </div>
        </div>
    )
}

export default Card;
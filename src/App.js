import './App.css';
import React, {useState, useEffect} from "react";
import CardList from "./CardList";

function App() {

  const [userdata, setData] = useState([]);
  const [searchterm, setSearchterm] = useState('');
  const [filtered_data, setfilterdata] = useState([]);

  useEffect(()=>{
    fetch("https://api.npoint.io/20c1afef1661881ddc9c")
    .then((res)=>res.json())
    .then((data)=>setData(data.playerList));
    console.log(searchterm);

    const filterdata = userdata.filter((userdata)=>{
      return userdata.PFName.toLowerCase().includes(searchterm.toLowerCase()) || userdata.TName.toLowerCase().includes(searchterm.toLowerCase());
    }) 

    setfilterdata(filterdata.sort((a,b)=>(a.Value) - (b.Value)));

  })
  

  return (
    <div className="App">
      <div className="header">
        <h1 className="title">SPORTZ INTERACTIVE</h1>
        <input type="text" className="Search" placeholder="Search Player..." onChange={(e)=> setSearchterm(e.target.value)}></input>
      </div>

      <div className="sub-header">
        <h2 className="sub-title">Player Names</h2>
      </div>

        {/* <div className="players">  
              {
                filtered_data.map((a)=>(
                  <div className="data-card">
                    <div className="player-image">
                      <img src={string} alt="player image"></img>
                  </div><div className="player-info">
                      <p className="name">{a.PFName}</p>
                      <p className="skill">{a.SkillDesc}</p>
                      <span className="price">${a.Value}</span>
                      <p className="match">{a.UpComingMatchesList[0].CCode} VS {a.UpComingMatchesList[0].VsCCode}</p>
                      <p className="match-date">{a.UpComingMatchesList[0].MDate.toString()}</p>
                    </div>
                  </div>
                ))
              }
        </div> */}

      <CardList Filtered_Data={filtered_data}/>

    </div>
  );
}

export default App;

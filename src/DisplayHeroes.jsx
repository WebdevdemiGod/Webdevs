import React from "react";

function DisplayHeroes({filteredHeroes}) {
    return(
        <div className="details">
            {filteredHeroes.length === 0 ?(
                <p style={{color: "red", fontFamily: "sans-serif"}}>Hero Not Found</p>
            ):(
                filteredHeroes.map(({ID, Name, Course, Year})=>(
                    <div className="detailBox" key={ID}>
                        <p className="ID">ID: {ID}</p>
                        <p className="info">Name: {Name}</p>
                        <p className="info">Course: {Course}</p>
                        <p className="info">Year: {Year}</p>
                    </div>
                ))
            )
            }
        </div>
    )
}

export default DisplayHeroes
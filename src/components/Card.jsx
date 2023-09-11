import React from "react";

const Card = ({ name, image, gender, occupation, biography }) => {

    return (
        <>
            <div className="card-container">
                <div className="card c1 card-card">
                    <img src={image} alt={root} className="card-img" />
                    <div className="card-body">
                        <h3>{name}</h3>
                        <h5>Género: {gender}</h5>
                        <h5>Ocupación: {occupation}</h5>
                        <p>{biography}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;
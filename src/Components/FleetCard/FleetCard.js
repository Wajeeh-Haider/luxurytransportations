import React from "react";
import Data from "./FleetCardData";
import "./FleetCard.css";

const FleetCard = () => {
    const imageStyling = {
        display:'flex',
        justifyContent: 'center',
        alignItems : 'center',
    }
  return (
    <div>
      <div className="container mb-5">
        <header className="section-header my-4">
          <h2>Fleet</h2>
          <p>Our Fleet</p>
        </header>
        <div className="row">
          {Data.map((elem , i) => {
            const { title, description, imgSrc } = elem;
            return (
              <div className="col-md-6 my-3 " key={i}>
                <div
                  className="card shadow-lg p-4 border-0"
                  style={{
                    overflow: "auto",
                    scrollBehavior: "smooth",
                    borderRadius : '15px'
                  }}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <h3 className="font-weight-bolder my-2">
                        <b> {title} </b>
                      </h3>
                      <p className="text-mute">{description}</p>
                    </div>
                    <div className="col-md-6 my-2" style={imageStyling}>
                      <img
                        src={imgSrc}
                        className="img-fluid rounded"
                        alt="OurFleet"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FleetCard;

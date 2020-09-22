import React from "react";

function VehicleCard(props) {
  const { vehicle } = props
  
//   function handleClick() {
//     action(vehicle)
//   }
  
//   function handleDelete() {
//     deleteBot(vehicle)
//   }

    return (
      <div className="ui column">
        This is a {vehicle.make} {vehicle.model} card
      </div>
    );
};

export default VehicleCard;
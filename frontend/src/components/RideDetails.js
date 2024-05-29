
const RideDetails = ({ride}) => {
  return (
    <div className="workout-details">
        <h4>{ride.title}</h4>
        <p><strong>Distance: </strong>{ride.distance} km</p>
        <p><strong>Duration: </strong>{ride.duration} minutes</p>
        <p>{ride.createdAt}</p>
    </div>
  )
}

export default RideDetails
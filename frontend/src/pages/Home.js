import { useEffect,useState } from "react"
// import { json } from "react-router-dom"
import RideDetails from "../components/RideDetails"
import RideForm from "../components/RideForm"

const Home = () => {
  const[rides,setRides] = useState(null) 
  useEffect(() => {
    const fetchrides = async () => {
      const response = await fetch('/ride')
      const json = await response.json()
      if(response.ok) {
        setRides(json)
      } 
    }
    fetchrides()
  }, [])

  return (
    <div className="home">
      <div className="workouts">
        {rides && rides.map((ride) => (
          //<p key = {ride._id}>{ride.title}</p>
          <RideDetails key = {ride._id} ride={ride} />
        ))}
      </div>
      <RideForm />
    </div>
  )
}

export default Home
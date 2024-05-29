import {useState} from 'react'

const RideForm = () => {
    const[title,setTitle] = useState('')
    const[distance,setDistance] =useState('')
    const[duration,setDuration]=useState('')
    const[error,setError]=useState(null)

    const formSubmit = async (e) => {
        e.preventDefault()
        const data = {title,distance,duration}
        const response = await fetch('/ride',{
            method : 'POST',
            body : JSON.stringify(data),
            headers : {
            "Content-Type" : "application/json"
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        } else {
            setTitle('')
            setDistance('')
            setDuration('')
            setError(null)
            console.log('New ride added',json)
        }
    }
  return (
    <form className='create' onSubmit={formSubmit}>
        <h3>Add a New Ride</h3>

        <label>Ride Title:</label>
        <input type='text' onChange={(e)=>setTitle(e.target.value)} value = {title}/>

        <label>Distance(in KM): </label>
        <input type='number' onChange={(e)=>setDistance(e.target.value)} value = {distance}/>

        <label>Duration(in Minutes): </label>
        <input type='number' onChange={(e)=>setDuration(e.target.value)} value = {duration}/>

        <button>Add Ride</button>
        {error && <div className='error'>{error}</div>}
    </form>
  )
}

export default RideForm
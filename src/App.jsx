import Header from './components/Header'
import './scss/main.css'
import {useEffect, useState} from 'react'


function App() {

  const [cameras, setCameras] = useState([])
  const key="be8d3bf5-7ce0-4677-8d47-2dd6ed7696fc"

  useEffect(()=>{
    
    async function getAllCameras(){

      const url=`http://data.goteborg.se/TrafficCamera/v1.0/TrafficCameras/${key}?format=json`
      const result= await (await fetch(url)).json()
      console.log(result)
      setCameras(result)
      
    }

    getAllCameras()
  },[])

  

  return (
    <div className="App">
      {/* <Header></Header> */}
      <main>

      </main>
    </div>
  );
}

export default App;

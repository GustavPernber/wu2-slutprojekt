import Header from './components/Header'
import CameraCard from './components/CameraCard'
import './scss/main.css'
import {useEffect, useState} from 'react'


function App() {

  const [cameras, setCameras] = useState([])
  const key="be8d3bf5-7ce0-4677-8d47-2dd6ed7696fc"

  useEffect(()=>{
    
    
    getAllCameras()
  },[])
  
  async function getAllCameras(){

    const url=`http://data.goteborg.se/TrafficCamera/v1.0/TrafficCameras/${key}?format=json`
    const result= await (await fetch(url)).json()
    setCameras(result)
    
  }
  
  
  
  

  return (
    <div className="App">
      <Header></Header>
      <main>
        <div>
          {cameras.map((data)=>{
            const obj={
              id:data.Id,
              name:data.Name.split('_')[1],
              url:data.CameraImageUrl
            }

            return(<CameraCard key={data.Name} data={obj}></CameraCard>)
            


          })}

          {/* <CameraCard></CameraCard>
          <CameraCard></CameraCard>
          <CameraCard></CameraCard>
          <CameraCard></CameraCard> */}

        </div>
      </main>
    </div>
  );
}

export default App;

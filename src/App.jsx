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
    console.log('getting cameras');
    const url=`http://data.goteborg.se/TrafficCamera/v1.0/TrafficCameras/${key}?format=json`
    const result= await (await fetch(url)).json()

    console.log(result)
    setCameras(result)
  }



  return (
    <div className="App">
      <Header updateCameras={getAllCameras}></Header>
      <main>

        <div>
          <div>
            {cameras.map((data)=>{
              const obj={
                id:data.Id,
                name:data.Name.split('_')[1],
                apiKey:key
              }

              return(<CameraCard key={data.Name} data={obj}></CameraCard>)
              


            })}

          </div>
        </div>

          {/* <CameraCard></CameraCard>
          <CameraCard></CameraCard>
          <CameraCard></CameraCard>
          <CameraCard></CameraCard> */}

      </main>
    </div>
  );
}

export default App;

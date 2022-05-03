import Header from './components/Header'
import CameraCard from './components/CameraCard'
import './scss/main.css'
import {useEffect, useState} from 'react'


function App() {

  const [cameras, setCameras] = useState([])
  const [time, setTime] = useState(new Date().toLocaleTimeString())
  const key="be8d3bf5-7ce0-4677-8d47-2dd6ed7696fc"

  useEffect(()=>{
    getAllCameras()
  },[])
  
  async function getAllCameras(){
    console.log('getting cameras');
    const url=`http://data.goteborg.se/TrafficCamera/v1.0/TrafficCameras/${key}?format=json`
    const result= await (await fetch(url)).json()
    setCameras(result)
  }

  async function updateAllImages(){
    //Loopa igenom alla kameror, kör getimg 
  }

  // async function getImage(id){
  //   console.log('getting image');
  //   const url=`http://data.goteborg.se/TrafficCamera/v1.0/CameraImage/${key}/${id}`
  //   const result = await (await fetch(url)).blob()
  //   const imgUrl=URL.createObjectURL(result)

  //   return imgUrl
  // }

  return (
    <div className="App">
      <Header time={time} updateCameras={getAllCameras}></Header>
      <main>
        <div>
          <div>
            {cameras.map((data)=>{
              const obj={
                id:data.Id,
                name:data.Name.split('_')[1],
                apiKey:key
              }

              return(<CameraCard getImage={getImage} key={data.Name} data={obj}></CameraCard>)
              


            })}

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

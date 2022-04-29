import Header from './components/Header'
import './scss/main.css'
import {useEffect, useState} from 'react'


function App() {

  const [cameras, setCameras] = useState([])

  useEffect(()=>{
    async function getAllCameras(){
      const url=
      const result= await fetch
    }
  })

  

  return (
    <div className="App">
      <Header></Header>
      <main>

      </main>
    </div>
  );
}

export default App;

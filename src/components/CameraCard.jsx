import { useEffect, useState } from "react"

export default function CameraCard(props){    

    const [image, setImage]=useState("")
    const [loading, setLoading]=useState(true)

    useEffect(()=>{
        getImage()
    }, [])

    async function getImage(){
        const id = props.data.id
        const url=`http://data.goteborg.se/TrafficCamera/v1.0/CameraImage/${props.data.apiKey}/${props.data.id}`
        const result = await (await fetch(url)).blob()
        const imgUrl=URL.createObjectURL(result)
    
        setImage(imgUrl)
    }

    return(
        <article className="cameraCard">
            <figure>

                <img src={image} alt="" />
            </figure>

            <div>
                <h1>{props.data.name}</h1>

                <div>
                    <p>Senast uppdaterad</p>
                    <p className="update">Uppdatera</p>
                </div>

                <button>
                    Visa på karta
                </button>
            </div>
            

        </article>
    )
}
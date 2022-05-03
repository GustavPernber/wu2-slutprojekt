import { useEffect, useState } from "react"

export default function CameraCard(props){    

    const [image, setImage]=useState("")
    const [loading, setLoading]=useState(true)
    const [animate, setAnimate] = useState(false)

    useEffect(()=>{
        getImage()
    }, [])

    async function getImage(){
        console.log('getting image');
        const url=`http://data.goteborg.se/TrafficCamera/v1.0/CameraImage/${props.data.apiKey}/${props.data.id}`
        const result = await (await fetch(url)).blob()
        const imgUrl=URL.createObjectURL(result)
    
        setImage(imgUrl)
        setLoading(false)
    }

    function updateClick(){
        setAnimate(true)
        setTimeout(() => {
            setAnimate(false)
        }, 2000);

        getImage()
    }

    return(
        <article className="cameraCard">
            <figure>
                {loading ? 
                 null
                :
                <img src={image} alt="" />
                }
               
            </figure>

            <div>
                <h1>{props.data.name}</h1>

                <div>
                    <p>Senast uppdaterad</p>
                    <div className={`updateBtn ${animate ? "animate" : ""}`} onClick={updateClick}>
                        
                        <p className="update">Uppdatera</p>
                        <span className="material-icons">
                            refresh
                        </span>

                    </div>
                </div>

                <button>
                    Visa på karta
                </button>
            </div>
            

        </article>
    )
}
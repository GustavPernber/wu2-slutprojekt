import { useEffect, useState } from "react"

export default function CameraCard(props){    

    const [image, setImage]=useState("")
    const [animate, setAnimate] = useState(false)

    useEffect(()=>{
        updateImage()
    }, [])

    // async function updateImage(){
    //     setImage(await props.getImage(props.data.id))

    // }

    // async function handleUpdateClick(){
    //     setAnimate(true)
    //     setTimeout(() => {
    //         setAnimate(false)
    //     }, 2000);
    //     updateImage()
    // }


    return(
        <article className="cameraCard">
            <figure>
                <img src={props.data.image} alt="" />
                
            </figure>

            <div>
                <h1>{props.data.name}</h1>

                <div>
                    <p>Senast uppdaterad</p>
                    <div className={`updateBtn ${animate ? "animate" : ""}`} >
                        
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
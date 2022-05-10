import { useEffect, useState } from "react"

export default function CameraCard(props){    

    
    const [animate, setAnimate] = useState(false)
    
    function handleUpdateClick(){
        setAnimate(true)

        setTimeout(() => {
            setAnimate(false)
        }, 2000);

        props.updateCamera(props.id)
    }

    return(
        <article className="cameraCard">
            <figure>
                <img  src={props.imgURL} alt="" />
                
            </figure>

            <div>
                <h1>{props.name}</h1>

                <div>
                    <p>Senast uppdaterad: {props.time}</p>
                    <div onClick={handleUpdateClick} className={`updateBtn ${animate ? "animate" : ""}`} >
                        
                        <span className="material-icons">
                            refresh
                        </span>
                        <p className="update">Uppdatera</p>

                    </div>
                </div>

                <button>
                    Visa på karta
                </button>
            </div>
            

        </article>
    )
}
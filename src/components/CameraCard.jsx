import { useEffect, useState } from "react"

export default function CameraCard(props){    

    const [image, setImage]=useState("")
    const [animate, setAnimate] = useState(false)




    return(
        <article className="cameraCard">
            <figure>
                <img  src={props.imgURL} alt="" />
                
            </figure>

            <div>
                <h1>{props.name}</h1>

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
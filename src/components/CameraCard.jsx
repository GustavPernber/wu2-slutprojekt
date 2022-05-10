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

    function handleMap(){
        console.log('map click');
        const cords=props.geometry.split('(')[1].split(')')[0].split(' ')
       const url=`https://www.google.com/maps/search/${cords[1]},${cords[0]}`
       window.open(url, "_blank")

    }

    return(
        <article className="cameraCard">
            <figure>
                <img  src={props.imgURL} alt="" />
                
            </figure>

            <div>
                <h1>{props.name.split('_')[1]}</h1>

                <div>
                    <p>Senast uppdaterad: {props.time}</p>
                    <div onClick={handleUpdateClick} className={`updateBtn ${animate ? "animate" : ""}`} >
                        
                        <span className="material-icons">
                            refresh
                        </span>
                        <p className="update">Uppdatera</p>

                    </div>
                </div>

                <button onClick={handleMap}>
                    Visa på karta
                </button>
            </div>
            

        </article>
    )
}
export default function CameraCard(props){

    return(
        <article className="cameraCard">
            <figure>

                <img src={props.data.url} alt="" />
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
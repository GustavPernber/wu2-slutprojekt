export default function Header(props){


    return(
        <header className="siteHeader">
            <div>

                <h1>GBG Kameror</h1>

                <div>
                    <button onClick={props.updateCameras}>Uppdatera kameror</button>
                    <p>Senast uppdaterad: {props.time}</p>
                </div>
            </div>
        </header>
    )
}
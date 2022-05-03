export default function Header(props){

    function test(){
        console.log('log');
        props.updateCameras()
    }

    return(
        <header className="siteHeader">
            <div>

                <h1>GBG Kameror</h1>

                <div>
                    <button onClick={test}>Uppdatera kameror</button>
                    <p>Senast uppdaterad: {props.time}</p>
                </div>
            </div>
        </header>
    )
}
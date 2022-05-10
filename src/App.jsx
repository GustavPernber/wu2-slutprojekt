import Header from "./components/Header";
import CameraCard from "./components/CameraCard";
import "./scss/main.css";
import { useEffect, useState } from "react";

function App() {
  const date=new Date()
	const [cameras, setCameras] = useState([]);
	const [time, setTime] = useState(`${date.toLocaleTimeString().split(':')[0]}:${date.toLocaleTimeString().split(':')[1]}`);

	const key = "be8d3bf5-7ce0-4677-8d47-2dd6ed7696fc";

	useEffect(() => {
		getAllCameras();
	}, []);

	//Fetches all cameras and sets in state
	async function getAllCameras() {
		console.log("getting all cameras");

		const url = `http://data.goteborg.se/TrafficCamera/v1.0/TrafficCameras/${key}?format=json`;
		const result = await (await fetch(url)).json();

		let newResult = [];

		for (let i = 0; i < result.length; i++) {
			const camera = result[i];
			const imageURL = camera.CameraImageUrl;

			const cameraObj = {
				id: camera.Id,
				name: camera.Name,
				imgURL: imageURL,
				time:time
			};

			newResult.push(cameraObj);
		}

		setCameras(newResult);
	}

	//Update all cameras. And fetches new images
	async function updateAllCameras() {
    console.log('updating all cameras');
		
    let newCameras = [...cameras]
    const currentTime=`${date.toLocaleTimeString().split(':')[0]}:${date.toLocaleTimeString().split(':')[1]}`
    setTime(currentTime)
    
    for (let i = 0; i < newCameras.length; i++) {
      let camera = newCameras[i];

      const url = `http://data.goteborg.se/TrafficCamera/v1.0/CameraImage/${key}/${camera.id}`;
      const result = await (await fetch(url)).blob();
      const imgUrl = URL.createObjectURL(result);
      camera.imgURL=imgUrl
      camera.time=currentTime
    }
    
    setCameras(newCameras)
	}

	//Update one camera in state
	async function updateCamera(id) {
		console.log("updating one camera with id:");
		console.log(id);

		let camerasCopy = [...cameras];
		let camera = camerasCopy.find((object) => object.id === id);

		const url = `http://data.goteborg.se/TrafficCamera/v1.0/CameraImage/${key}/${id}`;
		const result = await (await fetch(url)).blob();
		const imgUrl = URL.createObjectURL(result);
    
    const dateString=new Date().toLocaleTimeString().split(':')
		camera.time = `${dateString[0]}:${dateString[1]}`


		camera.imgURL = imgUrl;

		setCameras(camerasCopy);
	}

	return (
		<div className="App">
			<Header time={time} updateCameras={updateAllCameras}></Header>

			<main>
				<div>
					<div>
						{cameras.map((data) => {
							return (
								<CameraCard
									updateCamera={updateCamera}
									key={data.name}
									id={data.id}
									imgURL={data.imgURL}
									time={data.time}
									name={data.name}
								></CameraCard>
							);
						})}
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;

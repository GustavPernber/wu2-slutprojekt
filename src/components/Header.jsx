export default function Header(props) {
	return (
		<header className="siteHeader">
			<div>
				<h1>GBG Kameror</h1>

				<div className="search">
					<input
                        onChange={props.handleSearch}
						type="text"
						placeholder="Vilken kamera vill du se?"
					/>
                    <div className="icon">
					    <span className="material-icons">search</span>
                    </div>
				</div>

				<div className="updateBtn">
					<button onClick={props.updateCameras}>
						Uppdatera kameror
					</button>
					<p>Senast uppdaterad: {props.time}</p>
				</div>
			</div>
		</header>
	);
}

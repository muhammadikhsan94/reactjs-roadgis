import React, { Component } from "react";
import ringan from './icon/ringan.png';
import sedang from './icon/sedang.png';
import berat from './icon/berat.png';
import diperbaiki from './icon/perbaikan.png';
import selesai from './icon/selesai.png';
import BingMapsReact from "bingmaps-react";

class Home extends Component {

	render() {
		return (
			<div>
				<div className="page-content">
					<ul className="breadcrumb">
						<li><a href="{}"><span className="glyphicon glyphicon-home"></span></a></li>
						<li className="active">Beranda</li>
					</ul>

					<div className="page-content-wrap">
						<div className="row">
							<div className="col-md-12">
								<div style={{ maxWidth: 'auto', height: '100%', marginBottom: '10px' }} id="Mymap">
									<BingMapsReact
										bingMapsKey="Aq7awNJp0-DRInhStx0Fn88vq0-jN0oNRUqlHORg7hMrjOsnXKdxrXAsY6O3xSaM"
										height="500px"
										mapOptions={{
											navigationBarMode: "square"
										}}
										width="500px"
										viewOptions={{
											center: { latitude: 42.360081, longitude: -71.058884 },
											mapTypeId: "grayscale"
										}}
									/>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-md-12 text-center">
								<img src={ringan} alt="logo" style={{ width: '25px', height: '25px' }} />
								<span style={{ marginLeft: '5px', marginRight: '20px' }}><b>JALAN RUSAK RINGAN</b></span>
								<img style={{ width: '25px', height: '25px' }} src={sedang} alt="logo" />
								<span style={{ marginLeft: '5px', marginRight: '20px' }}><b>JALAN RUSAK SEDANG</b></span>
								<img style={{ width: '25px', height: '25px' }} src={berat} alt="logo" />
								<span style={{ marginLeft: '5px', marginRight: '20px' }}><b>JALAN RUSAK BERAT</b></span>
								<img style={{ width: '25px', height: '25px' }} src={diperbaiki} alt="logo" />
								<span style={{ marginLeft: '5px', marginRight: '20px' }}><b>JALAN DALAM PERBAIKAN</b></span>
								<img style={{ width: '25px', height: '25px' }} src={selesai} alt="logo" />
								<span style={{ marginLeft: '5px' }}><b>JALAN SELESAI DIPERBAIKI</b></span>
							</div>
						</div>
					</div>
				</div>

			</div>
		);
	}
}

export default Home;
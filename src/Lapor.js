import React, { Component } from "react";
import { ReactBingmaps } from 'react-bingmaps';

class Lapor extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bingmapKey: "Aq7awNJp0-DRInhStx0Fn88vq0-jN0oNRUqlHORg7hMrjOsnXKdxrXAsY6O3xSaM"
		}
	}

	render() {
		return (
			<div>
				<div className="page-content">
					<ul className="breadcrumb">
						<li><a href="{}"><span class="glyphicon glyphicon-home"></span></a></li>
						<li class="active">Buat Pengaduan</li>
					</ul>

					<div className="page-content-wrap">
						<div className="row">
							<div className="col-lg-7">
								<div className="panel panel-default">
									<div className="panel-heading" style={{backgroundColor: '#1caf9a', color: 'white'}}>Buat Pengaduan</div>
									<div className="panel-body">
										<form className="form-horizontal" action="{}" method="post" enctype="multipart/form-data">
											<div class="form-group">
												<label class="col-md-3">Nama Pelapor*</label>
												<div class="col-md-4">
													<input class="form-control" placeholder="Nama Lengkap " id="nama_pelapor" name="nama_pelapor" type="text" autofocus />
												</div>
											</div>

											<div class="form-group">
												<label class="col-md-3">Nomor Identitas</label>
												<div class="col-md-4">
													<input class="form-control" placeholder="NIK " id="nik" name="nik" type="text" />
												</div>
											</div>

											<div class="form-group">
												<label class="col-md-3">Alamat Pelapor</label>
												<div class="col-md-9">
													<input class="form-control" placeholder="Alamat Anda " id="alamat" name="alamat" type="text" />
												</div>
											</div>

											<div class="form-group">
												<label class="col-md-3">Nomor HP</label>
												<div class="col-md-4">
													<input class="form-control" placeholder="Nomor HP " id="no_hp" name="no_hp" type="text" />
												</div>
											</div>

											<div class="form-group">
												<label class="col-md-3">Nama Jalan Rusak*</label>
												<div class="col-md-9">
													<input class="form-control" id="nama_jalan" name="nama_jalan" type="text" placeholder="nama jalan " />
													<i>* Contoh : Jalan Bumi Manti 1 Kampung Baru Bandar Lampung</i>
												</div>
											</div>

											<div class="form-group">
												<label class="col-md-3">Kategori Rusak*</label>
												<div class="col-md-3">
													<select id="id_kategori" name="id_kategori" class="form-control">
														<option value="1">Jalan Rusak Ringan</option>
														<option value="2">Jalan Rusak Sedang</option>
														<option value="3">Jalan Rusak Berat</option>
													</select>
												</div>
												<a href="{}" data-toggle="modal" data-target="#ket"><span class="glyphicon glyphicon-question-sign" style={{ marginTop: '5px', fontSize: '18px' }}></span></a>
											</div>

											<input type="hidden" id="lat" name="lat" />
											<input type="hidden" id="lng" name="lng" />

											<div class="form-group">
												<label class="col-md-3">Foto Jalan*</label>
												<div class="col-md-9">
													<input class="form-control" id="foto_jalan" name="foto_jalan[]" type="file" multiple accept="{ }}" />
												</div>
											</div>

											<div class="col-md-offset-3">
												<input type="submit" name="send" id="send" value="Simpan" class="btn btn-success" />
												<input type="reset" name="reset" id="reset" value="Reset" class="btn btn-reset" />
											</div>
										</form>
									</div>
								</div>
							</div>

							<div class="row">
								<div class="col-lg-5">
									<div class="panel panel-default">
										<div class="panel-heading" style={{ backgroundColor: '#1caf9a', color: 'white' }}>Peta</div>
										<div class="panel-body">
											<div style={{ width: 'auto', height: '300px' }} id="Mymap"></div>
												<ReactBingmaps
													id="Mymap"
													bingmapKey={this.state.bingmapKey}
													center={[13.0827, 80.2707]}
													zoom={4}
												>
												</ReactBingmaps>
												<p style={{ marginTop: '5px', textAlign: 'center', color: 'red' }}><b>* Tarik Titik Marker Jika Kordinat Tidak Sesuai *</b></p>
											<div id="output"></div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Lapor;
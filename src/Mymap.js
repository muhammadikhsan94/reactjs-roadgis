var MyMap = React.createClass({

	componentDidMount: function () {

		var map = new Microsoft.Maps.Map(ReactDOM.findDOMNode(this), {
			credentials: 'AsvrlFVEvd8hivhOL3VM_na5QJ9cmdF0LmAznQpJtJhmUt5OkHcWvegTrt-qHEYq'
		});
	},

	render: function () {
		return (
			<div id="map"><span></span></div>
		);
	}
});
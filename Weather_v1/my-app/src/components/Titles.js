import React, { Component } from 'react';

class Titles extends Component {
  render() {
    return (
    		<div className="pic">
      		{(this.props.temprature && this.props.maindescription) ?
      			<div className="picwrapper">
      				<h1> {Math.round(this.props.temprature-273.15)+"°"}</h1>
					<h2>{this.props.maindescription}</h2>
      			</div>

      			:

      			<div className="picwrapper">
      				<p className="startmsg1">Weather App</p>
      				<p className="startmsg2">Enter your City and Country</p>
      			</div>
      		}
      		</div>
    );
  }
}

export default Titles;

/*<div class="pic">
  <h1>24°</h1>
  <h2>Rainy</h2>
</div>*/


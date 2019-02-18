import React from 'react';

const WeatherForm = (props) => 
{
  return (
    <form onSubmit={props.getWeather}>
      <input style={{ margin:"20px auto", display:"block" }} type="text" name="city" placeholder="City..."/>
      <button>Search</button>
    </form>
  );
}

export default WeatherForm;
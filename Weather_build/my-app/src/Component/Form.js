import React from 'react';

const Form = (props) => {
    return (
        <div className="container" align="center">
            <form onSubmit={props.getWeather}>
                <input style={{ margin: "20px auto", padding: " 12px 20px", display: "block", width: "80%" }} type="text" name="city" placeholder="City or Location ..." /><br />
                <button class="btn btn-lg btn-block button" > Search</button>
            </form><br /><br />

            <div className="container">
                <h5><strong>#Suggestions#</strong></h5>
                <strong>City :</strong>
                <a href="https://openweathermap.org/city/1609350" class="card-link"> Bangkok</a>
                <a href="https://openweathermap.org/city/1151254" class="card-link">Phuket</a>
                <a href="https://openweathermap.org/city/1607708" class="card-link">Phitsanulok</a>
                <a href="https://openweathermap.org/city/1152633" class="card-link">กระบี่</a>
                <a href="https://openweathermap.org/city/1153671" class="card-link">เชียงใหม่</a>

                <br /><strong>Location :</strong>
                <a href="https://openweathermap.org/city/7511025" class="card-link"> เขาค้อ</a>
                <a href="https://openweathermap.org/city/7510944" class="card-link">ป่าตอง</a>
                <a href="https://openweathermap.org/city/1610780" class="card-link">หาดใหญ่</a>

                <br />
            </div>
            <div>


            </div>
        </div>
    );
}

export default Form;
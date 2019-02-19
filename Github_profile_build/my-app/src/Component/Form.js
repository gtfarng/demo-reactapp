import React from 'react';

const Form = (props) => {
    return (
        <div>

            <div class="container">
                <div class="row">
                    <div class="col-sm"></div>
                    <div class="col-sm">

                        <form onSubmit={props.getUser}>
                            <input style={{ margin: "20px auto", display: "block", width: "100%" }} type="text" name="username" placeholder="Username" />
                            <br /><button class="btn btn-primary btn-lg btn-block">Search</button><br/>
                        </form>

                       {// <button class="btn btn-primary btn-lg btn-block" href="https://www.google.co.th">Reset</button>
                       }

                    </div>
                    <div class="col-sm"></div>
                </div>


            </div>

        </div>
    );
}

export default Form;
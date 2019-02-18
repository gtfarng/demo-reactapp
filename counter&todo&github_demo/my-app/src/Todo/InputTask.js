import React, {Component}  from 'react';

class InputTask extends Component {

   state = {task:'' , place:'', date:'', daytime:''}

   handleChange = (e) => 
   {
       this.setState({ [e.target.name] : e.target.value });
   }

   render() {
       return (
           <div >
              
              <h5>

               <input type="hidden" name="id" value={this.props.id} />
               <input type="text"   placeholder="Activities" name="task" onChange={this.handleChange} />

             <a class='u2'>at</a><a class='u2'></a>
               <input type="text" placeholder="Location" name="place" onChange={this.handleChange} />
              <a class='u2'>In</a><a class='u2'> </a>

           { /*  <input type="date"  name="date" onChange={this.handleChange} />*/} 
               <input type="datetime-local"  name="daytime" onChange={this.handleChange} />

               <br/><br/>
               <button onClick={() => this.props.addTask(this.state.task,this.state.place,this.state.date,this.state.daytime)}>Add</button>
           </h5>

           </div>
       )
   }
}

export default InputTask
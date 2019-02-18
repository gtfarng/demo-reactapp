import React from 'react';

const GithubForm = (props) => 
{
  return (
    <form onSubmit={props.getUser}>
      <input style={{ margin:"20px auto", display:"block" }} type="text" name="username" placeholder="Username"/>
      <button>Search</button>
    </form>
  );
}

export default GithubForm;
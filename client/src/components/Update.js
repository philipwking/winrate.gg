import React from "react";

function Update(props){
    return (
            <button onClick={props.handleFormSubmit} className="btn btn-primary">
              Update
            </button>
      );
}

export default Update
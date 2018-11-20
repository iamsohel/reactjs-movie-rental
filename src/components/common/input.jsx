
import React from 'react';
const Input = ({name, label, value, onChange, error}) => {
    return (  
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input type="text" 
                name={name}
                value={value}
                onChange={onChange}
                className="form-control" 
                id={name} 
                aria-describedby="emailHelp"
                placeholder=""/>
               { error &&  <div  className="alert alert-danger">{error}</div>}
        </div>
    );
};
 
export default Input;
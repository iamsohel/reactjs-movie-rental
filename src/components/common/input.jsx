
import React from 'react';
const Input = ({name, label, value, onChange}) => {
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
                placeholder="Enter username"/>
        </div>
    );
};
 
export default Input;
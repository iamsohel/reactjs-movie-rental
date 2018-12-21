
import React from 'react';
 
const Input = ({name, label, error, ...rest}) => {
    return (  
        <div className="form-group">
            <label htmlFor={name} className="control-label visible-ie8 visible-ie9">{label}</label>
            <input {...rest}
                name={name}
                className="form-control form-control-solid placeholder-no-fix" 
                id={name} 
                placeholder=""/>
               { error &&  <div  className="alert alert-danger">{error}</div>}
        </div>
    );
};
 
export default Input;
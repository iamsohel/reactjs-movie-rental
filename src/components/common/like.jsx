import React, { Component } from 'react';
class Like extends Component {

    render() { 
        let classes = 'fa fa-heart';
        if(!this.props.liked) classes += '-0';
        return (
             <i 
              className={classes}
              onClick={this.props.onClick}
              aria-hidden="true"
              style={{cursor : 'pointer'}}
              >
              </i> 
            );
    }
}
 
export default Like;
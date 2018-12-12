import React, { Component } from 'react';
import ListGroup from './listGroup';
class Like extends Component {

    render() { 
        let classes = 'fa fa-heart';
        if(!this.props.liked) classes += '-o';
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
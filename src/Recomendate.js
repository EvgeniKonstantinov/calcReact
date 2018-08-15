import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Recomendate extends React.Component{
    render(){
        const {data} = this.props
        return(
            <div className="optionsBlock"> {data.map( i => (<label className="checkBoxOption">{i}<input  type="radio" name='recommended' /></label>  ))}</div>
        )
    }
}

export {Recomendate}
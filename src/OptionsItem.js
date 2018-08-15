import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class OptionsItem extends React.Component{
    handleClickOptions= (e) =>{
        var text = document.getElementsByClassName("kek")[0];
        var val = text.value;
        this.props.optionsValue(val)
        e.preventDefault()
       
        console.log(this.value)
    }
     render(){
       const {data, fullPrice} = this.props

        return(
            <div className="optionsBlock"> {data.map( e => <label className="checkBoxOption" > {e.name_options} <input onClick={this.handleClickOptions} className="kek" type="checkbox" value={e.price_options}/>  </label>)}</div>
        )
     }
}

export {OptionsItem};  
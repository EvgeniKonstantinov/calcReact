import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class OptionsItem extends React.Component{
    // handleClickOptions= (e) =>{
    //     e.preventDefault()
    //     const {fullPrice} = this.props
    //     console.log(fullPrice)
    // }
     render(){
       const {data, fullPrice} = this.props

        return(
            <div className="optionsBlock"> {data.map( e => <label className="checkBoxOption" onClick={this.handleClickOptions}> {e.name_options} <input type="checkbox" value={e.price_options}/>  </label>)}</div>
        )
     }
}

export {OptionsItem};
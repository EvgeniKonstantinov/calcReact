import React from 'react';
import ReactDOM from 'react-dom';
import {ItemsBar} from './ItemsBar';
import './index.css';

class BodyCalc extends React.Component{
    state = {
        fullPrice: 800
    }
    clickPrice =()=>{
         this.props.onFullprice(this.state.fullPrice) 
         console.log(this.state.fullPrice)
    }
    render(){
        const { fullPrice } = this.state
        const { data } = this.props
        let newTemplate
      

        if(data.length){
            newTemplate =  data.map(function(item) {  
               return <ItemsBar  key={item.id} data={item} value={this.props.onFullprice}/>
            })
        } else{
            newTemplate = <p>НИЧЕГО НЕТУ</p>
        }
        
        return(
            <div className="arrardion_calc">
                {newTemplate}

            </div>
                
            
            
        )
    }
}

export  {BodyCalc};
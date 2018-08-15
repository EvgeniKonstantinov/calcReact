import React from 'react';
import ReactDOM from 'react-dom';
import {ItemsBar} from './ItemsBar';
import './index.css';

class BodyCalc extends React.Component{
    state = {
        fullPrice: 800
    }
     
    render(){

        const { data } = this.props
      
        let newTemplate
      

        if(data.length){
            newTemplate =  data.map(function(item) {  
               return <ItemsBar  key={item.id} data={item}/>
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
import React from 'react';
import ReactDOM from 'react-dom';
import {OptionsItem} from './OptionsItem';
import {Recomendate} from './Recomendate';
import './index.css';

class ItemsBar extends React.Component{
    state ={
        activ: "switch-btn switch-off",
        display_second: "secondBlockItems secondBlock_off"
    }
    handleClickSlide = (e) =>{
        e.preventDefault()
        if(this.state.activ=="switch-btn switch-off"){
            this.setState({ activ: "switch-btn switch-on",  display_second: "secondBlockItems secondBlock_activ"})
        }
        else{
            this.setState({ activ: "switch-btn switch-off",  display_second: "secondBlockItems secondBlock_off" })

        }

    }

    hendleClickMainPrice = ()=>{
        console.log(this.props.fullPrice)
        console.log(this.props.data.price)

        console.log('-----------------------------------------')
        console.log(this.props.fullPrice)
        console.log(this.props.data.price)
    }

    render(){
        const { data, fullPrice } = this.props
        const { name , price , bigText, options, recomendate } = this.props.data
        const { activ, display_second } =this.state

        let listOptions
        let listRecomendate

        listRecomendate =Object.keys(recomendate).map(key =>{
       
            return recomendate[key]
        })
        listOptions = Object.keys(options).map(key => {
            return options[key]
      
        })

        return(
            <div className="itemCal">
                <div className="MainBlocItem">
                    <div className="nameItem">{name}</div>
                    <div className="priceItem"></div>
                    <label title={price} onClick={this.hendleClickMainPrice}>
                        <input type="radio"  name="groupItems" onClick={this.handleClickSlide} className={this.state.activ}/>
                        {price}
                    </label>

                    
                   
                </div>
                <div className={display_second} >

                    <div className="bigText">{bigText}</div>
                    <h3>Список опций</h3>
                    <OptionsItem fullPrice={fullPrice} key={222} data={listOptions}/>
                    <h3>Рекомендуемые CMS-платформы</h3>
                    <Recomendate key={333} data={listRecomendate}/>
                </div>

            </div>
        )
    }  
}
export  {ItemsBar};
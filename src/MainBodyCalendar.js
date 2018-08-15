import React from 'react';
import ReactDOM from 'react-dom';
import {BodyCalc} from './BodyCalc';
import './index.css';



const itemsList =[
    {
        id:1,
        "name":'Сайт визитка',
        price: 7500,
        options:{
            options1:{
                name_options:'Интеграция с 1С',
                price_options:'15000'
            },
            options2:{
                name_options:'Интеграция с CRM Bitrix24',
                price_options:'7000'
            },
            options3:{
                name_options:'Интеграция с  AmoCRM',
                price_options:'10000'
            }
        },
        bigText:'Сайт-визитка – это самый простой и наиболее доступный вариант интернет-проекта для ваше компании. Если ваша цель – заявить о себе, без осуществления продаж на сайте, совершения каких-то действий, то..',
        recomendate:{
            rec1:"Wordpress",
            rec2:"1C Bitrix Лицензия Старт",
            rec3:"ModX"
        }
    },
    {
        id:2,
        "name":'Лендинг',
        price: 10500,
        options:{
            options1:{
                name_options:'Интеграция с 1С',
                price_options:'15000'
            },
            options2:{
                name_options:'Интеграция с CRM Bitrix24',
                price_options:'7000'
            },
            options3:{
                name_options:'Интеграция с  AmoCRM',
                price_options:'10000'
            }
        },
        bigText:'Landing Page (англ. страница приземления) – отдельная страница, специально созданная для того, чтобы предоставить пользователю минимальное количество информации, заинтересовать его, удержать и',
        recomendate:{
            rec1:"Wordpress",
            rec2:"1C Bitrix Лицензия Старт",
            rec3:"ModX"
        }
    },
    {
        id:3,
        "name":'Сайт каталог',
        price: 15000,
        options:{
            options1:{
                name_options:'Интеграция с 1С',
                price_options:'15000'
            },
            options2:{
                name_options:'Интеграция с CRM Bitrix24',
                price_options:'7000'
            },
            options3:{
                name_options:'Интеграция с  AmoCRM',
                price_options:'10000'
            }
        },
        bigText:'Сайт-каталог товаров или услуг имеет много особенностей и достоинств, которые позволяют его выделить в отдельную категорию по сравнению с прочими интернет-ресурсами. Такой вид интернет-ресурса...',
        recomendate:{
            rec1:"Wordpress",
            rec2:"1C Bitrix Лицензия Cтандарт",
            rec3:"ModX"
        }
    },
    {
        id:4,
        "name":'Интернет-магазин',
        price: 30000,
        options:{
            options1:{
                name_options:'Интеграция с 1С',
                price_options:'15000'
            },
            options2:{
                name_options:'Интеграция с CRM Bitrix24',
                price_options:'7000'
            },
            options3:{
                name_options:'Интеграция с  AmoCRM',
                price_options:'10000'
            }
        },
        bigText:'Интернет-магазин - это дополнительная возможность развития успешного бизнеса, продуктивный инструмент для роста продаж. Онлайн-предпринимательство имеет целый ряд плюсов в сравнении с...',
        recomendate:{
            rec1:"OpenCart",
            rec2:"1C Bitrix Лицензия Малый бизнес",
            rec3:"1C Bitrix Лицензия Бизнес",

        }
    }
]

class  MainBodyCalendar extends React.Component{
    state = {
        fullPrice: 700
    }
     onFullprice = (param) =>{
         this.setState({fullPrice:param})
     }
    render(){
        const {fullPrice} =this.state
        return(
            
            <div className="BodyCalc">
                <BodyCalc onFullprice={this.onFullprice} data={itemsList}/>
                <div className="BottomBar">
                    <p className="FullPrice">Итого: {fullPrice}</p>
                    <button>Заказать</button>
                </div>
            </div>
        )
    }
}
export {MainBodyCalendar};
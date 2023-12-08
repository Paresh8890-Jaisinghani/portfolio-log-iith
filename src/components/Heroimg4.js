import React, { Component } from 'react'
import './Heroimg4.css';


class Heroimg4 extends Component  {
 render(){

     
        return (
        <div className='hero3-img'>
            <div className='heading'>
               <h1>{this.props.heading}</h1>
               <p>{this.props.text}</p>
            </div>
        
        </div>
      );
    }
 }

export default Heroimg4

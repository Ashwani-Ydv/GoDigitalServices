import React, { Component } from 'react';
import login from '../assests/image/Login.png'
import qq from '../assests/image/qq.svg'
import './Image.css'

class Image extends Component {
    render() {
        return (
            <div className="App__Aside">
                <div className="image">
                    <img src={login} width='850' height='610' />
                    <div className='text-container'>
                        <div className='text'>DigitalService</div>
                        <div className='text2'>The world's most powerful<br></br>digital service too</div>
                        <div className='goto'><i>Go to website</i>&emsp;
          <img className='Arrow' src={qq} /></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Image;
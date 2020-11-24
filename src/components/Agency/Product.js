import React, { Component } from 'react';
import Sidebar from './Sidebar';

class Product extends Component {
    render() {
        return (
            <div style={{display:'flex'}}>
                <Sidebar/>  
                <h1 style={{margin:'auto',textAlign:'center'}}>Product Page:Under Development</h1>
            </div>
        );
    }
}

export default Product;
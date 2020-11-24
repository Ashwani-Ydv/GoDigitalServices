import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import { browserHistory, Redirect } from 'react-router'
import { Link, Router } from 'react-router-dom'
// import {browserHistory} from 'react-router'
import User from '../assests/Icons/Other icons/User.svg'
import Product from '../assests/Icons/Other icons/Product.svg'
import Profile from '../assests/Icons/Other icons/Profile.svg'
import ProfileB from '../assests/Icons/Other icons/ProfileB.svg'
import ProductB from '../assests/Icons/Other icons/ProductB.svg'
import UserB from '../assests/Icons/Other icons/UserB.svg'
import './Sidebar.css'
import MenuItem from 'antd/lib/menu/MenuItem';

const { Header, Sider, Content } = Layout;

class Sidebar extends Component {
  state = {
    collapsed: false,
    user_img: false,
    product_img: false,
    profile_img: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  changeImage1 = () => {
    this.setState({
      user_img: true,
    })
  }

  changeImage2 = () => {
    this.setState({
      product_img:true
    })
  }

  changeImage3 = () => {
    this.setState({
      profile_img:true
    })
  }

  render() {
    console.log("//////////", this.props.location)
    return (
      // <Layout>
      <Sider className='sider' style={{position:'relative'}}>
        <div className="logo" />
        <Menu className='sider-content' theme="dark" mode="inline" defaultSelectedKey={['2']}>
          <Menu.Item key="1" className='sidebar-img-container'>
            <img src="https://img.icons8.com/metro/20/9C9E9F/menu.png" />
          </Menu.Item>
          <Menu.Item key='2' className='sidebar-img-container' onClick={this.changeImage1}>
            <Link to="/agencies" >
            {this.state.product_img || this.state.profile_img === true ? <img className='sidebar-img' src={require('../assests/Icons/Other icons/UserB.svg')} /> : <img className='sidebar-img' src={require('../assests/Icons/Other icons/User.svg')} />}
            </Link>
          </Menu.Item>
          <Menu.Item key='3' className='sidebar-img-container' onClick={this.changeImage2}>
            <Link to="/product" >
              {this.state.user_img || this.state.profile_img === true ? <img className='sidebar-img' src={require('../assests/Icons/Other icons/ProductB.svg')} /> : <img className='sidebar-img' src={require('../assests/Icons/Other icons/Product.svg')} />}
            </Link>
          </Menu.Item>
          <Menu.Item key='4' className='sidebar-img-container' onClick={this.changeImage3}>
            <Link to="/user">
              {this.state.user_img || this.state.product_img === true ? <img className='sidebar-img' src={require('../assests/Icons/Other icons/ProfileB.svg')} /> : <img className='sidebar-img' src={require('../assests/Icons/Other icons/Profile.svg')} />}
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      // </Layout>
    );
  }
}

export default Sidebar;



import React, { Component, useState } from 'react';
import { HashRouter as Router, Route, Link, NavLink, br } from 'react-router-dom';
import { browserHistory, Redirect } from 'react-router'
import Sidebar from './Sidebar'
import lg from '../assests/Icons/Other icons/LG.svg'
import chat from '../assests/Icons/Other icons/Chat.svg'
import notification from '../assests/Icons/Other icons/Notification.svg'
import line from '../assests/Icons/Other icons/Line.svg'
import info from '../assests/Icons/Other icons/Info.svg'
import logo1 from '../assests/Icons/Other icons/Ellipse 2.png'
import Filter from '../assests/Icons/Other icons/Filter.svg'
import Arrow from '../assests/Icons/Other icons/agencies card arrow.svg'
import Camera from '../assests/Icons/Product blue icons/Camera.svg'
import Fridge from '../assests/Icons/Product blue icons/fridge.svg'
import HomeT from '../assests/Icons/Product blue icons/Home theatre.svg'
import MicroO from '../assests/Icons/Product blue icons/Micro oven.svg'
import TV from '../assests/Icons/Product blue icons/Television.svg'
import WashingM from '../assests/Icons/Product blue icons/Washing machine.svg'
import WaterP from '../assests/Icons/Product blue icons/water purifier.svg'
import { Card, Row, Col, Modal, Button, Input, Rate, Menu, Dropdown, Popover, Tooltip, Drawer } from 'antd'
import {
  RightOutlined,
  DownOutlined
} from '@ant-design/icons';
// import Popup from './Popup'
import 'antd/dist/antd.css';
import './Agencies.css'
import './User.css'
import { T } from 'antd/lib/upload/utils';
import Service from '../service/Service';
import Constants from '../utils/Constants';

const { Search } = Input;
const menu = (
  <Menu>
    <Menu.Item key="0">
      <a>Lokhin martin</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a>Gerard philips</a>
    </Menu.Item>
    <Menu.Item key="3">Liam payne</Menu.Item>
  </Menu>
);

const text = <span>Title</span>;
const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.service = new Service();
  }

  componentDidMount() {
    this.getAllProductApproveList();
  }

  getAllProductApproveList = () => {
    this.service.retrieveItems(Constants.BASE_URL + Constants.GET_ALL_PRODUCT_APPROVE)
      .then(response => {
        console.log("-----------------");
        console.log("===========", response);
        console.log("dshhdsdhvb", response.result)
        var stateData = this.state;
        stateData["data"] = response.result ?? [];
        this.setState({ stateData });
      })
  }

  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true
    })
  };

  onClose = () => {
    this.setState({
      visible: false
    })
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  search = (event) => {
    console.log("------" + event.target.value);
    this.service.retrieveItems(Constants.BASE_URL + Constants.GET_SEARCH_AGENCIES + "?search=" + event.target.value)
      .then(response => {
        console.log("search results");
        console.log(response)
        var stateData = this.state;
        stateData["data"] = response ?? [];
        this.setState({ stateData });
      });
  }

  render() {
    const { data } = this.state
    const { locality } = this.state;
    if (this.state.redirect) {
      return <Redirect push to="/agency_detail" />;
    }
    return (
      <div>
        <Sidebar />
        <div className='agency_page' >
          <div className='agency-div'>
            <div className='agency'>Agencies</div>
            <div className='agency-div-2'>
              <div ><img className='messaging' src={chat} /></div>
              <div >
                <Popover placement="bottom" title={text} content={content} trigger="click">
                  <img className='notification' src={notification} />
                </Popover>
              </div>
              <div>
                <img className='vertical-line' src={line}/>
              </div>
              <div className=''>
                <img className='LG' src={lg} />
              </div>
              <div className='murphy'>
                <Dropdown overlay={menu} trigger={['click']}>
                  <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Bruce murphy <DownOutlined />
                  </a>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className='searchbar-div'>
            <div>
              <div className="searchForm">
                <Search placeholder="Search for city,agencies,name" onChange={(e) => this.search(e)} />
              </div>
            </div>
            <div className='popup-button'>
              <img className='filter' style={{ color: 'blue' }} src={Filter} onClick={this.showDrawer} />
              <Drawer
                title="Filter"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
              >
                <div className='model-number'>
                  <div className='msp-number'>Product category</div>
                  <div className='input-btn'>
                    <Input type="text" id="phone" maxlength="10" className="user-FormField__Input" placeholder="Enter product category" name="phone" value={this.state.phone} />&nbsp;&nbsp;
                    <div className='add-btn'>
                      <Button style={{ height: '1.8rem', width: '3.5rem' }} type="primary"
                        onClick={this.addLocality}>
                        Add</Button>
                    </div>
                  </div>
                </div>
                <div className='serial-number'>
                  <div className='msp-number'>Model number</div>
                  <div className='input-btn'>
                    <Input type="text" id="phone" className="user-FormField__Input" placeholder="Enter model number" name="phone" value={this.state.phone} />&nbsp;&nbsp;
                    <div className='add-btn'>
                      <Button style={{ height: '1.8rem', width: '3.5rem' }} type="primary"
                        onClick={this.addLocality}>
                        Add</Button>
                    </div>
                  </div>
                </div>
                <div className='product-category'>
                  <div className='msp-number'>Serial number</div>
                  <div className='input-btn'>
                    <Input type="text" id="phone" className="user-FormField__Input" placeholder="Enter serial number" name="phone" value={this.state.phone} />&nbsp;&nbsp;
                    <div className='add-btn'>
                      <Button style={{ height: '1.8rem', width: '3.5rem' }} type="primary"
                        onClick={this.addLocality}>
                        Add</Button>
                    </div>
                  </div>
                </div>
                <div className='apply-btn'>
                <Button style={{ width: "6rem" }} type="primary" 
              >
                Apply
              </Button>
                </div>
              </Drawer>
            </div>
          </div>
          {data && data.length > 0 && data.map(item => {
            console.log(item)
            return (
              <div className='card-container'>
                <div className='first-container'>
                  <div>
                    <img className='logo' src={logo1} />
                  </div>
                  <div className='name'>
                    <b> {item.user.name} </b><br />
                    {item.user.phone}
                  </div>
                </div>
                <div style={{ textAlign: 'left' }}>
                  Product category<br />
                  <b>{item.productCategory}</b>
                </div>
                <div style={{ textAlign: 'left' }}>
                  Model number<br />
                  <b>{item.productModel} </b>
                </div>
                <div style={{ textAlign: 'left' }}>Serial number<br /><b>{item.serialNumber}</b>
                </div>
                <div className='re-button-div'>
                  <div className=''>
                    <Button className='remove-btn'>Decline</Button>
                  </div>
                  <div className='edit-btn'>
                    <Button className='edit' type="primary">Approve</Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    );
  }
}

export default User;


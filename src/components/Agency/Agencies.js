import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink, br } from 'react-router-dom';
import { browserHistory, Redirect } from 'react-router'
import Sidebar from './Sidebar'
import lg from '../assests/Icons/Other icons/LG.svg'
import chat from '../assests/Icons/Other icons/Chat.svg'
import notification from '../assests/Icons/Other icons/Notification.svg'
import info from '../assests/Icons/Other icons/Info.svg'
import logo1 from '../assests/Icons/Other icons/Ellipse 2.png'
import line from '../assests/Icons/Other icons/Line.svg'
import Filter from '../assests/Icons/Other icons/Filter.svg'
import Arrow from '../assests/Icons/Other icons/agencies card arrow.svg'
import Camera from '../assests/Icons/Product blue icons/Camera.svg'
import Fridge from '../assests/Icons/Product blue icons/fridge.svg'
import HomeT from '../assests/Icons/Product blue icons/Home theatre.svg'
import MicroO from '../assests/Icons/Product blue icons/Micro oven.svg'
import TV from '../assests/Icons/Product blue icons/Television.svg'
import WashingM from '../assests/Icons/Product blue icons/Washing machine.svg'
import WaterP from '../assests/Icons/Product blue icons/water purifier.svg'
import { Card, Row, Col, Modal, Button, Input, Rate, Menu, Dropdown, Popover, Tooltip } from 'antd'
import {
  RightOutlined,
  DownOutlined
} from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Agencies.css'
import './Sidebar.css'
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

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class Agencies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],

    };
    this.service = new Service();
  }

  componentDidMount() {
    this.getAllAgenciesList();
  }

  getAllAgenciesList = () => {
    this.service.retrieveItems(Constants.BASE_URL + Constants.GET_ALL_AGENCIES)
      .then(response => {
        console.log("-----------------");
        console.log("===========", response);
        console.log("dshhdsdhvb", response.result)
        var stateData = this.state;
        stateData["data"] = response.result ?? [];
        this.setState({ stateData });
      })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
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
  goToCarddetails = (agencyId) => {
    localStorage.setItem("selectedAgencyid", agencyId);
    this.props.history.push({
      pathname: '/agency_detail'
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
              <div ><img className='notification' src={notification} /></div>
              <div>
                <img className='vertical-line' src={line} />
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
                <Search placeholder="Search for city,agencies,name" onChange={(e) => this.search(e)} />&emsp; <img className='filter' src={Filter} />
              </div>
            </div>
            <div className='popup-button'>
              <Button style={{ width: "7rem" }} type="primary" onClick={() => {
                this.props.history.push({
                  pathname: '/add_agency'
                });
              }}>
                Add agency
              </Button>
            </div>
          </div>
          {data && data.length > 0 && data.map(item => {
            console.log(item)
            return (
              <div className='card-container' onClick={() => this.goToCarddetails(item.agencyId)}>
                <div className='first-container'>
                  <div>
                    <img className='logo' src={logo1} />
                  </div>
                  <div className='name'>
                    <b> {item.companyName} </b><br />
                    {'ID: ' + item.ID}
                  </div>
                </div>
                <div className='product_icon'>
                  <img src={WashingM}/>&emsp;
                  <img src={Fridge}/>&emsp;
                  <img src={MicroO}/>&emsp;
                  <img src={TV}/>&emsp;
                  <img src={HomeT}/>
                </div>
                <div className='location'>
                  <div>city</div>
                  <div className='city'>
                    <b> {item.city} </b>
                          <Popover placement="right"
                            content={ <div className='popover-content'>
                              {item.locality && item.locality.length > 0 && item.locality.map(localityItem => {
                                return (
                                <p className='popover-para'>{localityItem}</p>
                                )
                              })}
                            </div>}
                            trigger="hover"
                            arrowPointAtCenter="false">
                            <img className='info-icon' src={info} />
                          </Popover>
                  </div>
                </div>
                <div className='rating'><b>24,059 rating</b><br /><Rate defaultValue={item.starRating} disabled/></div>
                <div className='outline'><img src={Arrow} /></div>
              </div>
            )
          })}
        </div>
      </div>

    );
  }
}

export default Agencies;


import React, { Component } from 'react';
import { Button, Dropdown, Menu, Modal } from 'antd'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Close from '../assests/Icons/Other icons/Close.svg'
import logo1 from '../assests/Icons/Other icons/Ellipse 2.png'
import lg from '../assests/Icons/Other icons/LG.svg'
import chat from '../assests/Icons/Other icons/Chat.svg'
import line from '../assests/Icons/Other icons/Line.svg'
import Filter from '../assests/Icons/Other icons/Filter.svg'
import Camera from '../assests/Icons/Product blue icons/Camera.svg'
import Fridge from '../assests/Icons/Product blue icons/fridge.svg'
import HomeT from '../assests/Icons/Product blue icons/Home theatre.svg'
import MicroO from '../assests/Icons/Product blue icons/Micro oven.svg'
import TV from '../assests/Icons/Product blue icons/Television.svg'
import WashingM from '../assests/Icons/Product blue icons/Washing machine.svg'
import WaterP from '../assests/Icons/Product blue icons/water purifier.svg'
import notification from '../assests/Icons/Other icons/Notification.svg'
import Piechart from '../assests/image/Piechart.png'
import {
    RightOutlined,
    DownOutlined
} from '@ant-design/icons';
import './AgencyDetail.css'
import Service from '../service/Service';
import Constants from '../utils/Constants';

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

class AgencyDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {},
            selectedAgencyId: undefined
        };
        this.service = new Service();
    }

    componentDidMount() {
        this.getAgencyDetails();
        console.log("coming again and again...")
    }

    getAgencyDetails = () => {
        let agencyId = localStorage.getItem("selectedAgencyid");
        console.log("-------------- " + agencyId);
        if (agencyId != undefined) {
            this.setState({ selectedAgencyId: agencyId });
            this.service.retrieveItems(Constants.BASE_URL + Constants.GET_AGENCY_DETAIL + '?agencyId=' + agencyId)
                .then(response => {
                    console.log("-----------------");
                    console.log(response);
                    var stateData = this.state;
                    stateData["data"] = response;
                    this.setState({ stateData });
                });
        }
    }

    deleteAgencyMethod = () => {
        this.service.createItem(Constants.BASE_URL + Constants.POST_DELETE_AGENCY + this.state.selectedAgencyId)
            .then(response => {
                console.log("-----------------");
                console.log(response);
                this.confirm();
            });
    }

    confirm() {
        let self = this;
        Modal.confirm({
            content: 'Are you sure want to remove this agency?',
            okText: 'ok',
            onOk() { self.props.history.goBack() },
        });
    }

    render() {
        const { data } = this.state
        return (
            <div>
                <Sidebar />
                <div className='agency-div'>
                    <div className='add_agency'> {data.companyName} </div>
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
                <div>
                    <div className='link-container'>
                        <Link className='link' to='/agencies'>Agencies</Link>&nbsp;&nbsp;<RightOutlined />&emsp;{data.companyName}
                    </div>
                    <div style={{ marginLeft: '8rem', width: '90%' }} className='card-container'>
                        <div className='first-container'>
                            <div>
                                <img className='logo' src={logo1} />
                            </div>
                            <div className='name'>
                                <b>{data.companyName}</b><br />
                                {'ID: ' + data.ID}
                            </div>
                        </div>
                        <div className='re-button-div'>
                            <div className=''>
                                <Button className='remove-btn' onClick={() => this.deleteAgencyMethod()}>Remove</Button>
                            </div>
                            <div className='edit-btn'>
                                <Button className='edit' type="primary" onClick={() => {
                                    this.props.history.push({
                                        pathname: '/edit_agency',
                                        state: { agencyDetail: this.state.data }
                                    });
                                }}>
                                    Edit profile
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className='rating-container'>
                        <div className='performance'>Performance</div>
                        <div className='piechart-rating-container'>
                            <div className='piechart-div'>
                                <img className='piechart' src={Piechart} />
                            </div>
                            <div className='rating-div'>
                                <div className='total-rating'>
                                    188,195<br /><h6 className='rating-text'>Total number of service</h6>
                                </div>
                                <div className='five-star'>
                                    80,443<br /><h6 className='rating-text'>5 star customer rating</h6>
                                </div>
                                <div className='four-star'>
                                    50,443<br /><h6 className='rating-text'>4star customer rating</h6>
                                </div>
                                <div className='three-star'>
                                    30,443<br /><h6 className='rating-text'>3 star customer rating</h6>
                                </div>
                                <div className='two-star'>
                                    25,443<br /><h6 className='rating-text'>2 star customer rating</h6>
                                </div>
                                <div className='one-star'>
                                    1,443<br /><h6 className='rating-text'>1 star customer rating</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='providing-services-container'>
                        <div className='providing-services'>Providing services</div>
                        <div className='icon-container-1'>
                            {/* {this.state.data.providingService && this.state.data.providingService.length > 0 && this.state.data.providingService.map(item => {
                                switch (item) {
                                    case "Washing_machine":
                                        return ( */}
                                            <div className='icons'>
                                                <img className='providing-services-image' src={WashingM} /><br />
                                                Washing Machine
                                            </div>
                                   
                                            <div className='icons'>
                                                <img className='providing-services-image' src={Fridge} /><br />
                                                    Fridge
                                            </div>
                                      
                                            <div className='icons'>
                                                <img className='providing-services-image' src={MicroO} /><br />
                                                Micro Oven
                                            </div>
                                    
                                            <div className='icons'>
                                                <img className='providing-services-image' src={TV} /><br />
                                                Television
                                            </div>
                                  
                                            <div className='icons'>
                                                <img className='providing-services-image' src={Camera} /><br />
                                                Camera
                                            </div>
                                   
                                            <div className='icons'>
                                                <img className='providing-services-image' src={HomeT} /><br />
                                                Home Theatre
                                            </div>
                                     
                                            <div className='icons'>
                                                <img className='providing-services-image' src={WaterP} /><br />
                                                Water Purifier
                                            </div>
                               
                        </div>
                    </div>
                    <div className='info-card1'>
                        <div className='info'>Information</div>
                        <div className='info-first-container'>
                            <div className='username'>
                                <label className="FormField__Label" htmlFor="name" style={{ color: '#9C9E9F', fontWeight: 'normal' }}>Company name</label>
                                <label className="FormField__Label" htmlFor="name">{data.companyName}</label>
                            </div>
                            <div className='company_name'>
                                <label className="FormField__Label" htmlFor="name" style={{ color: '#9C9E9F', fontWeight: 'normal' }}>User name</label>
                                <label className="FormField__Label" htmlFor="name">{data.userName}</label>
                            </div>
                            <div className='contact_number'>
                                <label className="FormField__Label" htmlFor="name" style={{ color: '#9C9E9F', fontWeight: 'normal' }}>Contact number</label>
                                <label className="FormField__Label" htmlFor="name"> {data.phone} </label>
                            </div>
                            <div className='company-address'>
                                <label className="FormField__Label" htmlFor="name" style={{ color: '#9C9E9F', fontWeight: 'normal' }}>Company address</label>
                                <label className="FormField__Label" htmlFor="name"> {data.address} </label>
                            </div>
                        </div>
                        <div className='info-second-container'>
                            <div className='company-email'>
                                <label className="FormField__Label" htmlFor="name" style={{ color: '#9C9E9F', fontWeight: 'normal' }}>Mail ID</label>
                                <label className="FormField__Label" htmlFor="name"> {data.email} </label>
                            </div>
                        </div>
                    </div>
                    <div className='info-card2'>
                        <div className='service-location'>Service location</div>
                        <div className='service-first-container'>
                            <div className='state'>
                                <label className="FormField__Label" htmlFor="name" style={{ color: '#9C9E9F', fontWeight: 'normal' }}>State</label>
                                <label className="FormField__Label" htmlFor="name"> {data.state} </label>
                            </div>
                            <div className='city'>
                                <label className="FormField__Label" htmlFor="name" style={{ color: '#9C9E9F', fontWeight: 'normal', marginRight: '40rem' }}>City</label>
                                <label className="FormField__Label" htmlFor="name"> {data.city} </label>
                            </div>
                        </div>
                        <div className='info-second-container'>
                            <div className='address'>
                                <label className="FormField__Label" htmlFor="name" style={{ color: '#9C9E9F', fontWeight: 'normal' }}>Locality</label>
                                <div className='locality-container'>
                                    {data.locality && data.locality.length > 0 && data.locality.map((item, index) => {
                                        return (
                                            <div className='ad-locality'>
                                                {item}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AgencyDetail;
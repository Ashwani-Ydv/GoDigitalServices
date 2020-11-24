import React, { Component } from 'react';
import { Card, Button, Dropdown, Menu,Modal,Input} from 'antd'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Close from '../assests/Icons/Other icons/Close.svg'
import line from '../assests/Icons/Other icons/Line.svg'
import lg from '../assests/Icons/Other icons/LG.svg'
import chat from '../assests/Icons/Other icons/Chat.svg'
import notification from '../assests/Icons/Other icons/Notification.svg'
import {
    RightOutlined,
    DownOutlined,
    CloseOutlined
} from '@ant-design/icons';
import './Add_Agency.css'
import './Agencies.css'
import Item from 'antd/lib/list/Item';
import Service from '../service/Service';
import Constants from '../utils/Constants'

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

class Edit_Agency extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            userName:'',
            agencyId:'',
            phone: '',
            address: '',
            state: '',
            city: '',
            locality: [],
            companyName: '',
            newLocality: undefined,
            hasAgreed: true,
            isPasswordShown: true
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateState = this.updateState.bind(this);
        this.handleChangeUsername=this.handleChangeUsername.bind(this);
        this.handleChangeCompanyname=this.handleChangeCompanyname.bind(this);
        this.handleChangePhone=this.handleChangePhone.bind(this);
        this.handleChangeEmail=this.handleChangeEmail.bind(this);
        this.handleChangeAddress=this.handleChangeAddress.bind(this);
        this.handleChangeState=this.handleChangeState.bind(this);
        this.handleChangeCity=this.handleChangeCity.bind(this);
        this.service = new Service();
    }



    componentDidMount() {
        console.log("props checking");
        console.log(this.props.location.state && this.props.location.state.agencyDetail);
        if (this.props.location.state && this.props.location.state.agencyDetail) {
            this.updateState(this.props.location.state.agencyDetail);
        }
    }

    updateState = (agencyDetails) => {
        var stateData = this.state;
        stateData["userName"] = agencyDetails.userName;
        stateData["email"] = agencyDetails.email;
        stateData["phone"] = agencyDetails.phone;
        stateData["address"] = agencyDetails.address;
        stateData["state"] = agencyDetails.state;
        stateData["city"] = agencyDetails.city;
        stateData["companyName"] = agencyDetails.companyName;
        stateData["locality"]=agencyDetails.locality;
        stateData["agencyId"]=agencyDetails.agencyId;
        this.setState({ stateData });
        console.log(agencyDetails);
        console.log(this.state.name);
    }

    updateAgency = () => {
        console.log('============',this.state.userName)
        var payload = {
            "agencyId":this.state.agencyId,
            "userName": this.state.userName,
             "companyName":this.state.companyName,
             "phone": this.state.phone,
             "email": this.state.email,
             "address":this.state.address ,
             "state":this.state.state ,
             "city": this.state.city,
             "locality": this.state.locality
        }

        this.service.putItem(Constants.BASE_URL + Constants.PUT_UPDATE_AGENCY , payload)
        .then(response => {
            console.log(response);
            this.success();
        })
    }

    success = () => {
        let self = this;
        Modal.success({
            title: 'Profile updated successfully',
            content: (
                <div>
                </div>
            ),
            onOk() { self.props.history.go(-2) },
        });
    }

    addLocality = (e) => {
        const newItem = 'Electronic City';
        const { newLocality } = this.state;
        console.log('add')
        var stateData = this.state;
        var temp = this.state.locality;
        if (newLocality != undefined) {
            temp.push(newLocality);
        }
        stateData["locality"] = temp;
        this.setState({ stateData });
    }

    removeLocality = (index) => {
        var stateData = this.state;
        var locality = this.state.locality;
        locality.splice(index, 1);
        stateData["locality"] = locality;
        this.setState({ stateData });
    }

    handleChange(e) {
        var stateData = this.state;
        stateData["newLocality"] = e.target.value;
        this.setState({
            stateData
        });
    }

    handleChangeUsername=(e)=>{
        console.log(e.target.value)
        this.setState({userName:e.target.value})
    }

    handleChangeCompanyname=(e)=>{
        console.log(e.target.value)
        this.setState({companyName:e.target.value})
    }

    handleChangePhone=(e)=>{
        console.log(e.target.value)
        this.setState({phone:e.target.value})
    }

    handleChangeEmail=(e)=>{
        console.log(e.target.value)
        this.setState({email:e.target.value})
    }

    handleChangeAddress=(e)=>{
        console.log(e.target.value)
        this.setState({address:e.target.value})
    }

    handleChangeState=(e)=>{
        console.log(e.target.value)
        this.setState({state:e.target.value})
    }

    handleChangeCity=(e)=>{
        console.log(e.target.value)
        this.setState({city:e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('The form was submitted with the following data:');
        console.log(this.state);
    }

    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };

    cancelMethod = () => {
        let self = this;
        { self.props.history.goBack() }
    }

    render() {
        const { locality } = this.state;
        console.log("+++++",this.state.userName)
        return (
            <div>
                <Sidebar/>
                <div className='agency-div'>
                    <div className='add_agency'>Edit Profile</div>
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
                <div className='btn-link-container'>
                    <div className='link-container-add'>
                        <Link className='link' to='/agencies'>Agencies</Link>&nbsp;&nbsp;<RightOutlined />&emsp;Edit profile
                    </div>
                    <div className='add-cancle-button-div'>
                        <Button className='cancle-button' type="primary" onClick={() => this.cancelMethod()}>Cancel</Button>&nbsp;&nbsp;
                    <Button className='add-button' type="primary" onClick={()=> this.updateAgency()}>Save</Button>
                    </div>
                </div>

                <div className='card1'>
                    <div className='info'>Information</div>
                    <div className='info-first-container'>
                        <div className='username'>
                            <label className="FormField__Label" htmlFor="username">User name</label>
                            <Input type="text" id="username" className="Add-Agency-FormField__Input" placeholder="Enter user name" name="name" value={this.state.userName} onChange={ this.handleChangeUsername.bind(this)} />
                        </div>
                        <div className='company_name'>
                            <label className="FormField__Label" htmlFor="companyname">Company name</label>
                            <Input type="text" id="companyname" className="Add-Agency-FormField__Input" placeholder="Enter company name" name="companyName" value={this.state.companyName} onChange={this.handleChangeCompanyname.bind(this)} />
                        </div>
                        <div className='contact_number'>
                            <label className="FormField__Label" htmlFor="phone">Contact number</label>
                            <Input type="text" id="phone" maxlength="10" className="Add-Agency-FormField__Input" placeholder="Enter contact number" name="phone" value={this.state.phone} onChange={this.handleChangePhone.bind(this)} />
                        </div>
                        <div className='mailid'>
                            <label className="FormField__Label" htmlFor="email">Mail ID</label>
                            <Input type="text" id="email" className="Add-Agency-FormField__Input" placeholder="Enter mail ID" name="email" value={this.state.email} onChange={this.handleChangeEmail.bind(this)} />
                        </div>
                    </div>
                    <div className='info-second-container'>
                        <div className='address'>
                            <label className="FormField__Label" htmlFor="address">Address</label>
                            <Input type="text" id="name" className="Add-Agency-Address-FormField__Input" placeholder="Enter complete address" name="address" value={this.state.address} onChange={this.handleChangeAddress.bind(this)} />
                        </div>
                    </div>
                </div>
                <div className='card2'>
                    <div className='service-location'>Service location</div>
                    <div className='service-first-container'>
                        <div className='state'>
                            <label className="FormField__Label" htmlFor="state">State</label>
                            <Input type="text" id="state" className="Add-Agency-FormField__Input" placeholder="Enter state" name="state" value={this.state.state} onChange={this.handleChangeState.bind(this)} />
                        </div>
                        <div className='city'>
                            <label className="FormField__Label" htmlFor="city">City</label>
                            <Input type="text" id="city" className="Add-Agency-FormField__Input" placeholder="Enter city" name="city" value={this.state.city} onChange={this.handleChangeCity.bind(this)} />
                        </div>
                        <div className='locality'>
                            <label className="FormField__Label" htmlFor="locality">Locality</label>
                            <div className='enter-locality'>
                                <Input type="text" id="locality" className="Add-Agency-FormField__Input" placeholder="Enter locality" name="locality" value={this.state.newLocality} onChange={this.handleChange.bind(this)} />
                               &nbsp;
                               <div className='add-btn'>
                               <Button style={{ height: '1.8rem',width:'3.5rem' }} type="primary"
                                    onClick={this.addLocality}>
                                    Add</Button>
                               </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className='info-second-container'>
                        <div className='address'>
                            <label className="FormField__Label" htmlFor="name">Added Locality </label>
                            <div className='added-locality-container'>
                                {locality && locality.length > 0 && locality.map((item, index) => {
                                    return (
                                        <div className='added-locality'>
                                            &emsp;{item}&emsp;<CloseOutlined onClick={() => this.removeLocality(index)} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Edit_Agency;
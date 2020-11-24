import React, { Component } from 'react';
import { Card, Button, Dropdown, Menu, Modal, Input } from 'antd'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Close from '../assests/Icons/Other icons/Close.svg'
import lg from '../assests/Icons/Other icons/LG.svg'
import line from '../assests/Icons/Other icons/Line.svg'
import chat from '../assests/Icons/Other icons/Chat.svg'
import Verify from '../assests/Icons/Other icons/Verify.svg'
import notification from '../assests/Icons/Other icons/Notification.svg'
import Icon, {
    RightOutlined,
    DownOutlined,
    CloseOutlined
} from '@ant-design/icons';
import './Add_Agency.css'
import './Agencies.css'
import Item from 'antd/lib/list/Item';
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

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};

class Add_Agency extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: undefined,
            name: undefined,
            number: undefined,
            address: undefined,
            state: undefined,
            city: undefined,
            locality: [],
            company_name: undefined,
            newLocality: undefined,
            hasAgreed: true,
            isPasswordShown: true,
            errors: {
                name: '',
                mail: '',
                number: '',
            }
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.service = new Service();
    }

    addLocality = (e) => {
        const newItem = 'Electronic City';
        const { newLocality } = this.state;
        console.log('add')
        var stateData = this.state;
        var temp = this.state.locality;
        if (newLocality != undefined) {
            temp.push(newLocality);
            stateData["newLocality"] = undefined;
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
        stateData[e.target.name] = e.target.value;
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;
        switch (name) {
            case 'name':
                errors.name =
                    value.length < 5
                        ? 'Name must be at least 5 characters long!'
                        : '';
                break;
            case 'mail':
                errors.mail =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'number':
                errors.number =
                    value.length < 10
                        ? 'Number must be 10 digit long!'
                        : '';
                break;
            default:
                break;
        }

        this.setState({ errors, [name]: value });
        this.setState({
            stateData
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (validateForm(this.state.errors)) {
            console.info('Valid Form')
        } else {
            console.error('Invalid Form')
        }
    }
    togglePasswordVisiblity = () => {
        const { isPasswordShown } = this.state;
        this.setState({ isPasswordShown: !isPasswordShown });
    };

    addAgencyMethod = () => {
        var payload = {
            "userName": this.state.name,
            "companyName": this.state.company_name,
            "phone": this.state.number,
            "email": this.state.mail,
            "address": this.state.address,
            "state": this.state.state,
            "city": this.state.city,
            "locality": this.state.locality,
            "userUserId": "6f5ff232-e775-4172-a6be-065144abed5e"
        };

        console.log(payload);

        this.service.createItem(Constants.BASE_URL + Constants.POST_ADD_AGENCY, payload)
            .then(response => {
                console.log("----------------");
                console.log(response);
                this.success();
            })
    }

    success = () => {
        let self = this;
        Modal.success({
            title: 'Agency added successfully',
            content: (
                <div>
                </div>
            ),
            onOk() { self.props.history.goBack() },
        });
    }

    cancelMethod = () => {
        let self = this;
        { self.props.history.goBack() }
    }

    render() {
        const { locality } = this.state;
        const { errors } = this.state;
        return (
            <div>
                <Sidebar />
                <div className='agency-div'>
                    <div className='add_agency'>Add Agency</div>
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
                        <Link className='link' to='/agencies'>Agencies</Link>&nbsp;&nbsp;<RightOutlined />&emsp;Add agency
                    </div>
                    <div className='add-cancle-button-div'>
                        <Button className='cancle-button' onClick={() => this.cancelMethod()}>Cancel</Button>&nbsp;&nbsp;
                    <Button className='add-button' type="primary" onClick={() => this.addAgencyMethod()}>Add</Button>
                    </div>
                </div>

                <div className='card1'>
                    <div className='info'>Information</div>
                    <div className='info-first-container'>
                        <div className='username'>
                            <label className="FormField__Label" htmlFor="name">User name</label>
                            <Input type="text" id="name" className="Add-Agency-FormField__Input" placeholder="Enter user name" name="name" value={this.state.name} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div className='company_name'>
                            <label className="FormField__Label" htmlFor="name">Company name</label>
                            <Input type="text" id="name" className="Add-Agency-FormField__Input" placeholder="Enter company name" name="company_name" value={this.state.company_name} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div className='contact_number'>
                            <label className="FormField__Label" htmlFor="name">Contact number</label>
                            <Input type="text" id="name" maxLength="10" className="Add-Agency-FormField__Input" placeholder="Enter contact number" name="number" value={this.state.number} onChange={this.handleChange.bind(this)} />
                            {errors.number.length > 0 &&
                                <div className='error'>{errors.number}</div>}
                        </div>
                        <div className='mailid'>
                            <label className="FormField__Label" htmlFor="name">Mail ID</label>
                            <Input type="text" id="name" className="Add-Agency-FormField__Input" placeholder="Enter mail ID" name="mail" value={this.state.mail} onChange={this.handleChange.bind(this)} />
                            {errors.mail.length > 0 &&
                                <div className='error'>{errors.mail}</div>}
                        </div>
                    </div>
                    <div className='info-second-container'>
                        <div className='address'>
                            <label className="FormField__Label" htmlFor="name">Address</label>
                            <Input style={{ height: '5rem !important' }} type="text" id="name" className="Add-Agency-Address-FormField__Input" placeholder="Enter complete address" name="address" value={this.state.address} onChange={this.handleChange.bind(this)} />
                        </div>
                    </div>
                </div>
                <div className='card2'>
                    <div className='service-location'>Service location</div>
                    <div className='service-first-container'>
                        <div className='state'>
                            <label className="FormField__Label" htmlFor="name">State</label>
                            <Input type="text" id="name" className="Add-Agency-FormField__Input" placeholder="Enter state" name="state" value={this.state.state} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div className='city'>
                            <label className="FormField__Label" htmlFor="name">City</label>
                            <Input type="text" id="name" className="Add-Agency-FormField__Input" placeholder="Enter city" name="city" value={this.state.city} onChange={this.handleChange.bind(this)} />
                        </div>
                        <div className='locality'>
                            <label className="FormField__Label" htmlFor="name">Locality</label>
                            <div className='enter-locality'>
                                <Input type="text" id="name" className="Add-Agency-FormField__Input" placeholder="Enter locality" name="newLocality" value={this.state.newLocality} onChange={this.handleChange.bind(this)} />
                                &nbsp;
                                <div className='add-btn'>
                                    <Button style={{ height: '1.8rem', alignItems: 'center', background: '#1788F1', color: 'white', borderRadius: '0.2rem' }}
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

export default Add_Agency;
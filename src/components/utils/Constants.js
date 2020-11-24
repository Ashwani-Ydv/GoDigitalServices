import React, { Component } from "react";

class Constants extends Component {
  static BASE_URL = "http://52.66.205.33:3000";
  static GET_ALL_AGENCIES = "/api/getallagencies";
  static GET_SEARCH_AGENCIES = "/api/searchAgency";
  static GET_AGENCY_DETAIL = "/api/getAgency";
  static POST_ADD_AGENCY = "/api/addagency";
  static POST_DELETE_AGENCY = "/api/deleteagency?agencyId=";
  static PUT_UPDATE_AGENCY = "/api/updateagency";
  static POST_LOGIN = "/api/login";
  static POST_CREATE_USER = "/api/users";
  static POST_SEND_OTP = "/api/sendotp";
  static POST_VERIFY_OTP = "/api/verifyotp";
  static POST_RESET_PASSWORD = "/api/resetpassword";
  static GET_ALL_PRODUCT_APPROVE = "/api/getallproductapprove";
}

export default Constants;

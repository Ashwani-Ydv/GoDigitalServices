import React, { Component } from "react";
import axios from "axios";

const staticToken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXNzd29yZ…zMzfQ.pb2waorrOdbnEMRNnMggoasTJbfC7Ys48qIf6-F-bTw";
// const url = "http://52.66.205.33:3000";
class Service extends Component {
  async retrieveItems(url) {
    let self = this;

    console.log("get items", url);
    let authToken = localStorage.getItem("token");
    console.log(authToken);

    return axios
      .get("https://cors-anywhere.herokuapp.com/" + url, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        let json = response.data;
        console.log("success block");
        return json;
      })
      .catch((error) => {
        console.log("service class error - " + error);
        return error;
      });
  }

  async createItem(url, params) {
    let self = this;
    let authToken = localStorage.getItem("token");

    return axios
      .post("https://cors-anywhere.herokuapp.com/" + url, params, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        let json = response.data;

        console.log("success json- " + json);
        return json;
      })
      .catch((error) => {
        console.log("error - " + error);
        return error;
      });
  }

  async putItem(url, params) {
    let self = this;
    let authToken = localStorage.getItem("token");

    return axios
      .put("https://cors-anywhere.herokuapp.com/" + url, params, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        let json = response.data;

        console.log("success json- " + json);
        return json;
      })
      .catch((error) => {
        console.log("error - " + error);
        return error;
      });
  }

  async deleteItem(url, params) {
    let self = this;
    let authToken = localStorage.getItem("token");

    return axios
      .post("https://cors-anywhere.herokuapp.com/" + url, params, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        let json = response.data;

        console.log("success json- " + json);
        return json;
      })
      .catch((error) => {
        console.log("error - " + error);
        return error;
      });
  }

  async loginUser(url, params) {
    let self = this;
    let authToken = localStorage.getItem("token");
    // let url1 = "http://52.66.205.33:3000";
    return axios
      .post("https://cors-anywhere.herokuapp.com/" + url, params, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        let json = response.data;

        console.log("success json- " + json);
        console.log("url", url);
        return json;
      })
      .catch((error) => {
        console.log("error - " + error);
        console.log("url", url);
        return error;
      });
  }
  async signupUser(url, params) {
    let self = this;
    let authToken = localStorage.getItem("token");

    return axios
      .post("https://cors-anywhere.herokuapp.com/" + url, params, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        let json = response.data;

        console.log("success json- " + json);
        return json;
      })
      .catch((error) => {
        console.log("error - " + error);
        return error;
      });
  }

  async sendOtp(url, params) {
    let self = this;
    let authToken = localStorage.getItem("token");

    return axios
      .post("https://cors-anywhere.herokuapp.com/" + url, params, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        let json = response.data;

        console.log("success json- " + json);
        return json;
      })
      .catch((error) => {
        console.log("error - " + error);
        return error;
      });
  }

  async verifyOtp(url, params) {
    let self = this;
    let authToken = localStorage.getItem("token");

    return axios
      .post("https://cors-anywhere.herokuapp.com/" + url, params, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        let json = response.data;

        console.log("success json- " + json);
        return json;
      })
      .catch((error) => {
        console.log("error - " + error);
        return error;
      });
  }

  async resetPassword(url, params) {
    let self = this;
    let authToken = localStorage.getItem("token");

    return axios
      .post("https://cors-anywhere.herokuapp.com/" + url, params, {
        headers: {
          Authorization: "Bearer " + authToken,
        },
      })
      .then((response) => {
        let json = response.data;

        console.log("success json- " + json);
        return json;
      })
      .catch((error) => {
        console.log("error - " + error);
        return error;
      });
  }
}

export default Service;

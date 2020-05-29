import axios from 'axios';


export default {
  Events: function() {
    return axios.get('/api/event');
  },
  ChartById: function(id) {
    return axios.get(`/api/chart/${id}`);
  },
  AllCharts: function() {
    return axios.get("/api/chart/getall");
  },
  createChart:function(req){
    return axios.post("/api/chart/create",req);
  },
  AllUsers: function() {
    return axios.get("/api/user/getall");
  },
  CreateNewUser:function(req){
    return axios.post("/api/user/register",req);
  },
  AllCommunity: function() {
    return axios.get("/api/community");
  },
};
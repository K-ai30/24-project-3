import axios from 'axios';


export default {
  Events: function() {
    return axios.get('/api/community');
  }
};
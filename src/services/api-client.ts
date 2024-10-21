import axios from "axios"

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params:{
    key:'792290ff107149988724f6bb84b01de1'
  }
})
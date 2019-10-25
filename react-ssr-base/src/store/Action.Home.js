import axios from 'axios'
import { API } from '../api/API'

export const get_home_list = () => {
  return ()=> {
    axios.get(
      API.GET_HOME_LIST,
    )
  }
}

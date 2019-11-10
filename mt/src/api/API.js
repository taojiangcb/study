
import asiox from 'axios'

let axiosInstance = asiox.create({
  baseURL: '../static/json',
})

export { axiosInstance };

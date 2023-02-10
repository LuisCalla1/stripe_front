import axios from 'axios'
const axiosIns = axios.create()

axiosIns.interceptors.request.use(
  (config) => {
    // You can add your headers here
    config.withCredentials = true

    return { ...config }
  },
  (error) => Promise.reject(error)
) 
axiosIns.interceptors.response.use(
  (response) => response,
  async (error) => {
    return Promise.reject(error)
  }
)

const {
  get,
  post,
  put,
  patch,
  delete: destroy
} = axiosIns

export {
  get,
  post,
  put,
  patch,
  destroy
}

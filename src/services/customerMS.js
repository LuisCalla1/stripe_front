import { get, post, put, patch, destroy } from '@/services/base.js'
//import redirectToConnectPage from '@/helpers/redirectToConnectPage.js'

//const SERVICE_PREFIX = 'ms-companies'
const API_BASE_URL = `${process.env.VUE_APP_API_BASE_URL}`
//const CONNECT_BASE_URL = process.env.VUE_APP_CONNECT_BASE_URL || null

const customerMS = {
  create: async ({ data }) => {
    try {
      const response = await post(`${API_BASE_URL}/login`, data)
      
      console.log("🚀 ~ file: customer.js:13 ~ create: ~ response", response)
      const company = response.data.data
      
      return company
    } catch (error) {
      throw new Error(error)
    }
  },
  updateCompany: async ({ companyId, data }) => {
    try {
      const response = await put(`${API_BASE_URL}/admin/v1/companies/${companyId}`, data)
      const company = response.data.data
      return company
    } catch (error) {
      throw new Error(error)
    }
  },
  getCompany: async (companyId) => {
    try {
      const response = await get(`${API_BASE_URL}/admin/v1/companies/${companyId}`)
      const company = response.data.data
      return company
    } catch (error) {
      throw new Error(error)
    }
  },
  deleteCompany: async (companyId) => {
    try {
      await destroy(`${API_BASE_URL}/admin/v1/companies/${companyId}`)
      return
    } catch (error) {
      throw new Error(error)
    }
  },
  getCompanyStores: async (companyId) => {
    try {
      const response = await get(`${API_BASE_URL}/admin/v1/companies/${companyId}/stores`)
      const stores = response.data.data
      return stores
    } catch (error) {
      throw new Error(error)
    }
  },
  createCompanyStore: async ({ companyId, data }) => {
    try {
      const response = await post(`${API_BASE_URL}/admin/v1/companies/${companyId}/stores`, data)
      const store = response.data.data
      return store
    } catch (error) {
      throw new Error(error)
    }
  },
  // me: async () => {
  //   try {
  //     const response = await get(`${API_BASE_URL}/auth/v1/me`)
  //     const company = response.data.data
  //     return company
  //   } catch (error) {
  //     if (CONNECT_BASE_URL) {
  //       redirectToConnectPage(CONNECT_BASE_URL)
  //     }
  //     const message = error?.response?.data?.message || error?.message
  //     throw new Error(message)
  //   }
  // },
  updateStore: async ({ storeId, data }) => {
    try {
      const response = await put(`${API_BASE_URL}/admin/v1/stores/${storeId}`, data)
      const store = response.data.data
      return store
    } catch (error) {
      throw new Error(error)
    }
  },
  patchStore: async ({ storeId, data }) => {
    try {
      const response = await patch(`${API_BASE_URL}/admin/v1/stores/${storeId}`, data)
      const store = response.data.data
      return store
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default customerMS

import {
  apiRequest
} from '@/utils/wxRequest';

// const apiMall = 'https://sujiefs.com/'
const apiXQJ = 'https://api.xiaoquanjia.com'
// const apiXQJ = 'https://www.baidu.com'

// const apiXQJ = 'http://localhost:4200'

const wxJsCode2Token = (params) => apiRequest(params, apiXQJ + "/api/public/wx_xcx_login");

const getHomeGoods = (params) => apiRequest(params, apiXQJ + "/api/public/goods/xcx_home");
const getGoodDetail = (params) => apiRequest(params, apiXQJ + "/api/public/good");

const getCategories = (params) => apiRequest(params, apiXQJ + '/api/public/categories');
const getUserAddress = (params) => apiRequest(params, apiXQJ + '/api/protect/addresses');
const getUserDefaultAddress = (params) => apiRequest(params, apiXQJ + '/api/protect/address/default');
const getAddressById = (params) => apiRequest(params, apiXQJ + '/api/protect/address');
const addAddress = (params) => apiRequest(params, apiXQJ + '/api/protect/address');
const deleteAddress = (params) => apiRequest(params, apiXQJ + '/api/protect/address');
const updateAddress = (params) => apiRequest(params, apiXQJ + '/api/protect/address');

const getUserShopcarts = (params) => apiRequest(params, apiXQJ + '/api/protect/shopcarts');
const getShopcartsByIds = (params) => apiRequest(params, apiXQJ + '/api/protect/shopcarts/ids');
const addToUserShopcarts = (params) => apiRequest(params, apiXQJ + '/api/protect/shopcart');
const updateUserShopcart = (params) => apiRequest(params, apiXQJ + '/api/protect/shopcart');
const deleteShopcart = (params) => apiRequest(params, apiXQJ + '/api/protect/shopcart');

const getPayParams = (params) => apiRequest(params, apiXQJ + '/api/protect/wechat_pay_params');
const createOrderFromShopcart = (params) => apiRequest(params, apiXQJ + '/api/protect/order/from_shopcart');
const getAllOrders = (params) => apiRequest(params, apiXQJ + '/api/protect/orders/all');
const getUnpaidOrders = (params) => apiRequest(params, apiXQJ + '/api/protect/orders/unpaid');
const getPaidOrders = (params) => apiRequest(params, apiXQJ + '/api/protect/orders/paid');
const getCompleteOrders = (params) => apiRequest(params, apiXQJ + '/api/protect/orders/complete');
const getOrderDetail = (params) => apiRequest(params, apiXQJ + '/api/protect/order/detail');

export default {
  getOrderDetail,
  getAllOrders,
  getUnpaidOrders,
  getPaidOrders,
  getCompleteOrders,
  createOrderFromShopcart,
  getPayParams,
  getHomeGoods,
  getGoodDetail,
  getUserShopcarts,
  getUserDefaultAddress,
  getShopcartsByIds,
  updateUserShopcart,
  addToUserShopcarts,
  deleteShopcart,
  addAddress,
  getUserAddress,
  deleteAddress,
  getAddressById,
  updateAddress,
  getCategories,
  wxJsCode2Token,
}

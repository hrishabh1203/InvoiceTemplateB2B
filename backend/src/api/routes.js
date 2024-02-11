/* eslint-env node */
/**
 * Summary: Initialize routes for API application
 */
const CONTROLLERS = require("./controllers");

const BASE_URL = "/api/v1";

module.exports = function routes(router) {
  router.post(`${BASE_URL}/login`,CONTROLLERS.login)
  router.post(`${BASE_URL}/register`,CONTROLLERS.register);
  router.post(`${BASE_URL}/add_client`,CONTROLLERS.add_client);
  router.get(`${BASE_URL}/client`,CONTROLLERS.client);
  router.get(`${BASE_URL}/invoice`,CONTROLLERS.invoice);
  router.post(`${BASE_URL}/create_invoice`,CONTROLLERS.cre_invoice);
  router.post(`${BASE_URL}/create_credit`,CONTROLLERS.create_credit);
  router.get(`${BASE_URL}/details`,CONTROLLERS.details);
  router.get(`${BASE_URL}/credit`,CONTROLLERS.credit);
  router.get(`${BASE_URL}/client_show`,CONTROLLERS.client_show);
  router.post(`${BASE_URL}/file_path`,CONTROLLERS.file_path);
  router.get(`${BASE_URL}/userdata`,CONTROLLERS.userdata);








 













  
};
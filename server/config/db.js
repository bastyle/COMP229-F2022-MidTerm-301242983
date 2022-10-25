/**
 * @file db.js
 * @author Bastian Bastias Sanchez. 
 * @studentID 301242983 
 * @date October 25th 2022.
 * @since  1.1.0
  */

require('dotenv').config();
const URL_DB = process.env.URL_DB;

module.exports = {
  "URI": URL_DB
};

#!/usr/bin/env node
const axios = require('axios');
const { getCode, getName } = require('country-list');
const args = process.argv.slice(2)

let countrycode = getCode(args[0])
let year = args[1]
console.log(countrycode)
async function getUser() {
    try {
      const response = await axios.get(`https://date.nager.at/api/v3/publicholidays/${year}/${countrycode}`);
      let datas = response.data
     datas.forEach(country => { 
          
     
      console.log(country.date +"///" + country.name + "///" + country.localName);
    });
    } catch (error) {
      console.error(error);
    }
  }

  getUser()
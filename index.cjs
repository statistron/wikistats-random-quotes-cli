'use strict';



const axios = require('axios');
const _ = require('lodash');


const baseUrl = 'https://api.statistron.xyz';

module.exports = (opts, callback) => {
    return new Promise((resolve, reject) => {
        opts = opts || '';

        let url = '/v1/wikistats';
        if (!_.isUndefined(opts.flags.number) && opts.flags.number != '') {
            url += '?q=random&limit=' + opts.flags.number;
console.log(url)
        }
        else {url += '?q=random&limit=5'}
        
        axios.get(baseUrl + url)
            .then(response => {
                if (response.data && _.isArray(response.data)) {
                    let result = response.data;
                  //  console.log (result)
                    return resolve(result);
                    
                }

                return resolve(response.data);
            })
            .catch(err => reject(err));
    });
};



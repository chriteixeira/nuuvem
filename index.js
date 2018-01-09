'use strict';

const cheerio = require('cheerio');
const request = require('request-promise');

const BASE_URL = 'https://www.nuuvem.com';
const SEARCH_PATH = '/catalog/search/';


exports.checkPrice = (searchQuery, firstOnly) => {
    var search = searchQuery;
    search = encodeURIComponent(searchQuery.trim());

    return new Promise((resolve, reject) => {
        request(BASE_URL + SEARCH_PATH + search).then((htmlString) => {
            var $ = cheerio.load(htmlString);

            var selector = $('.product-card--grid');         
            if(firstOnly){
                selector = selector.first();
            }
            
            var result = [];
            selector.each((i, item) => {
                var $item = $(item);
                var fullPrice = $item.find('.product-price--val').text().trim();
                var resultItem = {
                    title: $item.find('.product-title').text().trim(),
                    currency: fullPrice.substring(0, 2),
                    price: parseFloat(fullPrice.substring(2).replace(',', '.')),
                    link: $item.find('.product-card--wrapper').attr('href').trim()
                };
                
                result.push(resultItem);
            });

            resolve(result);
        }).catch(function (err) {
            reject(err);
        });
    });
};
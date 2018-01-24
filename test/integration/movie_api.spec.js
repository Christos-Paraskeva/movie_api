"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai = require("chai");
const chaiAsPromised = require("chai-as-promised");
const request = require("request-promise");
const config_1 = require("../../src/main/resource/config");
chai.use(chaiAsPromised);
const expect = chai.expect;
describe('call to endpoint', () => {
    it('by domain', () => {
        const options = {
            method: 'GET',
            url: config_1.config.testApiGatewayConfig.searchMovieEndpoint + config_1.config.testApiGatewayConfig.xApiToken + '&query=it(2017)',
            headers: {
                'content-type': 'application/json',
            },
            json: true,
            resolveWithFullResponse: true
        };
        return request(options)
            .then((response) => {
            let movieInformation = [];
            movieInformation.push(response.body.results[0].title, response.body.results[0].vote_average, response.body.results[0].overview);
            console.log(movieInformation[0]);
            console.log(movieInformation[1]);
            console.log(movieInformation[2]);
        });
    });
});

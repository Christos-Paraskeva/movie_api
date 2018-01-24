import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
import Bluebird = require('bluebird');
import Knex = require("knex");
import * as request from 'request-promise';
import {config} from '../../src/main/resource/config';
// import ColumnNameQueryBuilder = Knex.ColumnNameQueryBuilder;

chai.use(chaiAsPromised);
const expect = chai.expect;

describe('call to endpoint', () => {
    it('by domain', () => {
        const options = {
            method: 'GET',
            url: config.testApiGatewayConfig.searchMovieEndpoint + config.testApiGatewayConfig.xApiToken + '&query=it(2017)',
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
                // console.dir(response.body.results[0].vote_average, {depth:null});
                // return expect(response.body[0].price).to.eql({ original: 95, was: 95, current: 95 });
            });
    });
});

// config.testApiGatewayConfig.xApiToken
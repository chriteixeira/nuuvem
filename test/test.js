'use strict';

const chai = require('chai');
const expect = chai.expect;

const nuuvem = require('../index');

describe('Nuuvem.checkPrice', () => {

    it('should return an empty array to a invalid string', () => {
        nuuvem.checkPrice('ttttteeeeeesssssttttttaaaaaaaaaabbbbbccccc1111222').then((result) => {
            expect(result).to.be.empty;
        }).catch((err) => {
            throw new Error(err);
        });
    });

    it('should return an empty array to a invalid string with single result', () => {
        nuuvem.checkPrice('ttttteeeeeesssssttttttaaaaaaaaaabbbbbccccc1111222', true).then((result) => {
            expect(result).to.be.empty;
        }).catch((err) => {
            throw new Error(err);
        });

    });


    it('should return an array with 10 or more positions for the search "civilization"', () => {
        nuuvem.checkPrice('civilization').then((result) => {
            expect(result.length).to.be.greaterThan(10);
        }).catch((err) => {
            throw new Error(err);
        });
    });

    it('should return an array with 1 or more positions for the search "civilization" with single result', () => {
        nuuvem.checkPrice('civilization', true).then((result) => {
            expect(result.length).to.be.equal(1);
        }).catch((err) => {
            throw new Error(err);
        });
    });

});
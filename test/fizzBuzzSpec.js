/**
 * Created by andreschneider on 26.02.14.
 */

var expect = require('expect.js');

describe('FizzBuzz', function() {

    var sut;

    beforeEach(function() {
        sut = require('../lib/fizzBuzz');
    });

    afterEach(function(){
        sut = null;
    });

    it('should be defined', function () {
        expect(sut).to.be.ok();
    });

    it('should be an object', function () {
        expect(sut).to.be.an('object');
    });

    describe('when calling fizzBuzz', function() {
        it('should return 1 for argument 1', function() {
            var result = sut.fizzBuzz(1);
            expect(result).to.equal(1);
        });

        it('should return fizz for argument 3', function() {
            var result = sut.fizzBuzz(3);
            expect(result).to.equal('fizz');
        });

        it('should return buzz for argument 5', function() {
            var result = sut.fizzBuzz(5);
            expect(result).to.equal('buzz');
        });

        it('should return fizzbuzz for argument 15', function() {
            var result = sut.fizzBuzz(15);
            expect(result).to.equal('fizzbuzz');
        });

        it('should return 4 for argument 4', function() {
            var result = sut.fizzBuzz(4);
            expect(result).to.equal(4);
        });

        it('should return fizz for argument 6', function() {
            var result = sut.fizzBuzz(6);
            expect(result).to.equal('fizz');
        });

        it('should return buzz for argument 10', function() {
            var result = sut.fizzBuzz(10);
            expect(result).to.equal('buzz');
        });

        it('should return fizzbuzz for argument 30', function() {
            var result = sut.fizzBuzz(30);
            expect(result).to.equal('fizzbuzz');
        });
    });
});
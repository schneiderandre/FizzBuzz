/**
 * Created by andreschneider on 26.02.14.
 */

var FizzBuzz = {
    fizzBuzz: function(number) {
        if(number % 3 === 0 && number % 5 == 0) {
            return 'fizzbuzz';
        }
        if(number % 3 === 0) {
            return 'fizz';
        }
        if(number % 5 === 0) {
            return 'buzz';
        }
        return number;
    }
};
module.exports = FizzBuzz;
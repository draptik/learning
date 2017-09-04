import {expect} from 'chai'
import {FizzBuzzGenerator} from '../src/fizz-buzz-generator'

describe('Fizz-Buzz Generator', () => {
    let generator: FizzBuzzGenerator

    beforeEach(() => generator = new FizzBuzzGenerator())

    it('should return normal numbers as is', () => {
        expect(generator.generate(1)).to.equal('1')
        expect(generator.generate(2)).to.equal('2')
    })

    it('should return Fizz for numbers divisible by 3', () => {
        expect(generator.generate(3)).to.equal('Fizz')
        expect(generator.generate(6)).to.equal('Fizz')
    })

    it('should return Buzz for numbers divisible by 5', () => {
        expect(generator.generate(5)).to.equal('Buzz')
        expect(generator.generate(10)).to.equal('Buzz')
    })
})
import {expect} from 'chai'
import {Direction, MarsRover} from './mars-rover'

describe('Mars Rover', () => {
    describe('You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing',
        () => {
            it('should set starting location', () => {
                const rover = new MarsRover([12, 12])
                expect(rover.location).to.deep.equal([12, 12])
            })

            it('should use default location when no location was given', () => {
                const rover = new MarsRover()
                expect(rover.location).to.deep.equal([0, 0])
            })

            it('should use the given direction', () => {
                const rover = new MarsRover([3, 3], Direction.SOUTH)
                expect(rover.direction).to.equal(Direction.SOUTH)
            })

            it('should use a default direction when no direction was given', () => {
                const rover = new MarsRover()
                expect(rover.direction).to.equal(Direction.NORTH)
            })
        })

    describe('The rover receives a character array of commands', () => {
        it('should set commands array', () => {
            const rover = new MarsRover([12, 21], Direction.NORTH)
            rover.commands = ['do', 'this', 'and', 'then', 'do', 'that']
            expect(rover.commands).to.deep.equal(['do', 'this', 'and', 'then', 'do', 'that'])
        })
    })

    describe('Implement commands that move the rover forward/backward (f,b)', () => {
        it('should reduce Y when moving north', () => {
            const rover = new MarsRover([12, 21], Direction.NORTH)
            rover.commands = ['f', 'f']
            expect(rover.location).to.deep.equal([12, 19])
        })

        it('should increase Y when moving south', () => {
            const rover = new MarsRover([12, 21], Direction.SOUTH)
            rover.commands = ['f']
            expect(rover.location).to.deep.equal([12, 22])
        })

        it('should reduce X when moving west', () => {
            const rover = new MarsRover([12, 21], Direction.WEST)
            rover.commands = ['f', 'f', 'f']
            expect(rover.location).to.deep.equal([9, 21])
        })

        it('should increase X when moving east', () => {
            const rover = new MarsRover([12, 21], Direction.EAST)
            rover.commands = ['f']
            expect(rover.location).to.deep.equal([13, 21])
        })

        it('should increase Y when moving backwards facing north', () => {
            const rover = new MarsRover([12, 21], Direction.NORTH)
            rover.commands = ['b']
            expect(rover.location).to.deep.equal([12, 22])
        })

        it('should reduce Y when moving backwards facing south', () => {
            const rover = new MarsRover([12, 21], Direction.SOUTH)
            rover.commands = ['b']
            expect(rover.location).to.deep.equal([12, 20])
        })

        it('should increase X when moving backwards facing west', () => {
            const rover = new MarsRover([12, 21], Direction.WEST)
            rover.commands = ['b']
            expect(rover.location).to.deep.equal([13, 21])
        })

        it('should reduce X when moving backwards facing east', () => {
            const rover = new MarsRover([12, 21], Direction.EAST)
            rover.commands = ['b']
            expect(rover.location).to.deep.equal([11, 21])
        })
    })
})

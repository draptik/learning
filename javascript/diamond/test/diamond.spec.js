import {expect} from 'chai'
import {Diamond} from '../src/diamond'
import {DiamondUtil} from '../src/diamond-util'

describe('Diamond kata', () => {
    describe('Utility tests', () => {
        it('should mirror the upper half', () => {
            expect(DiamondUtil.mirror([
                '__A__',
                '_B_B_',
                'C___C']
            )).to.deep.equal([
                '__A__',
                '_B_B_',
                'C___C',
                '_B_B_',
                '__A__',
            ])
        })

        it('should mirror the given entries', () => {
            expect(DiamondUtil.mirror(['A', 'B', 'C'])).to.deep.equal(['A', 'B', 'C', 'B', 'A'])
            expect(DiamondUtil.mirror(['A', 'B'])).to.deep.equal(['A', 'B', 'A'])
        })

        it('should mirror the given line', () => {
            expect(DiamondUtil.mirrorLine('__A')).to.equal('__A__')
            expect(DiamondUtil.mirrorLine('ES6')).to.equal('ES6SE')
        })

        it('should generate the expected amount of dashes', () => {
            expect(DiamondUtil.dashes(2)).to.equal('__')
            expect(DiamondUtil.dashes(4)).to.equal('____')
        })

        it('should calculate the distance from A', () => {
            expect(DiamondUtil.distanceFromA('A')).to.equal(0)
            expect(DiamondUtil.distanceFromA('C')).to.equal(2)
            expect(DiamondUtil.distanceFromA('D')).to.equal(3)
            expect(DiamondUtil.distanceFromA('Z')).to.equal(25)
        })

        it('should generate a sequence of characters', () => {
            expect(DiamondUtil.characterSequence(3)).to.deep.equal(['A', 'B', 'C'])
            expect(DiamondUtil.characterSequence(1)).to.deep.equal(['A'])
        })
    })

    describe('Diamond tests', () => {
        it('should fail for invalid input', () => {
            expect(() => Diamond.forCharacter('0')).to.throw('input must be between A and Z')
            expect(() => Diamond.forCharacter('a')).to.throw('input must be between A and Z')
        })
        
        it('should generate a diamond for A', () => {
            expect(Diamond.forCharacter('A')).to.deep.equal([
                'A'
            ])
        })

        it('should generate a diamond for B', () => {
            expect(Diamond.forCharacter('B')).to.deep.equal([
                '_A_',
                'B_B',
                '_A_',
            ])
        })

        it('should generate a diamond for C', () => {
            expect(Diamond.forCharacter('C')).to.deep.equal([
                '__A__',
                '_B_B_',
                'C___C',
                '_B_B_',
                '__A__',
            ])
        })

        it('should generate a full diamond', () => {
            expect(Diamond.forCharacter()).to.deep.equal([
                '_________________________A_________________________',
                '________________________B_B________________________',
                '_______________________C___C_______________________',
                '______________________D_____D______________________',
                '_____________________E_______E_____________________',
                '____________________F_________F____________________',
                '___________________G___________G___________________',
                '__________________H_____________H__________________',
                '_________________I_______________I_________________',
                '________________J_________________J________________',
                '_______________K___________________K_______________',
                '______________L_____________________L______________',
                '_____________M_______________________M_____________',
                '____________N_________________________N____________',
                '___________O___________________________O___________',
                '__________P_____________________________P__________',
                '_________Q_______________________________Q_________',
                '________R_________________________________R________',
                '_______S___________________________________S_______',
                '______T_____________________________________T______',
                '_____U_______________________________________U_____',
                '____V_________________________________________V____',
                '___W___________________________________________W___',
                '__X_____________________________________________X__',
                '_Y_______________________________________________Y_',
                'Z_________________________________________________Z',
                '_Y_______________________________________________Y_',
                '__X_____________________________________________X__',
                '___W___________________________________________W___',
                '____V_________________________________________V____',
                '_____U_______________________________________U_____',
                '______T_____________________________________T______',
                '_______S___________________________________S_______',
                '________R_________________________________R________',
                '_________Q_______________________________Q_________',
                '__________P_____________________________P__________',
                '___________O___________________________O___________',
                '____________N_________________________N____________',
                '_____________M_______________________M_____________',
                '______________L_____________________L______________',
                '_______________K___________________K_______________',
                '________________J_________________J________________',
                '_________________I_______________I_________________',
                '__________________H_____________H__________________',
                '___________________G___________G___________________',
                '____________________F_________F____________________',
                '_____________________E_______E_____________________',
                '______________________D_____D______________________',
                '_______________________C___C_______________________',
                '________________________B_B________________________',
                '_________________________A_________________________',
            ])
        })
    })
})
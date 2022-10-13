import sig from '../page/Siging'
import message from '../page/alertError'

describe('cadastro', function () {

    beforeEach(function () {
        cy.fixture('mass').then(function (m) {
            this.mass = m
        })
    })

    it.skip('Seja um delivery', function () {
        const expectmassage =
            'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        sig.go()
        sig.fillForm(this.mass.signup)
        sig.submit()
        sig.expectMessage(expectmassage)
    })

    it.skip('Email invalido', function () {
        sig.go()
        sig.fillForm(this.mass.email_inv)
        sig.submit()
        sig.alertError('Oops! Email com formato inválido.')

    })
    it.skip('CPF inválido', function () {
        sig.go()
        sig.fillForm(this.mass.cpf_inv)
        sig.submit()
        sig.alertError('Oops! CPF inválido')
    })
    context('Requered fields', function () {
        before(function () {
            sig.go()
            sig.submit()
        })
    
        message.forEach(function (msg) {
            it('Fields Required', function () {
                sig.alertError(msg.output)
            })
        })
    })
})
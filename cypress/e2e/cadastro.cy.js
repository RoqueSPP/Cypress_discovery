import sig from '../page/Siging'

describe('cadastro', function () {

    beforeEach(function () {
        cy.fixture('mass').then(function (m) {
            this.mass = m
        })
    })

    it('Seja um delivery', function () {
        const expectmassage =
            'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        sig.go()
        sig.fillForm(this.mass.signup)
        sig.submit()
        sig.expectMessage(expectmassage)
    })

    it('Email invalido', function () {
        sig.go()
        sig.fillForm(this.mass.email_inv)
        sig.submit()
        sig.alertError('Oops! Email com formato inválido.')

    })
    it('CPF inválido', function () {
        sig.go()
        sig.fillForm(this.mass.cpf_inv)
        sig.submit()
        sig.alertError('Oops! CPF inválido')
    })
})

import sinup from '../pages/SignupPages'
import SignupFactory from '../factories/SignupFactory'

describe('Test Signup', () => {

    // beforeEach(function() {
    //     cy.fixture('deliver').then(function(d) {
    //         this.deliver = d
    //     })        
    // })

    it('test app', function () {
        var deliver = SignupFactory.deliver();
        sinup.go()
        sinup.fillForm(deliver)
        sinup.submit()
        var expecttext = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        sinup.alertmensage(expecttext)

    })
    it('Invalid Document', function () {
        var deliver = SignupFactory.deliver();
        deliver.cpf = '27738e7ye6e'
        sinup.go()
        sinup.fillForm(deliver)
        sinup.submit()

        cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
    })
    it('Invalid Email', function () {
        var deliver = SignupFactory.deliver();

        deliver.email = 'test..example.com';
        sinup.go()
        sinup.fillForm(deliver)
        sinup.submit()

        sinup.alertmensage('Oops! Email com formato inválido.')
    })
    context('Require Fields', function () {
        const messages = [
            { field: 'name', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'necessário informar o email' },
            { field: 'postalcode', output: 'É necessário informar o CEP' },
            { field: 'number', output: 'É necessário informar o número do endereço' },
            { field: 'delivery_method', output: 'Selecione o método de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }

        ]
        before(function () {
            sinup.go()
            sinup.submit()
        })
        messages.forEach(function (msg) {
            it(`${msg.field } is require`, function () {
                sinup.alertmensage(msg.output)
            })

        })
    })
    // it('Required Fields', function () {
    //     sinup.go()
    //     sinup.submit()
    //     sinup.alertmensage('É necessário informar o nome')
    //     sinup.alertmensage('É necessário informar o CPF')
    //     sinup.alertmensage('necessário informar o e-mail')
    //     sinup.alertmensage('É necessário informar o CEP')
    //     sinup.alertmensage('É necessário informar o número do endereço')
    //     sinup.alertmensage('Selecione o método de entrega')
    //     sinup.alertmensage('Adicione uma foto da sua CNH')



    // })
})

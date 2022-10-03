

describe('home page', function () {
    it('deve acessar a pagina bugger-aets', function () {
        cy.visit('https://buger-eats.vercel.app')
        cy.get('#root #page-home main h1').should('have.text','Seja um parceiro entregador pela Buger Eats' )
    })
    
})
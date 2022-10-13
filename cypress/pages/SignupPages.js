

class SignupPages {
    
    go() {
        cy.visit('https://buger-eats-qa.vercel.app')
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
        cy.get('a[href="/deliver"]').should('be.visible').click()
        
    }
   
   
    fillForm(deliver) {
      
     
        cy.xpath('(//input)[1]').should('be.visible').type(deliver.name)
        cy.get('input[name="cpf"]').should('be.visible').type(deliver.cpf)
        cy.get('input[name="email"]').should('be.visible').type(deliver.email)
        cy.get('input[name="whatsapp"]').should('be.visible').type(deliver.whatsapp)
        cy.get('input[name="postalcode"]').should('be.visible').type(deliver.address.postalcode)
        cy.get('input[name="address-number"]').should('be.visible').type(deliver.address.number)
        cy.get('input[name="address-details"]').should('be.visible').type(deliver.address.details)
        cy.get('input[type="button"][value="Buscar CEP"]').should('be.visible').click()
        cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)
        cy.contains('.delivery-method li', deliver.delivery_method).should('be.visible').click()
        cy.get('input[accept^="image"]').attachFile('/imagens/' + deliver.cnh)
     
    }
    
    submit() {
        cy.get('button[type="submit"]').should('be.visible').click()
    }
    alertmensage(expecttext) {
        cy.get('.alert-error').should('have.text', expecttext)
        cy.contains('.alert-error', expecttext).should('be.visible')
    
    }
}
    export default new SignupPages;




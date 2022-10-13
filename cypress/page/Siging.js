


class Siging {

    go() {
        cy.visit('https://buger-eats-qa.vercel.app')
        cy.get('#page-home main a').should('be.visible').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForm(delivery) {
        cy.get('input[name="fullName"]').should('be.visible').type(delivery.name)
        cy.get('input[name="cpf"]').should('be.visible').type(delivery.cpf)
        cy.get('input[name="email"]').should('be.visible').type(delivery.email)
        cy.get('input[name="whatsapp"]').should('be.visible').type(delivery.wat)
        cy.get('input[name="postalcode"][placeholder="CEP"]').should('be.visible').type(delivery.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').should('be.visible').click()
        cy.get('input[name="address-number"]').should('be.visible').type(delivery.address.number)
        cy.get('input[name="address-details"]').should('be.visible').type(delivery.address.details)
        cy.get('input[name="address"]').should('have.value', delivery.address.street)
        cy.get('input[name="district"]').should('have.value', delivery.address.district)
        cy.get('input[name="city-uf"]').should('have.value', delivery.address.city_state)

        cy.get('.delivery-method li [alt="Moto"]').should('be.visible').click()
        cy.get('.dropzone input[type="file"]').attachFile(delivery.doc)
    }
    submit() {
        cy.get('form button[type="submit"]').should('be.visible').click()
    }
    expectMessage(expectmensage) {
        cy.get('.swal2-container .swal2-html-container').should('have.text',expectmensage)

    }
    alertError(expectText) {
        //cy.get('.alert-error').should('have.text',expectText)
        cy.contains('.alert-error', expectText).should('be.visible')

    }
}
export default new Siging;
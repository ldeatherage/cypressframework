

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailPositiveEnterPasswordPos", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Mackenzie")

cy.get("INPUT[id='lastname']").type("Boyer")

cy.get("INPUT[id='email_address']").type("huw.price@outlook.com")

cy.get("INPUT[id='password']").type("ctkQ6JDHsh")

cy.get("INPUT[name='password_confirmation']").type("ctkQ6JDHsh")

cy.get("BUTTON[title='Create\\ an\\ Account']").click()

   })
})

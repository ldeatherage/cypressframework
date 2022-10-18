

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailPositiveEnterPasswordPos", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Muriel")

cy.get("INPUT[id='lastname']").type("Huel")

cy.get("INPUT[id='email_address']").type("huw.price@outlook.com")

cy.get("INPUT[id='password']").type("Y5ALbK91Mp")

cy.get("INPUT[name='password_confirmation']").type("Y5ALbK91Mp")

cy.get("BUTTON[title='Create\\ an\\ Account']").click()

   })
})

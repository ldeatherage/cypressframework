

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopageNegativeEnterFirstNameNegativeEnterLastNamePositiveEnterEmailPositiveEnterPasswordPosi", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("#!_ @")

cy.get("INPUT[id='lastname']").type("")

cy.get("INPUT[id='email_address']").type("huw.price@outlook.com")

cy.get("INPUT[id='password']").type("PGWfHSzu56")

cy.get("INPUT[name='password_confirmation']").type("PGWfHSzu56")

cy.get("BUTTON[title='Create\\ an\\ Account']").click()

   })
})

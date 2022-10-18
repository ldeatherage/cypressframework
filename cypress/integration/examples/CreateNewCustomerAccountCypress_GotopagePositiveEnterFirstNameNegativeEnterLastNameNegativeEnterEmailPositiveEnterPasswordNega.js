

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNameNegativeEnterLastNameNegativeEnterEmailPositiveEnterPasswordNega", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Earlene")

cy.get("INPUT[id='lastname']").type("#!_ @")

cy.get("INPUT[id='email_address']").type("huw.price")

cy.get("INPUT[id='password']").type("LTR25bOlk1")

cy.get("INPUT[name='password_confirmation']").type("#!_ @")

cy.get("BUTTON[title='Create\\ an\\ Account']").click()

   })
})



describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailPositiveEnterPasswordNega", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Misael")

cy.get("INPUT[id='lastname']").type("Barrows")

cy.get("INPUT[id='email_address']").type("huw.price@outlook.com")

cy.get("INPUT[id='password']").type("RU0vrRR1iu")

cy.get("INPUT[name='password_confirmation']").type("#!_ @")

   })
})

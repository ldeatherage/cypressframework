

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmailPositiveEnterPasswordPosi", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Helga")

cy.get("INPUT[id='lastname']").type("Reynolds")

cy.get("INPUT[id='email_address']").type("huw.price")

cy.get("INPUT[id='password']").type("DzrFaIG0DP")

cy.get("INPUT[name='password_confirmation']").type("DzrFaIG0DP")

cy.get("BUTTON[title='Create\\ an\\ Account']").click()

   })
})

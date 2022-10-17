

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmailError", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Lucy")

cy.get("INPUT[id='lastname']").type("Huels")

cy.get("INPUT[id='email_address']").type("huw.price")

   })
})

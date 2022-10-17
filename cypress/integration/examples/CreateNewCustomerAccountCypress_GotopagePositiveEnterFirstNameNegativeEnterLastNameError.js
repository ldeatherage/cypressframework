

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNameNegativeEnterLastNameError", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Dillon")

cy.get("INPUT[id='lastname']").type("")

   })
})

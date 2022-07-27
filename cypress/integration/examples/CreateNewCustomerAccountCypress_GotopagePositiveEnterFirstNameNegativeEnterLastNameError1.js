

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNameNegativeEnterLastNameError1", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Ettie")

cy.get("INPUT[id='lastname']").type("#!_ @")

   })
})

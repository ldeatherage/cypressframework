

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopageNegativeEnterFirstNameError1", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("#!_ @")

   })
})



describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailNegativeEnterPasswordErro", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Sarai")

cy.get("INPUT[id='lastname']").type("Luettgen")

cy.get("INPUT[id='email_address']").type("huw.price@outlook.com")

cy.get("INPUT[id='password']").type("#!_ @")

   })
})

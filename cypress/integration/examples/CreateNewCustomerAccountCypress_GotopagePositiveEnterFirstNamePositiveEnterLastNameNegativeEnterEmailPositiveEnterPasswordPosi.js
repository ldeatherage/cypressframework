

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmailPositiveEnterPasswordPosi", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Adah")

cy.get("INPUT[id='lastname']").type("Ritchie")

cy.get("INPUT[id='email_address']").type("huw.price")

cy.get("INPUT[id='password']").type("GpicKSFYbZ")

cy.get("INPUT[name='password_confirmation']").type("GpicKSFYbZ")

cy.get("BUTTON[title='Create\\ an\\ Account']").click()

   })
})

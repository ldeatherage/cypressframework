

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmailPositiveEnterPasswordPosi", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Thad")

cy.get("INPUT[id='lastname']").type("Gislason")

cy.get("INPUT[id='email_address']").type("huw.price")

cy.get("INPUT[id='password']").type("0pCNBJCAty")

cy.get("INPUT[name='password_confirmation']").type("0pCNBJCAty")

cy.get("BUTTON[title='Create\\ an\\ Account']").click()

   })
})

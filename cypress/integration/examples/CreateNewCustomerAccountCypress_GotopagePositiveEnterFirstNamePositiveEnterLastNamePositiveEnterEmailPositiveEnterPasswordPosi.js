

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailPositiveEnterPasswordPosi", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Vivian")

cy.get("INPUT[id='lastname']").type("Prohaska")

cy.get("INPUT[id='email_address']").type("huw.price@outlook.com")

cy.get("INPUT[id='password']").type("APi50hwj9n")

cy.get("INPUT[name='password_confirmation']").type("wuu0bkcgeC")

cy.get("BUTTON[title='Create\\ an\\ Account']").click()

   })
})

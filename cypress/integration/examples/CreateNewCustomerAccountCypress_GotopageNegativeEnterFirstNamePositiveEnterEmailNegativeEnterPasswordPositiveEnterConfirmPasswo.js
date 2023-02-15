

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopageNegativeEnterFirstNamePositiveEnterEmailNegativeEnterPasswordPositiveEnterConfirmPasswo", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("#!_ @")

cy.get("INPUT[id='email_address']").type("huw.price@outlook.com")

cy.get("INPUT[id='password']").type("#!_ @")

cy.get("INPUT[name='password_confirmation']").type("#!_ @")

cy.get("BUTTON[title='Create\\ an\\ Account']").click()

   })
})

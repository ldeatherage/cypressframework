

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailPositiveEnterPasswordPosi", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Katelin")

cy.get("INPUT[id='lastname']").type("Kris")

cy.get("INPUT[id='email_address']").type("huw.price@outlook.com")

cy.get("INPUT[id='password']").type("J2jxjcoolI")

cy.get("INPUT[name='password_confirmation']").type("ORXXanJuh7")

cy.get("BUTTON[title='Create\\ an\\ Account']").click()

   })
})

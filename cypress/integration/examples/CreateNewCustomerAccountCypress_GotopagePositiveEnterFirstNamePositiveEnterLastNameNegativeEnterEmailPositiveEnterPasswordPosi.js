

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNamePositiveEnterLastNameNegativeEnterEmailPositiveEnterPasswordPosi", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Miller")

cy.get("INPUT[id='lastname']").type("Kerluke")

cy.get("INPUT[id='email_address']").type("huw.price")

cy.get("INPUT[id='password']").type("IKlUgU9yTw")

cy.get("INPUT[name='password_confirmation']").type("IKlUgU9yTw")

cy.get("BUTTON[title='Create\\ an\\ Account']").click()

   })
})

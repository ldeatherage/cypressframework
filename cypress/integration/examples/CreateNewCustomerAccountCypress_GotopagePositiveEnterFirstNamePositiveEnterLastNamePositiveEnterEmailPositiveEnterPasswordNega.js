

describe("Create_New_Customer_Account_Cypress", function() {
   it("GotopagePositiveEnterFirstNamePositiveEnterLastNamePositiveEnterEmailPositiveEnterPasswordNega", function() {
 	
 	cy.visit('https://magento.nublue.co.uk/customer/account/create/')

cy.get("INPUT[id='firstname']").type("Harley")

cy.get("INPUT[id='lastname']").type("Heathcote")

cy.get("INPUT[id='email_address']").type("huw.price@outlook.com")

cy.get("INPUT[id='password']").type("l_tcUld0hs")

cy.get("INPUT[name='password_confirmation']").type("#!_ @")

cy.get("BUTTON[title='Create\\ an\\ Account']").click()

   })
})

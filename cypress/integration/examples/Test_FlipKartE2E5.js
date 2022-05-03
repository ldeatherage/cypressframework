

describe("Test", function() {
   it("FlipKartE2E5", function() {
 	
 	cy.visit('https://www.flipkart.com/')

cy.get("INPUT[title='Search\\ for\\ products\\,\\ brands\\ and\\ more']").type("iPhone 13")

cy.get("BUTTON[class='L0Z3Pu']").click()

cy.visit('https://www.flipkart.com/apple-iphone-13-blue-128-gb/p/itm6c601e0a58b3c?pid=MOBG6VF5SMXPNQHG&lid=LSTMOBG6VF5SMXPNQHGL5FN51&marketplace=FLIPKART&q=iphone+13&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=organic&iid=dccaf694-7f5c-41a7-9ddd-a51871c86f9f.MOBG6VF5SMXPNQHG.SEARCH&ppt=hp&ppn=homepage&ssid=csoxh6p3280000001651234110712&qH=c68a3b83214bb235')


cy.get("LI[id='swatch-0-color']").click()

cy.get("A[class='_1fGeJ5\\ PP89tw']").click()

cy.get("INPUT[placeholder='Enter\\ Delivery\\ Pincode']").type("686001")

cy.get("BUTTON[class='_2KpZ6l\\ _2U9uOA\\ _3v1-ww\\ el-selection']").click()

cy.visit('https://www.flipkart.com/viewcart?otracker=PP_GoToCart')

   })
})

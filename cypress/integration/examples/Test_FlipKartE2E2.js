

describe("Test", function() {
   it("FlipKartE2E2", function() {
 	
 	cy.visit('https://www.flipkart.com/')

cy.get("INPUT[title='Search\\ for\\ products\\,\\ brands\\ and\\ more']").type("Carrot")

cy.get("BUTTON[class='L0Z3Pu']").click()

cy.visit('https://www.flipkart.com/carrot-250-g/p/itmdddc23dbfe70c?pid=VEGFF2S8XYN8CHQA&lid=LSTVEGFF2S8XYN8CHQAB8EOW0&marketplace=FLIPKART&q=carrots&store=eat%2Flmt%2Fzhh&srno=s_1_4&otracker=search&otracker1=search&fm=Search&iid=5512522e-66d8-46f8-9b42-c172fad5a0a4.VEGFF2S8XYN8CHQA.SEARCH&ppt=sp&ppn=sp&qH=186a8b72fe696268')

cy.get("BUTTON[class='_2KpZ6l\\ _2U9uOA\\ _3v1-ww\\ el-selection']").click()

cy.visit('https://www.flipkart.com/viewcart?otracker=PP_GoToCart')

   })
})

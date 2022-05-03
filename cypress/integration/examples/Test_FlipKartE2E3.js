

describe("Test", function() {
   it("FlipKartE2E3", function() {
 	
 	cy.visit('https://www.flipkart.com/')

cy.get("INPUT[title='Search\\ for\\ products\\,\\ brands\\ and\\ more']").type("adidas shoes")

cy.get("BUTTON[class='L0Z3Pu']").click()

cy.visit('https://www.flipkart.com/adidas-classigy-m-running-shoes-men/p/itm24819973c7adf?pid=SHOG9XNYRSUMRVKP&lid=LSTSHOG9XNYRSUMRVKPWLBTYP&marketplace=FLIPKART&q=adidas+shoes&store=osp&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=3f495a4f-b064-42c6-b857-85e09f44786e.SHOG9XNYRSUMRVKP.SEARCH&ppt=sp&ppn=sp&qH=09d26a302946ebcb')

cy.get("LI[id='swatch-3-color']").click()

cy.get("LI[id='swatch-1-size']").click()

cy.get("BUTTON[class='_2KpZ6l\\ _2U9uOA\\ _3v1-ww\\ el-selection']").click()

cy.visit('https://www.flipkart.com/viewcart?otracker=PP_GoToCart')

cy.get("BUTTON[class='_23FHuj\\ el-selection']").click()

   })
})

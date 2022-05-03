

describe("Test 2", function() {
   it("GoToUrlEnterSearchbarClickSearchbuttonAssertUrlGoToUrlClickBlackClick11", function() {
 	
 	cy.visit('https://www.flipkart.com/')

cy.get("INPUT[title='Search\\ for\\ products\\,\\ brands\\ and\\ more']").type("Adias Shoes")

cy.get("BUTTON[class='L0Z3Pu']").click()

cy.url().should('eq', 'https://www.flipkart.com/adidas-classigy-m-running-shoes-men/p/itm24819973c7adf?pid=SHOG9XNYRSUMRVKP&lid=LSTSHOG9XNYRSUMRVKPWLBTYP&marketplace=FLIPKART&q=adidas+shoes&store=osp&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=3f495a4f-b064-42c6-b857-85e09f44786e.SHOG9XNYRSUMRVKP.SEARCH&ppt=sp&ppn=sp&qH=09d26a302946ebcb')

cy.visit('https://www.flipkart.com/adidas-classigy-m-running-shoes-men/p/itm24819973c7adf?pid=SHOG9XNYRSUMRVKP&lid=LSTSHOG9XNYRSUMRVKPWLBTYP&marketplace=FLIPKART&q=adidas+shoes&store=osp&srno=s_1_3&otracker=search&otracker1=search&fm=Search&iid=3f495a4f-b064-42c6-b857-85e09f44786e.SHOG9XNYRSUMRVKP.SEARCH&ppt=sp&ppn=sp&qH=09d26a302946ebcb')

cy.get("A[data-img='http\\:\\/\\/rukmini1\\.flixcart\\.com\\/image\\/\\{\\@width\\}\\/\\{\\@height\\}\\/l15bxjk0\\/shoe\\/z\\/7\\/4\\/8-ga1053-8-adidas-carbon-dovgry-ftwwht-original-imagcrtekg9fhgdc\\.jpeg\\?q\\=\\{\\@quality\\}']").click()

cy.get("A[href='\\/adidas-classigy-m-running-shoes-men\\/p\\/itm24819973c7adf\\?pid\\=SHOG9XNYZWXPGARE\\&lid\\=LSTSHOG9XNYZWXPGAREEMS9GX\\&marketplace\\=FLIPKART\\&sattr\\[\\]\\=color\\&sattr\\[\\]\\=size\\&st\\=size']").click()

   })
})

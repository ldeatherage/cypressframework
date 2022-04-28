

describe("Search_Function_V2", function() {
   it("SearchforaproductGotopagePositiveEnterSearchbarClickSearchbuttonWaypointWaypointMovetoaddtoca", function() {
 	
 	cy.visit('https://www.flipkart.com/')

cy.get("INPUT[title='Search\\ for\\ products\\,\\ brands\\ and\\ more']").type("adidas shoes")

cy.get("BUTTON[class='L0Z3Pu']").click()

cy.get("A[data-img='http\\:\\/\\/rukmini1\\.flixcart\\.com\\/image\\/\\{\\@width\\}\\/\\{\\@height\\}\\/l12h1u80\\/shoe\\/z\\/c\\/b\\/7-ga1052-7-adidas-gresix-ftwwht-orarus-original-imagcpvgmtxa3kvf\\.jpeg\\?q\\=\\{\\@quality\\}']").click()

cy.get("A[href='\\/adidas-classigy-m-running-shoes-men\\/p\\/itm24819973c7adf\\?pid\\=SHOG9XNYZWXPGARE\\&lid\\=LSTSHOG9XNYZWXPGAREEMS9GX\\&marketplace\\=FLIPKART\\&sattr\\[\\]\\=color\\&sattr\\[\\]\\=size\\&st\\=size']").click()

   })
})

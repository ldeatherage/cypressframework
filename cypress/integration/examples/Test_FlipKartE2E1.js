

describe("Test", function() {
   it("FlipKartE2E1", function() {
 	
 	cy.visit('https://www.flipkart.com/')

cy.get("INPUT[title='Search\\ for\\ products\\,\\ brands\\ and\\ more']").type("iPhone 13")

cy.get("BUTTON[class='L0Z3Pu']").click()

cy.get("A[data-img='https\\:\\/\\/rukminim1\\.flixcart\\.com\\/image\\/\\{\\@width\\}\\/\\{\\@height\\}\\/ktketu80\\/mobile\\/e\\/e\\/r\\/iphone-13-mlpj3hn-a-apple-original-imag6vpykhzqhmgh\\.jpeg\\?q\\=\\{\\@quality\\}']").click()

cy.get("A[class='_1fGeJ5\\ PP89tw']").click()

cy.visit('https://www.flipkart.com/adidas-fluo-m-running-shoes-men/p/itm4799b8a41a1a7?pid=SHOFUN8JHKXHJZMD&lid=LSTSHOFUN8JHKXHJZMDIX8YK6&marketplace=FLIPKART&q=adidas+shoes&store=osp%2Fcil%2F1cu&srno=s_1_1&otracker=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_6_na_na_na&fm=search-autosuggest&iid=en_iKtxByERBMz632F8U2eOaW0iY0aE%2FQ99gdCYWX03nRjc0Iog06Erd%2B1ggGh8NmdJ%2B6oscbj2Hf32VM%2B8M1C6UA%3D%3D&ppt=sp&ppn=sp&ssid=x20xowr0u80000001651046114302&qH=09d26a302946ebcb')

   })
})

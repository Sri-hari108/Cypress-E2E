/// <reference types='cypress' />
 
import {selectItems} from "../../pages/selectitems"
const product = new selectItems()
import testData from "../../fixtures/testData.json"


describe('automation',()=>{
   before(function(){
     cy.login(testData.login.email,testData.login.Password)
   })
    it('Select item to addtoCart',()=>{
     product.enteritemName(testData.productName)
     product.clickSearch()
     product.addtoCart()
     product.verifySuccessMessage().should('contain',testData.successMessage) .and ('contain',testData.productName)
        
    })
})
export class selectItems{
   
    weblocators={
        itemName:'.form-control.input-lg',
        search:'.btn.btn-default.btn-lg',
        addtoCart:'Add to Cart',
        successMessage:'.alert.alert-success.alert-dismissible'

    }
    enteritemName(itemName){
        cy.get(this.weblocators.itemName).type(itemName)
    }
    clickSearch(){
        cy.get(this.weblocators.search).click()
    }
    addtoCart(){
        cy.contains(this.weblocators.addtoCart).first().click()
    }
    verifySuccessMessage(){
       return cy.get(this.weblocators.successMessage)
    }
}
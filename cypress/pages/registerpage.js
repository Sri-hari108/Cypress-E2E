
export class registerpage{
    weblocators={
       firstName: '#input-firstname',
       lastName:'#input-lastname',
       email:'#input-email',
       telephone:'#input-telephone',
       password:'#input-password',
       confirmPassword:'#input-confirm',
       policyCheckbox:"[type='checkbox']",
       continue:"[type='submit']"
    }
    openURL(){
        cy.visit(Cypress.env('url'))
    }
    enterfirstName(fName){
        cy.get(this.weblocators.firstName).type(fName)
    }
    enterlastName(lName){
        cy.get(this.weblocators.lastName).type(lName)
    }
    enterEmail(email){
        cy.get(this.weblocators.email).type(email)
    }
    enterTelephone(telephone){
        cy.get(this.weblocators.telephone).type(telephone)
    }
    enterPassword(password){
        cy.get(this.weblocators.password).type(password)
        cy.get(this.weblocators.confirmPassword).type(password)
    }
    
    selectPolicyCheckbox(){
        cy.get(this.weblocators.policyCheckbox).check()
    }
    clickOnContinue(){
        cy.get(this.weblocators.continue).click()
    }

}
/// <reference types="cypress" />
import {registerpage} from "../../pages/registerpage"
const registerObj=new registerpage()
import registerData from "../../fixtures/registerData.json"
describe('Automation Test',()=>{

   it('Registeration flow',()=>{
    registerObj.openURL()
    registerObj.enterfirstName(registerData.firstName)
    registerObj.enterlastName(registerData.lastName)
    registerObj.enterEmail(registerData.email)
    registerObj.enterTelephone(registerData.Telephone)
    registerObj.enterPassword(registerData.Password)
    registerObj.selectPolicyCheckbox()
    registerObj.clickOnContinue()
   })

})
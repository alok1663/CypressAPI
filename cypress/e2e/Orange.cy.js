

describe('OrangeHR testing',() =>{

beforeEach('visitURL',() =>{
cy.viewport(1980,1080)
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").should('have.text','Forgot your password? ')
cy.get(".orangehrm-login-button").should('have.text',' Login ')	
cy.get("a[href='http://www.orangehrm.com']").should('contain','OrangeHRM')



})



it('Login NOrmal',()=>{

cy.get("input[placeholder='Username']").type('Admin')
cy.get('input[placeholder="Password"]').type('admin123')
cy.get("button[type='submit']").click()
cy.get('a[href="/web/index.php/recruitment/viewRecruitmentModule"]').should('contain','Recruitment')
cy.get('.oxd-userdropdown-tab').click()
cy.get('a[href="/web/index.php/auth/logout"]').click()

})

it('Login with Fixture',{taskTimeout: 10000},()=>{

    cy.fixture('hr').then((hrdata)=>{

        cy.get("input[placeholder='Username']").type(hrdata.username)
    cy.get('input[placeholder="Password"]').type(hrdata.password)
    cy.get("button[type='submit']").click()
    cy.get('.oxd-userdropdown-tab').click()
cy.get('a[href="/web/index.php/auth/logout"]').click()
    }
    
    
    
    )
})
  

//Custom Comand Login 
it('Login with Custom Comand',()=>{

    cy.loginwithoutparaneter()
})












})
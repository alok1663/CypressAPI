describe('DEV QA PAGE AUTOMATE', () => {

beforeEach('Load Webpage' , () => {


  cy.viewport(1920, 1080)
cy.visit('https://devqa.io/')

cy.wait(1000)


}
)

  it('Development TAB ', () => {
  
    cy.get('[href="/development"]').should('exist');
    cy.get('[href="/development"]').click();
    cy.get('.tag-container > :nth-child(3) > a').should('exist');
    cy.get('.tag-container > :nth-child(3) > a').click();

    
  })




it('TESTING TAB',()=>{


  cy.get('[href="/testing"]').should('exist')
  cy.get('[href="/testing"]').click()
  cy.get('.tag-container > :nth-child(22) > a').should('exist')
  cy.get('.tag-container > :nth-child(22) > a').click()
  cy.get('.opacity-0.absolute.inset-0').should('exist')
  cy.get('.opacity-0.absolute.inset-0').click()

})


})
describe('Microsoft', () => {

  // This prevents Cypress from failing the test due to uncaught exceptions
  before(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      // You can log the error if needed
      console.error('Uncaught exception:', err);

      // Return false to prevent Cypress from failing the test
      return false;
    });
  });

  beforeEach('Load Webpage', () => {
    cy.viewport(1920, 1080);  
    cy.visit('https://www.tftus.com/');
    cy.wait(2000);
  });

  it('AboutUsPage', () => {
    cy.get('a[href="/about-us"]').should('have.text', 'About us');
    cy.get('a[href="/about-us"]').click();
    cy.wait(5000);
    cy.get('a[class="btn"] span').click(); 
cy.wait(2000);


cy.get('#wpcf7-f97-o1 > .wpcf7-form > .grid-6 > :nth-child(1) > .wpcf7-form-control-wrap > .wpcf7-form-control').type('Alok');
cy.get('#wpcf7-f97-o1 > .wpcf7-form > .grid-6 > :nth-child(2) > .wpcf7-form-control-wrap > .wpcf7-form-control').type('Email@email.com');

cy.get('.iti > #mobile-number').type('433435435').click();
cy.get('div[id="wpcf7-f97-o1"] div[class="grid grid-6"] span[class="placeholder"]').click();
cy.get('div[class="SumoSelect sumo_drop-down open"] p[class="select-all"] i').click();
cy.get('div[id="wpcf7-f97-o1"] div[class="grid grid-12"] span[class="placeholder"]').click();
cy.get('section[class="form-section"] div[class="grid grid-12"] li:nth-child(1) span:nth-child(1) i:nth-child(1)').click();
cy.get('.form-section').click();
cy.get('#wpcf7-f97-o1 > .wpcf7-form > :nth-child(4) > .input-wrap > .textarea-121 > .wpcf7-form-control').type('MESSAGE');

  }); 


  it('Services', () => {
    cy.contains('Services').realHover();
    cy.wait(2000);
    cy.contains('Automation Testing').click();



  });

});


describe('template spec', () => {

  beforeEach(() => {
   cy.viewport(1920, 1080);
    cy.visit('https://www.socastdigital.com/')
    cy.wait(2000);
    cy.get('.text').should('have.text', 'Menu')
  });

  it('careerPage', () => {
    cy.get('.text').should('have.text', 'Menu')
    cy.contains('a', 'Who We Are').focus();
    cy.contains('a', 'Who We Are').invoke('show');
    cy.contains('a', 'Who We Are').realHover();
    cy.wait(2000);
    cy.contains('Career').should('exist');
    cy.contains('Careers').click();

  });

  it('AboutPage', () => {
   //cy.contains('About').should('not.be.visible');
    cy.contains('Who We Are').realHover();
    cy.wait(2000);
    cy.contains('About').click();
  });


  it('EngagePage', () => {
    cy.contains('a', 'Solutions').realHover();
    cy.wait(2000);
    cy.contains('a', 'Engage').click();
    // cy.get('.vc_general.vc_btn3.vc_btn3-size-md.vc_btn3-shape-square.vc_btn3-style-modern.vc_btn3-icon-left.vc_btn3-color-white').click();
  });

  it('schedule a demo Page', () => {
    cy.get('nav#stickyHeader li:nth-child(6) a:nth-child(1)').click();
    cy.get('#First_Name').type('Alok');
    cy.get('#Last_Name').type('Deep');
    cy.get('#Email').type('Email@email.com');
    cy.get('#Company').type('DemoCOMPANY');
    cy.get('#LEADCF3').select('Executive/Market President/C-Suite');
    cy.get('#Phone').type('433435435').click();
  });

  it('REACHPAGE', () => {
    cy.contains('a', 'Solutions').realHover();
    cy.contains('Reach').dblclick();
  });

  it('ResourcePage', () => {
   
    cy.contains('Resources').realHover();
    cy.wait(2000);
    cy.contains('Media').click();
  });

  it('Success Stories', () => {
   
    cy.contains('Resources').realHover();
    cy.wait(2000);
    cy.contains('Success Stories').click();
  });

  /*it('SoCast Support Centre', () => {
   
    cy.contains('Support').realHover();
    cy.wait(2000);
    cy.contains('SoCast Support Centre').dblclick();
    cy.get('a[data-id="kb_module"]').click();
    cy.wait(3000)
    cy.contains('Getting Started').click();
    cy.contains('Sample Websites and Mobile Apps').click();
    cy.wait(3000);
    cy.contains('Knowledge Base').click();

  });*/

  it('Digital Expertise Page', () => {
   
    cy.contains('Support').realHover();
    cy.wait(2000);
    cy.contains('Digital Expertise On Demand').click();
  });

  it('Contact Us_Page', () => {
   
    cy.contains('Support').realHover();
    cy.wait(3000);
    cy.contains('Contact Us').click();
    cy.get('#First_Name').type('Alok');
    cy.get('#Last_Name').type('Deep');
    cy.get('#Email').type('Email@email.com');
    cy.get('#Company').type('DemoCOMPANY');
    cy.get('#LEADCF3').select('Executive/Market President/C-Suite');
    cy.get('#Phone').type('433435435').click();
  });

  it('KnowledgeBAse',()=>{

cy.visit('https://support.socastdigital.com/portal/en/home');

cy.get('a[data-id="kb_module"]').click();
cy.wait(3000);
cy.get('a[data-id="KbCategory_495022000001141329"]').click();
cy.get('a[data-id="article_495022000001142034"]').click();


  })


/*
  it('TestSHouldhave' , () => {

    cy.visit('https://www.socastdigital.com/careers/');

    cy.get('h1').should('have.text', 'Careers at SoCast');
    cy.get('strong').should('have.text', 'Elliott Hurst');
    cy.wait(3000);
    cy.get('a[href="https://socastdigital.zohorecruit.com/jobs/Careers/333867000003877009/Sales-Development-Representative?source=CareerSite"]').click();
  })


  it('TestSHouldhave' , () => {

    cy.visit('https://www.socastdigital.com/careers/');

    cy.get('h1').should('have.text', 'Careers at SoCast');
    cy.get('strong').should('have.text', 'Elliott Hurst');
    cy.wait(3000);
    cy.get('a[href="https://socastdigital.zohorecruit.com/jobs/Careers/333867000003877009/Sales-Development-Representative?source=CareerSite"]').click();
  })*/

});





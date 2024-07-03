describe('template spec', () => {

beforeEach('Load Webpage' , () => {
cy.viewport(1920,1080);
cy.visit('https://www.easemytrip.com/');
cy.get('._offeritem > .view_btn > a')
})




  it('Flight Check', () => {

cy.get('#FromSector_show').click();  

cy.get('#a_FromSector_show').type('BLR');

cy.get('#airportBengaluru').click();
  
cy.get('#a_Editbox13_show').type('IXL');
cy.get('#airportLeh').click();
cy.get('li[id="frth_3_24/07/2024"]').click();
cy.get('.srchBtnSe').click();
cy.wait(5000);
cy.get('.fastestbt > .cheptxt').click();
cy.wait(5000);
cy.get('body > form:nth-child(2) > div:nth-child(44) > div:nth-child(10) > div:nth-child(1) > div:nth-child(2) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(6) > button:nth-child(2)').click();


  })


it.only('hotel booking' ,() =>{

cy.get('.meuicowidth.hotelmenuico').click();
cy.wait(5000);
cy.get('.pricerange').click();
cy.contains('₹ 5000').click();
cy.get('#btnSearch').click();


})

})










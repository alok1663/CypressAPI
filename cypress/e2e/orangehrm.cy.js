
describe('With Fixture' , () =>{

    let urla 
    let  un 
    let  ps
beforeEach('using fixture now' ,() =>{

cy.fixture('hr.json').then((data) => {


   urla = data.url
   un = data.username
   ps = data.password
   cy.visit(data.url)
   cy.get("input[placeholder ='Username']").type(un)
   cy.get("input[placeholder ='Password']").type(ps)
   cy.get("button[type='submit']").click()

})


})

it('Admin Block',() =>{


    
    

cy.get('a[ href="/web/index.php/admin/viewAdminModule"]').click()
cy.get("button[class='oxd-icon-button oxd-main-menu-button']").click()
cy.get('input[class="oxd-input oxd-input--active"]').type('HughJass')
cy.get('div[tabindex="0"]').first().click()
cy.contains(' Search ').click()	

})

it('Job Title',() =>{

    cy.get('a[ href="/web/index.php/admin/viewAdminModule"]').click()
    cy.get("button[class='oxd-icon-button oxd-main-menu-button']").click()
 // cy.get("li[class='oxd-topbar-body-nav-tab --parent --visited'] span[class='oxd-topbar-body-nav-tab-item']").click() 
  cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()

  cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
//cy.get("div[class='oxd-topbar-body toggled'] li:nth-child(1) span:nth-child(1)").click()
//cy.get("header[class='oxd-topbar'] li:nth-child(1) a:nth-child(1)").click()

cy.get(':nth-child(1) > .oxd-table-row > :nth-child(1) > .oxd-table-card-cell-checkbox > .oxd-checkbox-wrapper > label > .oxd-checkbox-input > .oxd-icon').click()

})
it.only('Fixture Retest', () => {
    cy.fixture('hr.json').then((data1) => {
        const name1 = data1.name;

        cy.get("body > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > aside:nth-child(1) > nav:nth-child(1) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(9) > a:nth-child(1)").click().then(() => {
            cy.get("input[placeholder='Type for hints...']").type('Ranga ');
            cy.wait(3000)
            cy.get("button[type='submit']").click()
        });
    });
});


})




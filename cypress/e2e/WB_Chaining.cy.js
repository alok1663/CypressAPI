describe('WB Chaining', () => {
  it('Chaining', () => {
    // First request to get the country data
    cy.request({
      url: 'http://api.worldbank.org/v2/country/?format=json',
      method: 'GET',
    }).then((response) => {
      // Log the response and extract the iso2Code
      cy.log(JSON.stringify(response));
      const iso = response.body[1][1].iso2Code;

      // Chain the next request using the iso2Code from the first response
      return cy.request({
        url: 'http://api.worldbank.org/v2/country/' + iso + '?format=json',
        method: 'GET',
      });
    }).then((response) => {
      // Log the response and assert the status and iso2Code
      cy.log(JSON.stringify(response));
      const iso = response.body[1][0].iso2Code;
      expect(response.status).to.eq(200);
      expect(iso).to.eq(iso); // Assuming 'BR' is the correct iso2Code for Brazil

      // Assert that the income level value is "High income"
      expect(response.body[1][0].incomeLevel.value).to.eq('Aggregates');
    });
  });



it('Chaining Again', () => {
  

  cy.request({
    url: 'http://api.worldbank.org/v2/country/?format=json',
    method: 'GET',  

  }).then((response)=>{
    
    cy.log(JSON.stringify(response));
    const area1 = response.body[1][0].region.value;
    expect(area1).to.eq(area1);
    const iso1 = response.body[1][0].iso2Code; 
  

   return cy.request({
      url: 'http://api.worldbank.org/v2/country/' + iso1 + '?format=json',
      method: 'GET',
    }).then((response)=>{
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(200);
   expect(response.body[1][0].incomeLevel.value).to.eq('High income');})
    
  
  })
  
}
  )})

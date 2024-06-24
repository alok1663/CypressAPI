describe('GetCall function', () => {
  let accessToken = '05d3e3231d587240f9d2a3cf1d19a21ca6b023a21ebcc2aeed0f19f341698369';
  let gurl = 'https://gorest.co.in/public/v2';
  const userName = Math.random().toString(36).substring(2, 15);
  const emailId = userName + "@apple.com";
  let id1 = Math.floor(Math.random() * 10000);

  it('GET scenario', () => {
    cy.request({
      url: gurl + '/users/',
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    }).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(200);
      //expect(response.body.id).to.eq(6975881);
    });
  });

  it('POST', () => {
    cy.request({
      url: gurl + '/users',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      body: {
        "id": id1,
        "name": userName,
        "email": emailId,
        "gender": "male",
        "status": "active"
      }
    }).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.status).to.eq(201);
      expect(response.body.email).to.eq(emailId);
      expect(response.body.status).to.eq("active");
    });
  });

  /*it('PUT check', () => {
    cy.request({
      method: "PUT",
      url: gurl + '/users/6940121',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      },
      body: {
        status: "inactive"
      }
    }).then((response) => {
      cy.log(JSON.stringify(response));
      expect(response.body.status).to.eq("active");
    });
  });*/

 /* it('DELETE', () => {
    cy.request({
      method: "DELETE",
      url: gurl + '/users/6975881',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    }).then((response) => {
      expect(response.status).to.eq(204);
    });
  });*/

  it('GET nested', () => {
    cy.request({
      method: 'GET',
      url: gurl + '/users/6940121/posts',
      headers: {
        'Authorization': 'Bearer ' + accessToken
      }
    }).then((response) => {
      cy.writeFile('cypress/fixtures/response.txt', JSON.stringify(response));
      expect(response.status).to.eq(200);
    });
  });




//DEMO QUERIES






});






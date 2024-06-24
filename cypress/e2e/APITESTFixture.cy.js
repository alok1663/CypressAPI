describe('API TEST WITH FIXTURE', () => {




let accessToken ;
let gurl;

const userName = Math.random().toString(36).substring(2, 15);
const emailId = userName+"@email.com";
const id1 = Math.floor(Math.random() * 10000);

before('Fixture Setup' , () => {


  cy.fixture('Elements.json').then((data) => {
    accessToken = data.accesstoken; 
    gurl = data.gurl;
  })
})  


 



it('GETfunction', () => {
  

    cy.request({
      url: gurl + '/users/',
      method: 'GET',
      headers: { 
        'Authorization': 'Bearer ' + accessToken
      }
    }).then((response) => {
      cy.log(JSON.stringify(response))
      expect(response.status).to.eq(200)
      //expect(response.body.id).to.eq(6975881);
    });



  })


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
  cy.log(JSON.stringify(response))
  expect(response.status).to.eq(201)
  expect(response.body.email).to.eq(emailId)
  expect(response.body.status).to.eq("active")
  expect(response.body.name).to.eq(userName)
})

})

it.only('POSTAGAIN',() =>
  
  {

cy.request({

method : 'POST',
url:gurl + '/users',
headers : {
'Authorization' : 'Bearer ' + accessToken
},
body : {  

id: id1,
name: userName,
email: emailId,
gender: "female",
status: "active"
}}).then((res) =>{

cy.log(JSON.stringify(res))
expect(res.status).to.eq(201)
expect(res.body.email).to.eq(emailId)
expect(res.body.name).to.eq(userName)

})


  }
  
  
  
  
  )

})
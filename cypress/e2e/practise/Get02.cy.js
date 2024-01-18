/*

API URL: https://automationexercise.com/api/brandsList

Request Method: GET

Response Code: 200

Response JSON: All brands list

*/

describe("GET Method Testing", ()=>{

    it("get02",()=>{
       
        //i) set the Endpoint
        //NOTE: Our url in cypress.config.js file

        const pathParam1="/api"
        const pathParam2="/brandsList"
 
        //ii) Set the payload /  payload ==> the data you send
 
        //iii) Send the request
        cy.request({
            method: "GET",
            url: `${pathParam1}${pathParam2}`
        }).then((response)=>{
 
            ;
 
        //Since the response is in 'text/html' format, we convert the response to JSON with JSON.parse().
        const responseBody = JSON.parse(response.body);
        console.log(responseBody);
            
        //iv) Assertion
        //Assert that status code 200
        expect(response.status).to.eq(200);    
        
        //Assert that all brands in response
        expect(response.body).to.include("brands");
        });
 
    })
 });
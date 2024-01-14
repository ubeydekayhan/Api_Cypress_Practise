/*

API URL: https://automationexercise.com/api/productsList

Request Method: GET

Response Code: 200

Response JSON: All products list

*/

describe("GET Method Testing", ()=>{

    it("get01",()=>{
       
        //i) set the Endpoint
        const pathParam1="/api"
        const pathParam2="/productsList"
 
        //ii) Set the payload /  payload ==> the data you send
 
        //iii) Send the request
        cy.request({
            method: "GET",
            url: `${pathParam1}${pathParam2}`
        }).then((response)=>{
 
            //Let's see the response on the developer console
            console.log(response.body);
 
            //Let's see Response as a string in the Cypress console
            cy.log(JSON.stringify(response.body));
            
        //iv) Assertion
        //Assert that status code 200
        expect(response.status).to.eq(200);    
        
        //Assert that all products in response
        expect(response.body).to.include("products");
        });
 
    })
 });
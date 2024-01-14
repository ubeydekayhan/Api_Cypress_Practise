/*

-API URL: https://automationexercise.com/api/productsList

-Request Method: POST

-Response Code: 405

-Response Message: This request method is not supported. 

*/
describe("POST Method Testing", ()=>{

    it("post01",()=>{
       
        //i) Set the Endpoint
        const pathParam1="/api"
        const pathParam2="/productsList"
 
        //ii) Set the payload /  payload ==> the data you send
 
        //iii) Send the request
        cy.request({
            method: "POST",
            url: `${pathParam1}${pathParam2}`,
        }).then((response)=>{
 
 
            //Let's see Response as a string in the Cypress console
           console.log(response);

            //Since the response is in 'text/html' format, we convert the response to JSON with JSON.parse(). 
            const responseBody = JSON.parse(response.body);
            console.log(responseBody.responseCode);
            
        //iv) Assertion
        //Assert that status code 405
        expect(responseBody.responseCode).to.eq(405);    
        
        //Assert that response message "This request method is not supported."
        expect(responseBody.message).to.eq("This request method is not supported.");
        });
 
    })
 });
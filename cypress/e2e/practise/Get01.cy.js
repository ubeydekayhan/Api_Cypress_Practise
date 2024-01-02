describe("GET Method Testing", ()=>{

    it("get01",()=>{
       
        //i) set the Endpoint
        const url = "https://automationexercise.com/api/productsList";
 
        //ii) Set the payload /  payload ==> sizin gondereceginiz data
 
        //iii) Send the request
        cy.request({
            method: "GET",
            url: url
        }).then((response)=>{
 
            //Respons'i developer console'da gorelim
            console.log(response.body);
 
            //Response'i Cypress konsolunda string olarak görelim
            cy.log(JSON.stringify(response.body));
            
        //iv) Assertion
        //Assert that status code 200
        expect(response.status).to.eq(200);    
  
        });
 
    })
 });
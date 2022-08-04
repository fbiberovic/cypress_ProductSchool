describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://mop.ba/product-school/')
   
    


    it('contains "Product School" in the title', function() {
      cy.title().should('contain', "Product School")
    })

    it('has a visible MoP crown logo', () => {
      cy.get('.Header__StyledHorizontalLogo-sc-1yp3bsp-2').should('be.visible')
    })


    it('displays 2 apply buttons by default', () => {
      
      cy.get('.Header__StyledHorizontalLogo-sc-1yp3bsp-2').should('have.length', 2)
  
    
    })

    describe('My First Test: Hello world in Testing env :)', () => {
      it('finds the content "type"', () => {
        cy.visit('https://mop.ba/product-school/')
    
        cy.contains('type')
      })
    })

   /* cy.get('[data-testid="num"]').then(($span) => {
    
      const num1 = parseFloat($span.text(1))
    
      cy.get('.product-school__ButtonContainer-sc-5yq82e-7 > .Button__StyledButton-sc-14gyrjo-0')
        .click()
        .then(() => {
        
          const num2 = parseFloat($span.text(2))
    
        
          expect(num2).to.eq(num1 + 1)
        })
    })*/






    cy.get('.product-school__ButtonContainer-sc-5yq82e-7 > .Button__StyledButton-sc-14gyrjo-0').click() //1st button

    cy.get(':nth-child(1) > .WhyMoP__ReasonTitle-tameq-3').click()
      cy.get(':nth-child(1) > .WhyMoP__ReasonTitle-tameq-3').click()
      //cy.get(':nth-child(1) > .WhyMoP__ReasonTitle-tameq-3').type("TESTING TESTING")
    

    //.should() is used for validation!

    //doesn't scroll down to Intern form. Right link is visible in test response. Not sure if this is a bug?
    //.click() works on button elements.

   // cy.get(':nth-child(4) > :nth-child(2) > img').click() //2nd button - with a pointer.


    cy.get('.Dropdown__Select-sc-1nfmakm-0').should("be.visible")
    cy.get('.Dropdown__Select-sc-1nfmakm-0').should('be.enabled')
    cy.get('.Dropdown__Select-sc-1nfmakm-0').should('be.extensible')
    cy.get('.Dropdown__Select-sc-1nfmakm-0').select(4) 
    //cy.get('.Dropdown__Select-sc-1nfmakm-0').select(4).should("have.value", '328963') //??? 
    it('selects several Internship options', () => {
      
      cy.get('.Dropdown__Select-sc-1nfmakm-0').select([1, 2, 3])
    
      
      cy.get('.Dropdown__Select-sc-1nfmakm-0').invoke('val').should('deep.equal', [1, 2, 3])
    })

    //Backend Internship(2), DevOps Internship(3), Frontend Internship(4), iOS Internship(5), QA Internship(6), UX/UI Internship(7)
   //.select() works on dropdown elements. Test failed after  I've tried using .click() method.
   //tried option 8 for an example, test failed intentionally.

//FULL NAME TEST CASES

   cy.get('[name="fullName"]').should("be.visible")
   cy.get('[name="fullName"]').should("not.contain.text", "Full Name")
   //cy.get('[name="fullName"]').type("")
   cy.get('[name="fullName"]').type("Faruk Biberovic")




   

   //cy.get('form > .Button__StyledButton-sc-14gyrjo-0').click() //Requirement warning is not present on display




    it("contains e-mail, verify that User can insert valid e-mail address", () => {
   cy.get('[name="email"]').type("biberovicfaruk16@gmail.com")
    })
    it("contains e-mail, verify that User can't insert invalid e-mail address", () => {
     // cy.get('[name="email"]').type("biberovicfaruk16@@gmail.com")
       })

   cy.get('[name="phone"]').type("+38762487968")
   cy.get('[name="phone"]').should("be.visible")
   cy.get('[name="phone"]').should("contain.value", "+38762487968")
  
 
   it("verify that User can upload his CV file", () => {
   cy.get('[type="file"]').selectFile('cypress/fixtures/cvFile.txt')
   it('verify that User can only upload document with file extensions')
   //cy.get('[type="file"]').should("not.contain.text").selectFile('cypress/fixtures/example.json')
   cy.get('[type="file"]').should("not.contain.text")
   cy.get('[type="file"]').should("not.be.empty")
  
   })
   
   cy.get('[style="width: 304px; height: 78px;"] > div > iframe').click()

   cy.get(':nth-child(1) > .FAQ__TitleWrap-sc-1ds8aeq-4 > .FAQ__Wrap-sc-1ds8aeq-5 > .Typography__Display2-sc-1ch8jme-11').click()
   cy.get(':nth-child(1) > .FAQ__TitleWrap-sc-1ds8aeq-4 > .FAQ__Wrap-sc-1ds8aeq-5 > .Typography__Display2-sc-1ch8jme-11').should("be.visible")
   cy.get(':nth-child(1) > .FAQ__TitleWrap-sc-1ds8aeq-4 > .FAQ__Wrap-sc-1ds8aeq-5 > .Typography__Display2-sc-1ch8jme-11').should("contain.text", "What kind of internship")

   cy.get(':nth-child(2) > .FAQ__TitleWrap-sc-1ds8aeq-4 > .FAQ__Wrap-sc-1ds8aeq-5 > .Typography__Display2-sc-1ch8jme-11').click()
   cy.get(':nth-child(2) > .FAQ__TitleWrap-sc-1ds8aeq-4 > .FAQ__Wrap-sc-1ds8aeq-5 > .Typography__Display2-sc-1ch8jme-11').should("be.visible")
   cy.get(':nth-child(2) > .FAQ__TitleWrap-sc-1ds8aeq-4 > .FAQ__Wrap-sc-1ds8aeq-5 > .Typography__Display2-sc-1ch8jme-11').should("contain.text", "If I am selected")
   
   cy.get(':nth-child(2) > .FAQ__TitleWrap-sc-1ds8aeq-4 > .FAQ__Wrap-sc-1ds8aeq-5 > .Typography__Display2-sc-1ch8jme-11').click()
   cy.get(':nth-child(2) > .FAQ__TitleWrap-sc-1ds8aeq-4 > .FAQ__Wrap-sc-1ds8aeq-5 > .Typography__Display2-sc-1ch8jme-11').should("be.visible")
   cy.get(':nth-child(2) > .FAQ__TitleWrap-sc-1ds8aeq-4 > .FAQ__Wrap-sc-1ds8aeq-5 > .Typography__Display2-sc-1ch8jme-11').should("contain.html", "this needs to fails")



   



    
  })
})
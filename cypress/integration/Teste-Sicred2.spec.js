/// <reference types="cypress" />


describe('Grocery crud',function() {
    
    beforeEach(function(){
    cy.visit('https://www.grocerycrud.com/v1.x/demo/bootstrap_theme');
    })
    it.only('Verificar o titulo da aplicação', function() {
        cy.title().should('be.equal', 'Grocery CRUD Demo - Bootstrap Theme');
    })
    
    it.only('Selecionar versao', () => {
        cy.get('#switch-version-select').select('/v1.x/demo/bootstrap_theme_v4');

    it.only('clicar em addcustomer',) 
        cy.get('.floatL.t5 > .btn').click();
    
    it.only('preencher nome',)
        cy.get('#field-customerName').type('Teste Sicred');

    it.only('preencher sobrenome',)
    cy.get('input[id="field-contactLastName"]').type('Teste');

    it.only('preencher contactFirstName', )
    cy.get('#field-contactFirstName').type('Karina Araujo');

    it.only('preecher telefone',)
    cy.get('#field-phone').type('51 9999-9999');

   it.only('preencher endereço linha1',)
   cy.get('#field-addressLine1').type('Av Assis Brasil, 3970');

   it.only('preencher endereço linha2',)
   cy.get('#field-addressLine2').type('Torre D');

   it.only('preencher cidade',)
   cy.get('#field-city').type('Porto Alegre')
   

   it.only('preencher estado',)
   cy.get('#field-state').type('RS')

   it.only('codigo postal',)
   cy.get('#field-postalCode').type('91000-000')

   it.only('preecher país',)
   cy.get('#field-country').type('Brasil')

   it.only('selecionar funcionario',)
   //cy.get('a.chosen-single').select('Fixter');
   
   cy.get('a.chosen-single').click() 
   cy.xpath('//li[contains(text(),"Fixter")]').click()
   
   it.only('preencher limite de credito',)
   cy.get('#field-creditLimit').type('200')

   it.only('clicar em salvar',)
   cy.get('#form-button-save').click();
   
  it.only('trazer mensagem de sucesso',)
  cy.contains('#report-success', 'Your data has been successfully stored into the database. Edit Customer or Go back to list')
 
  it.only('Clicar em voltar para a lista',)
  cy.get('[href="/v1.x/demo/bootstrap_theme_v4/"]').click();
  
  it.only('Clicar em pesquisar nome',)
  cy.get(':nth-child(3) > .form-control').type('Teste Sicred');
  
  it.only('Clicar em caixa de seleção',)
  cy.xpath('//*[@type="checkbox"]').check();
  
  it.only('Clicar em deletar',)
  cy.get('.no-border-left > .floatL > .btn > .el').click(); 
    
  
  it.only('Validar a mensagem',)
  cy.contains('.alert-delete-multiple', 'Are you sure that you want to delete those ');
  
  it.only('Clicar em deletar',)
  cy.get('.delete-multiple-confirmation > .modal-dialog > .modal-content > .modal-footer > .btn-danger').click();
  
  it.only('Trazer mensagem de sucesso',)
  cy.get('[data-growl="message"] > p').contains('Your data has been successfully deleted from the database');
  
  cy.exec('taskkill /F /IM cypress.exe')
})

})

 
import { HomePage } from "./pages/LTIM_HomePage";
import { lifeSciences } from "./pages/LTIM_LifeSciencesPage";


describe('Assignment1', () => {

  const home_page = new HomePage();
  const life_sciences_page = new lifeSciences();

  it('Validate and fill the form', () => {
    //cy.visit('https://www.ltimindtree.com')
    home_page.homePage();
    
    //cy.get('#onetrust-accept-btn-handler').click();
    home_page.acceptCookies();

    // cy.get('#avia-menu > #menu-item-28490 > [title="Industries"] > .avia-menu-text')
    // .invoke('show').click();
    home_page.menuIndustries();

      cy.wait(5000);
      // cy.contains('Life Sciences').trigger('mouseover').click({force: true});

      // cy.get('[style="display: block; opacity: 1; visibility: visible;"] > #menu-item-28519 > a')
      // .trigger('mouseover').click({force: true});
    home_page.selectOptionLifeSciences();

      //cy.get('#wpcf-custom-btn-1').invoke('show').click();
      life_sciences_page.submitBtn();

      // cy.get(':nth-child(1) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip')
      // .should('have.text', 'The field is required.');
      // cy.get(':nth-child(2) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip')
      // .should('have.text', 'The field is required.');
      // cy.get(':nth-child(3) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip')
      // .should('have.text', 'The field is required.');
      // cy.get(':nth-child(4) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip')
      // .should('have.text', 'The field is required.');
      // cy.get('#lets_meet_blog > .row.first > :nth-child(1) > :nth-child(5) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-form-control')
      // .should('not.to.have.text', 'The field is required.');
      // cy.get(':nth-child(6) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip')
      // .should('have.text', 'The field is required.');
      // cy.get('.privacycheck > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip')
      // .should('have.text', 'The field is required.');
      life_sciences_page.mandatoryFieldsValidation();

    
      // cy.get(':nth-child(1) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip')
      // .type('Manoj');
      // cy.get(':nth-child(2) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip')
      // .type('Bhagwat');
      // cy.get(':nth-child(3) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip')
      // .type('manoj@bhagwat.com');
      // cy.get(':nth-child(4) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip')
      // .type('LTIM');
      // cy.get('#lets_meet_blog > .row.first > :nth-child(1) > :nth-child(5) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-form-control')
      // .type('Guest User');

      // cy.get('#lets_meet_blog > .row.first > :nth-child(1) > :nth-child(6) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-form-control')
      // .select(203).invoke('val').should('deep.equal', 'Zimbabwe');
      
      // cy.get('#lets_meet_blog > .row.first > :nth-child(1) > :nth-child(6) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-form-control')
      // .select('Denmark');

      // cy.get('#lets_meet_blog > .row.text-center > .col-md-12 > .privacycheck > .wpcf7-form-control-wrap > .wpcf7-form-control > .wpcf7-list-item > input')
      // .click();
    life_sciences_page.dropdownValidation();
    life_sciences_page.formFilling();


      cy.end();
  })
})
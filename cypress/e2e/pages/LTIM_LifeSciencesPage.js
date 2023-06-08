export class lifeSciences{

    formSubBtn = '#wpcf-custom-btn-1';

    formFirstNm = ':nth-child(1) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip';
    formLastNm = ':nth-child(2) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip';
    formEmail = ':nth-child(3) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip';
    fromCompNm = ':nth-child(4) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip';
    formMessage = '#lets_meet_blog > .row.first > :nth-child(1) > :nth-child(5) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-form-control';
    formCountry = ':nth-child(6) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip';
    formCheckbox = '.privacycheck > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip';

    formEnterFirstNm = ':nth-child(1) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip';
    formEnterLastNm = ':nth-child(2) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip';
    formEnterEmail = ':nth-child(3) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip';
    formEnterCompNm = ':nth-child(4) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-not-valid-tip';
    formEnterMessage = '#lets_meet_blog > .row.first > :nth-child(1) > :nth-child(5) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-form-control';
    formSelectCountry = '#lets_meet_blog > .row.first > :nth-child(1) > :nth-child(6) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-form-control';
    formSelectCheckbox = '#lets_meet_blog > .row.text-center > .col-md-12 > .privacycheck > .wpcf7-form-control-wrap > .wpcf7-form-control > .wpcf7-list-item > input';
    
    dropdownBox = '#lets_meet_blog > .row.first > :nth-child(1) > :nth-child(6) > .form-group > p > label > .wpcf7-form-control-wrap > .wpcf7-form-control';

    submitBtn(){
        cy.get(this.formSubBtn).invoke('show').click();
    }

    mandatoryFieldsValidation(){
        cy.get(this.formFirstNm)
        .should('have.text', 'The field is required.');
        cy.get(this.formLastNm)
        .should('have.text', 'The field is required.');
        cy.get(this.formEmail)
        .should('have.text', 'The field is required.');
        cy.get(this.fromCompNm)
        .should('have.text', 'The field is required.');
        cy.get(this.formMessage)
        .should('not.to.have.text', 'The field is required.');
        cy.get(this.formCountry)
        .should('have.text', 'The field is required.');
        cy.get(this.formCheckbox)
        .should('have.text', 'The field is required.');
    }

    formFilling(){
        cy.get(this.formEnterFirstNm)
        .type('Manoj');
        cy.get(this.formEnterLastNm)
        .type('Bhagwat');
        cy.get(this.formEmail)
        .type('manoj@bhagwat.com');
        cy.get(this.formEnterCompNm)
        .type('LTIM');
        cy.get(this.formEnterMessage)
        .type('Guest User');
          cy.get(this.formSelectCountry)
        .select('Denmark');
          cy.get(this.formSelectCheckbox)
        .click();
    }

    dropdownValidation(){
        
        cy.get(this.dropdownBox)
        .select(203).invoke('val').should('deep.equal', 'Zimbabwe');

    }
}
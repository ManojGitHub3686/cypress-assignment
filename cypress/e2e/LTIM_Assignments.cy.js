import { HomePage } from "./pages/LTIM_HomePage";
import { lifeSciences } from "./pages/LTIM_LifeSciencesPage";
import { searchForNordea } from "./pages/LTIM_Search";

const home_page = new HomePage();
const search_text = new searchForNordea();
const life_sciences_page = new lifeSciences();

describe('Cypress Assignments', () => {

    beforeEach(function () {

        home_page.homePage();
        home_page.acceptCookies();

    })

    it('Validate and fill the form', () => {

        home_page.menuIndustries();
        home_page.selectOptionLifeSciences();
        life_sciences_page.submitBtn();
        life_sciences_page.mandatoryFieldsValidation();
        life_sciences_page.dropdownValidation();
        life_sciences_page.formFilling();


    });


    it('Search and Validate text', () => {
        
        search_text.searchText();
        search_text.validateSearchResult();
        search_text.validateNewBrowserTabText();
    });
});
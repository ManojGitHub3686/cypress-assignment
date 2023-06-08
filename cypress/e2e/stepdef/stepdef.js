import { Given, When, and, Then } from "cypress-cucumber-preprocessor/steps";
//import { HomePage } from "./pages/LTIM_HomePage";
import { HomePage } from "../pages/LTIM_HomePage";
//import { lifeSciences } from "../pages/LTIM_LifeSciencesPage";
import { lifeSciences } from "../pages/LTIM_LifeSciencesPage";
//import { searchForNordea } from "./pages/LTIM_Search";
import { searchForNordea } from "../pages/LTIM_Search";

const home_page = new HomePage();
const search_text = new searchForNordea();
const life_sciences_page = new lifeSciences();

Given ("User visit LTIMindteee webpage and accept cookies", () =>{

    home_page.homePage();
    home_page.acceptCookies();
});
When ("User navigate to Life Sciences section", () =>{

    home_page.menuIndustries();
    home_page.selectOptionLifeSciences();
});
Then ("User validate and fill Reach Us form", () =>{

    life_sciences_page.submitBtn();
    life_sciences_page.mandatoryFieldsValidation();
    life_sciences_page.dropdownValidation();
    life_sciences_page.formFilling();
});

When ("User Search and validate the result", () =>{

    search_text.searchText();
    search_text.validateSearchResult();
});
Then ("User validate text from new tab", () =>{

    search_text.validateNewBrowserTabText();
});
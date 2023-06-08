Feature: LTIMindteee Web Page Testing

Scenario: Validate and fill the form

    Given User visit LTIMindteee webpage and accept cookies
    When User navigate to Life Sciences section 
    Then User validate and fill Reach Us form


Scenario: Search and Validate text

    Given User visit LTIMindteee webpage and accept cookies
    When User Search and validate the result
    Then User validate text from new tab
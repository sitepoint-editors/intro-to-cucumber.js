Feature: Addition
    Scenario: Add numbers
        Given I start with 0
        When I add the following numbers:
            | 1 |
            | 2 |
            | 3 |
            | 4 |
        Then I end up with 10    

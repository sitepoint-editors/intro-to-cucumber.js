Feature: Addition
    Background:
        Given I start with 1

    Scenario: 1 + 0
        When I add 0
        Then I end up with 1

    Scenario: 1 + 1
        When I add 1
        Then I end up with 2


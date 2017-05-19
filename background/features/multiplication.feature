Feature: Multiplication
    Background:
        Given I start with 1

    Scenario: 1 * 0
        When I multiply by 0
        Then I end up with 0

    Scenario: 1 * 1
        When I multiply by 1
        Then I end up with 1

    Scenario: 2 + 2
        Given I start with 2
        When I multiply by 2
        Then I end up with 4


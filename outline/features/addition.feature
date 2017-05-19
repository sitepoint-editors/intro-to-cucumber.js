Feature: Addition
    Scenario Outline: <a> + <b>
        Given I start with 1
        When I add 0
        Then I end up with 1
    
    Examples:
      | a | b | answer |
      | 1 | 0 | 1      |
      | 1 | 1 | 2      |

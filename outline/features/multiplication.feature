Feature: Multiplication

    Scenario Outline: <a> * <b>
        Given I start with <a>
        When I multiply by <b>
        Then I end up with <answer>

    Examples: Simple
        | a | b | answer |
        | 1 | 0 | 0      |
        | 1 | 1 | 1      |

    Examples: Squares
        | a | b | answer |
        | 2 | 2 | 4      |
        | 3 | 3 | 9      |

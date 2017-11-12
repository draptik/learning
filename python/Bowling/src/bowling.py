from typing import Callable, Tuple


class Bowling(object):
    def __init__(self):
        self.rolls = []

    def roll(self, pins: int) -> None:
        self.rolls.append(pins)

    @property
    def get_score(self) -> int:
        score, ball_index = 0, 0
        for frame in range(0, 10):
            score, ball_index = self.score_frame(ball_index, score)
        return score

    def score_frame(self, ball_index: int, score: int) -> (int, int):
        ball_index, score = self.get_scoring_function(ball_index)(score)
        return score, ball_index

    def get_scoring_function(self, ball_index):
        rules = (
            (self.is_strike, self.score_strike),
            (self.is_spare, self.score_spare),
            (self.otherwise, self.score_normal_frame),
        )

        rule = filter(lambda r: r[0](ball_index) is True, rules)
        found = next(rule)
        return found[1](ball_index)

    def is_strike(self, ball_index: int) -> bool:
        return self.get_ball_points(ball_index) == 10

    def is_spare(self, ball_index: int) -> bool:
        return self.get_frame_score(ball_index) == 10

    def otherwise(self, ball_index):
        return True

    ScoreFunction = Callable[[int], Tuple[int, int]]

    def score_strike(self, ball_index: int) -> ScoreFunction:
        return lambda score: (ball_index + 1, score + 10 +
                              self.get_ball_points(ball_index + 1) +
                              self.get_ball_points(ball_index + 2))

    def score_spare(self, ball_index: int) -> ScoreFunction:
        return lambda score: (ball_index + 2, score + 10 + self.get_ball_points(ball_index + 2))

    def score_normal_frame(self, ball_index: int) -> ScoreFunction:
        return lambda score: (ball_index + 2, score + self.get_frame_score(ball_index))

    def get_frame_score(self, ball_index: int) -> int:
        return self.get_ball_points(ball_index) + self.get_ball_points(ball_index + 1)

    def get_ball_points(self, ball_index):
        return self.rolls[ball_index] if len(self.rolls) > ball_index else 0

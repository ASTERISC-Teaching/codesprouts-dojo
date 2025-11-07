import os
os.chdir("/challenge") # So that libraries can load

import random
random.seed(42)


class PacmanRewards:

    @staticmethod
    def perMove():
        return 0

    @staticmethod
    def onEatingFood():
        return 0

    @staticmethod
    def onEatingGhost():
        return 0

    @staticmethod
    def onWin():
        return 0

    @staticmethod
    def onLoss():
        return 0


normalRuns = 10
trainingRuns = 2000
grid = "smallGrid"
# grid = "customGrid"
# graphics = "null"
graphics = "text"
# graphics = "gui"

if __name__ == "__main__":
    from pacmanRL.run_helper import run

    run(PacmanRewards(), normalRuns, trainingRuns, grid, graphics)

import os
import sys

sys.path.extend([os.path.join(os.path.dirname(__file__), ".")])

import pacman

sys.path.extend([os.path.join(os.path.dirname(__file__), "..")])


def run(rewards, N_runs, N_training, grid, graphics):
    args = pacman.readCommand(
        [
            "-p",
            "PacmanQAgent",
            f"--numGames={N_runs + N_training}",
            f"--layout={grid}",
            f"--numTraining={N_training}",
        ]
    )
    args["rewardfn"] = rewards
    args["graphics"] = graphics
    return pacman.runGames(**args)

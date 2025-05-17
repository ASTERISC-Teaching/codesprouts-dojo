Welcome! You’ll train Pac-Man by changing reward values. 

Hit the **Start** button and select the **GUI Desktop Workspace** option when it pops up.

When you start, two windows open:
- A text editor showing **mysettings.py** (where you edit rewards)
- A terminal window (where you run the simulation)

## How to Run

In the terminal window, type:

    python mysettings.py

and press Enter. Pac-Man learns based on the numbers you set in **mysettings.py**.

## What You Can Change

In the **mysettings.py** file there are 4 important rewards you can tweak (technically there is also onEatingGhost, but our examples are not set up for eating ghosts):

- `perMove()`
  Reward Pac-Man gets each move.
- `onEatingFood()`
  Reward for eating a dot.
- `onWin()`
  Reward for winning.
- `onLoss()`
  Reward for losing.
  
You can change the rewards by editing the numbers with the **return** in front of them.

## What to Do

Try your best to make Pac-Man learn by tweaking the rewards.
  
## Bonus Challenge (Advanced)

What if we want Pac-Man to learn a more challenging problem? If your Pac-Man AI already learns well on the simple starting example, we can see how well the rewards will hold up in a more difficult example with two ghosts. 

We can do this by

1. **Changing the grid:**
   
   Change **grid** from 
   
       grid = "smallGrid"

   to

       grid = "customGrid"

2. **Giving Pac-Man more training time:**

   Change **trainingRuns** from
   
       trainingRuns = 2000

   to
       
       trainingRuns = 40000

   Our problem is more challenging now, so it takes Pac-Man longer to learn everything he needs to from the simulation, so we increase the number of training runs from 2000 to 40000 (this takes about 10–15 minutes to fully run).

3. **(Optional) Watching more test runs after training:**

   Change **normalRuns** from
   
       normalRuns = 10
       
   to

       normalRuns = 100

   This is just so that in case you want to leave your computer running while you do something else, you can come back and see how Pac-Man is doing without missing the results! It's easy to miss the final result when we're only having Pac-Man do 10 runs after training.
   
If you did a good job we will end up with a decent, but not perfect Pac-Man AI. It will do really well sometimes, and other times it will still be a little silly. A perfect AI would need even more training ... or a different training algorithm. But that isn't something you need to worry about for now :).

**Note:** Some of the code is actually taken from one of our old college assignments, so don’t worry if some parts feel mysterious at first. Machine learning is all about exploration! You tweak settings, watch what your AI learns, and then adjust to make it learn **even better**. Keep experimenting, asking questions, and enjoying the process! 


**Have fun teaching Pac-Man!**

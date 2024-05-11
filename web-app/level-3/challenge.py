print ("Desert CodeSprouts (Task 3)")

plaintext = "party at main street"
user_plaintext = input('What is the plaintext? (all lowercase letters and no "!") \n')

if (plaintext == user_plaintext):
    f = open("/home/hacker/forbidden/flag", "r")
    print ("Correct!")
    print ("The flag is: ", f.read())
else:
    print ("Sorry, that's wrong. Please try again!\n")

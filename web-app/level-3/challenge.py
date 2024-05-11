print ("Desert CodeSprouts (Task 3)")

fp = open ("/home/hacker/forbidden/plaintext")
plaintext = fp.read()
user_plaintext = input('What is the plaintext?\n')

if (plaintext == user_plaintext):
    f = open("/home/hacker/forbidden/flag", "r")
    print ("Correct!")
    print ("The flag is: ", f.read())
else:
    print ("Sorry, that's wrong. Please try again!\n")

plaintext = "party on main street"
user_plaintext = input('What is the plaintext?\n')

if (plaintext == user_plaintext):
    f = open("/home/hacker/forbidden/flag", "r")
    print ("The flag is: ", f.read())
else:
    print ("Sorry, the plaintext is wrong. Try again!\n")

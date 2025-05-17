# Welcome to the CIA Challenge Module!

In this challenge, we will be exploring the 3 core principles of cybersecurity ((C)onfidentiality, (I)ntegrity and (A)vailability), via 3 challenges.

### Instructions
After you launch each challenge, click on the GUI desktop option to start the challenge, and then go to http://localhost:8000/ to start the activity.

In all the 3 challenges, you will be on the lookout for a flag that looks something like this: 
Once you complete each challenge, you should see a window pop up with the flag on your browser.

## Confidentiality: Breaking the Substitution Cipher

You have intercepted a heavily encrypted message, and you need to decrypt it without having access to the encrytpion key. What you do have, is knowledge that the Substitution Cipher was used for encryption. Your task is to break the substitution cipher and decrypt the message using frequency analysis.

You are given a web interface with the tools necessary to perform the analysis, for eg:- a frequncy analysis table that counts the frequency of words in the ciphertext, a table to construct a key, and a way to decrypt the ciphertext using your key.

As you keep constructing the key correctly, more and more of the decrypted ciphertext will start to make sense.

Once you have the entire ciphertext correctly decrypted, you need to submit it in the text box at the bottom to get the PWN college flag.

## Integrity: Finding a Hash Collision

In this challenge, you are given two text boxes. Any text that you input into the first box, will be processed by a hash function and the hash output will be displayed in the second text box. Your task is to 1. reverse engineer the hash function by trying different inputs, 2. Copy pasting the decrypted ciphertext from the first challenge, and modifying it carefully such that you misdirect the Black Dawn's operatives, while maintaining the hash.

## Availability: DoS attack

In this challenge, we will be launching a DoS attack on the Black Dawn's command server. You are given a python sandbox to execute custom python code in the broswer.
You task is to send a lof of HTTP requests to the comamnd server. The command server is located at { address: "localhost", port: 8080 }.

Note: use the send_http_request() function provided to you to send the request.

You should see a pop up window with the flag once the server is down!

Thank you for playing the CIA game, and preventing the Black Dawn from taking over the city of Megalopolis! 

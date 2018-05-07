# jsCipher

## What to do and how it works : 
It's a [Vigenère cipher](http://crypto.interactive-maths.com/vigenegravere-cipher.html) re-creation, except that your key has to be of the same length that your message, which makes it a little less vulnerable to the [Kasiski analysis](http://crypto.interactive-maths.com/kasiski-analysis-breaking-the-code.html), except if you create a pattern in your key on purpose.

To encrypt, just enter your message(doesn't handle spaces and special chars for now) and your key and click on encrypt, it will divide each letter in the message and the key into an array of letters and then add them together. To decrypt, paste the encrypted message you got and enter the same key you used.

## [Try it out](https://yadrychnikovnicolay.github.io/jsCipher/)


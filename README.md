![README.doc](readme.doc/github.deploy.pdf)
Slots
Project Goals

Slots is a memory game that encourages the user to remember a temporarily shown sequence of numbers. The user must key the numbers in the exact sequence that they appeared.

User Goals

Play a fun game that challenges the user’s memory.
Controls are easy to understand.
Users range from 5 and above.
Business and Development Goals

To provide a fun memory game that is easy to play.
To challenge the memory of users aged 5 and over.
User Stories

Appealing home page that has a background image of numbers in slots.
Navigation bar that features a Home, Instructions, and Feedback.
Users will see a “Play” button located in the centre of the page that will take them to the main game.
Users can also access the play button via the “Instructions” page.
The main game will have the following:
A “New Game”, “Submit” and “Continue” button.
4 retangles (slots) in the centre of the screen.
A Score box (to tally the users correct answers)
3 light bulbs (representative of the amount of wrong answers the user can give).
The user will first be presented with the “New Game” button that will disappear and start a new game when clicked.
The main game will have 4 slots that will be populated with a random sequence of numbers. The numbers will be shown for a total of 3 seconds before being hidden.
User will repeat the sequence in order of appearance and press the “Submit” button.
Users that give a correct answer will receive a message “Congratulations your answer is correct” and 1 point will be added to their score.
Users that give the wrong answer will receive the message “You have given the wrong answer” and one of light bulbs will disappear.
Once the user acknowledges the message the “Continue” button will appear. On clicking this button users will be able to continue the game.
As the user progresses through the game, the time the numbers are shown will decreases, giving the user less time to remember.
Once the users light bulbs have all disappeared the game is over and the user will be show a “Game Over” message.
Once the user acknowledges to the message the new game button will reappear.
Features

Page Consistency
Each page has the “Slots” header in the top left corner of the page. Clicking on the text transfers the user to the top of the home page.
Tablet users will view the header “Slots” in the top left corner of the page. Clicking on the text will refresh the home page.
Mobile users will view the header “Slots” in the centre of the page. Clicking on the text will refresh the home page.
Navigation Bar
Each page will have a navigation bar containing 3 options Home, Instructions, and Feedback.
On clicking the “Instructions” tab the user will be transported to view instructions on how to play the game.
On clicking the “Feedback” tab the user will be transported a page where they could give feedback on their experience playing the game.
On mobile and tablet devices, users can access the navigation bar via the hamburger icon.
Users playing on a tablet or mobile devices will interactive via touch screen.
Users of desktop will use the keyboard.
Home Page
Background Image featuring lots of numbers.
The “Play” button is located in the centre of the screen.
The “Play” button opens a new tab to the main game.
Instructions Page
Step by step instruction on how to play the game.
Another “Play” button opens tab to the main game.
Feedback Page
Contact form to be completed by the user to give feedback about their experience with the game.
Future Features

As user progresses through the game the game generate more slots to memorise.
Users will be given the option of a leaderboard.
Users will be given a multi-player option.
User will be given the option and flash mode (the slot sequences will be random).
Bonus points
Completion of the feedback form will email the owner directly.
Typography and Colour

The font for this application is Roboto which suits the number’s theme of this application.
Header for Home, Instructions and Feedback pages - background-color: rgba(9, 9, 9, 0.1);
Footer container for Home, Instructions and Feedback - background-color: rgba(0, 0, 0, 0.1);
Container for Instructions page - background-color: rgb(0, 0, 0, 0.8);
Container for Feedback page - background-color: rgba(9, 8, 8, 0.5);
Font color - #fff and black
Buttons - rgb(255, 47, 0); rgb(103, 255, 8); rgb(255, 242, 0); rgb(128, 252, 45); rgb(0, 128, 0); rgb(192, 7, 7); rgb(255, 0, 0); rgb(245, 110, 0); rgb(245, 217, 78);
Wireframes
Check README.doc folder for wireframe images.

Technology

Codeanywhere to build the repository
GitHub to deploy the repository
W3C to validate the HTML and CSS code
w3schools
mdn web docs
Balsamiq for creating the wireframe
Font Awesome for the icons
Google fonts to search for the right fonts for the website
Bootstrap to create forms and buttons.
Chrome Developer Tools for testing.
Testing

Code Validation (check README.docs for reports)

<https://jigsaw.w3.org/css-validator/> - CSS
<https://validator.w3.org/> - HTML
<https://www.jslint.com/> - JavaScript
Google Lighthouse - Performance
Test Cases - Check README.doc for testcases.pdf

Fixed bugs - Check README.doc for bugs.pdf

Support screens and browser - Google Chrome to develop and test my website.

1024 x 1366
390 x 844
Check README.doc for device.testing.pdf
Deployment

Gitpod: Check README.doc to view screenshots

Go to [https://github.com/2ndborn/slots-project]
Click on settings.
Scroll down and click on pages on the left-hand side.
Scroll down to Build and deployment.
Where it says “none” change to “main”.
Press “Save” to deploy to GitHub.
Codeanywhere: Go to README.doc to view screenshots

Go to [https://app.codeanywhere.com/]
Workspaces section click on “2ndborn-slots-project-d85y6w40kn”.
Once the page is loaded open a new terminal and type “python3 -m http.server”. Then press Enter.
Options to open the preview page or the browser will be shown. Click on the browser.
The browser will open.

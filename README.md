# Slots

## Project Goals

Slots is a memory game that encourages the user to remember a temporarily shown sequence of numbers. The user must key the numbers in the exact sequence that they appeared.

## User Goals

- Play a fun game that challenges the user’s memory.
- Controls are easy to understand.
- Users range from 5 and above.

## Business and Development Goals

- To provide a fun memory game that is easy to play.
- To challenge the memory of users aged 5 and over.

## User Stories

-	Appealing home page that has a background image of numbers in slots.
-	Navigation bar that features a Home, Instructions, and Feedback.
-	Users will see a "Play" button located in the centre of the page that will take them to the main game.
-	Users can also access the play button via the "Instructions" page.
-	The main game will have the following:
	-	A "New Game", "Submit" and "Continue" button.
	-	4 retangles (slots) in the centre of the screen.
	-	A Score box (to tally the users correct answers)
	-	3 light bulbs (representative of the amount of wrong answers the user can give).
-	The user will first be presented with the "New Game" button that will disappear and start a new game when clicked. 
-	The main game will have 4 slots that will be populated with a random sequence of numbers.  The numbers will be shown for a total of 3 seconds before being hidden.
-	User will repeat the sequence in order of appearance and press the "Submit" button.
-	Users that give a correct answer will receive a message “Congratulations your answer is correct” and 1 point will be added to their score.
-	Users that give the wrong answer will receive the message "You have given the wrong answer" and one of light bulbs will disappear.
-	Once the user acknowledges the message the "Continue" button will appear. On clicking this button users will be able to continue the game.
-	As the user progresses through the game, the time the numbers are shown will decreases, giving the user less time to remember.
-	Once the users light bulbs have all disappeared the game is over and the user will be show a "Game Over" message. 
-	Once the user acknowledges to the message the new game button will reappear.

**User Story Test Case**

![Homepage](readme.doc/homepage.png)

-	Clicking on the “Slots” logo and the Home navigation button will refresh the page. Clicking on the Instructions navigation button will take you to the Instructions page.

![Instructions](readme.doc/instructionpage.png)
-	Clicking on the Feedback navigation button will take you to the feedback page.

![Feedback](readme.doc/feedbackpage.png)
-	Pressing the “Play” button will take you the main game.

![Main Game](readme.doc/gamepage.png)

-	Clicking on the social media icons will transport the user to the Twitter, Facebook and Instagram pages.

![Social Media](readme.doc/socialmedialinks.png)

**Test Case Instructions Page**

-	On the Instruction the user will see 7 instruction points explaining how to play the game.

![Instructions](readme.doc/instructionpage.png)

-	Below the instructions the user will see a red play button the takes them to the main game. 

![Game Page](readme.doc/gamepage.png)

-	Pressing the Logo, Home, Feedback and Social Media button transports the user to their respective pages. 

![Home Page](readme.doc/homepage.png) ![Feedback](readme.doc/feedbackpage.png) ![Social Media](readme.doc/socialmedialinks.png)

**Test Case Feedback Page**

-	On the feedback page the user will see an opaque box with a titled question “How Are You Finding Slots?”
-	Beneath the title the user will see the feedback form which they can complete.
-	Beneath the form the user will see a red “Send Request” button. Pressing the button does nothing at this stage but it will be included in the future features.

![Feedback](readme.doc/feedbackpage.png)

-	Pressing the Logo, Home, Feedback and Social Media button transports the user to their respective pages.

![Home Page](readme.doc/homepage.png) ![Instructions](readme.doc/instructionpage.png) ![Social Media](readme.doc/socialmedialinks.png)

**Test Case Main Game**

- The user will see and opaque black box with 2 boxes, a green “New Game” button, a score box and 3 light bulbs.

![Game Page](readme.doc/gamepage.png)

- Clicking on the “New Game” button starts the game generating 2 random numbers in the boxes.

![Random Numbers](readme.doc/rannumber.png)

- After 1.5 seconds the number disappear and a the user can now enter the numbers they just saw back in the boxes.

![Remove Numbers](readme.doc/remnumber.png)

- Once the user enters a number into the first box, the cursor will move on to the next box.

![First Number](readme.doc/firstnumber.png)

- The user enters the other number and the “Submit” button will appear for the user to press. If it is the correct number, the user is given a message. Correct answer says “Congratulations! That was the correct answer” and will add one point to the score. The “Submit” button is replaced by the continue button and the boxes are disabled. 

![Second Number](readme.doc/secondnumber.png) ![Continue](readme.doc/continue.png)

- Pressing the “continue” button begins a new turn generating 2 more random numbers. 

![More Random Number](readme.doc/morerandom.png)

- If the user gives a wrong answer the alert messages says “Unfortunately the correct answer was x and y.” One light bulb is then removed from the window. The boxes are again disabled and the “Continue” replaces the “Submit” button. 

![Wrong Answer](readme.doc/newnumber.png)

- Each time the user gives and incorrect answer a light bulb is removed from the window. When all the light bulbs are gone the user can the game is over. 

![Life One](readme.doc/lifeone.png)

- When the last answer is given the user is given the message “Game Over” “Play again?” 

![life Two](readme.doc/lifetwo.png)

- If the user presses OK the window is refresh and the user can begin a new game.
- If the player presses cancel the window closes. 

![Game Over](readme.doc/gameover.png)

## Features

-	### Page Consistency
	-	Each page has the “Slots” header in the top left corner of the page. Clicking on the text transfers the user to the top of the home page.
	-	Tablet users will view the header “Slots” in the top left corner of the page. Clicking on the text will refresh the home page.
	-	Mobile users will view the header “Slots” in the centre of the page. Clicking on the text will refresh the home page.
	-	Navigation Bar
		-	Each page will have a navigation bar containing 3 options Home, Instructions, and Feedback.
		-	On clicking the “Instructions” tab the user will be transported to view instructions on how to play the game.
		-	On clicking the “Feedback” tab the user will be transported a page where they could give feedback on their experience playing the game.
		-	On mobile and tablet devices, users can access the navigation bar via the hamburger icon.
- Users playing on a tablet or mobile devices will interactive via touch screen.
- Users of desktop will use the keyboard.
- #### Home Page
	- Background Image featuring lots of numbers.
	- The "Play" button is located in the centre of the screen.
	- The "Play" button opens a new tab to the main game.
-	#### Instructions Page
	-	Step by step instruction on how to play the game.
	-	Another "Play" button opens tab to the main game.
-	#### Feedback Page
	-	Contact form to be completed by the user to give feedback about their experience with the game.

##	Future Features

-	As user progresses through the game the game generate more slots to memorise.
-	Users will be given the option of a leaderboard.
-	Users will be given a multi-player option.
-	User will be given the option and flash mode (the slot sequences will be random).
-	Bonus points
-	Completion of the feedback form will email the owner directly.

## Typography and Colour

- The font for this application is Roboto which suits the number’s theme of this application.
- Header for Home, Instructions and Feedback pages - background-color: rgba(9, 9, 9, 0.1);
- Footer container for Home, Instructions and Feedback - background-color: rgba(0, 0, 0, 0.1);
- Container for Instructions page - background-color: rgb(0, 0, 0, 0.8);
- Container for Feedback page - background-color: rgba(9, 8, 8, 0.5);
- Font color - #fff and black
- Buttons - rgb(255, 47, 0); rgb(103, 255, 8); rgb(255, 242, 0); rgb(128, 252, 45); rgb(0, 128, 0); rgb(192, 7, 7); rgb(255, 0, 0); rgb(245, 110, 0); rgb(245, 217, 78);

## Wireframes

![Wireframes](readme.doc/wf.Home.png)
![Wireframes](readme.doc/wf.inst.png)
![Wireframes](readme.doc/wf.feedback.png)

## Technology

- [Codeanywhere](https://app.codeanywhere.com/) to build the repository.
- [GitHub](https://github.com/Code-Institute-Org/ci-full-template) to deploy the repository.
- [W3C](https://validator.w3.org/) to validate the HTML and CSS code
- [jslint](https://www.jslint.com/) to validate JavaScript to validate the JavaScript code.
- [w3schools](https://www.w3schools.com/jsreF/prop_text_disabled.asp)
- [MDN web docs](https://developer.mozilla.org/en-US/)
- [Balsamiq](https://balsamiq.com/) for creating the wireframe
- [Font Awesome](https://fontawesome.com/v4/) for the icons
- [Google fonts](https://fonts.google.com/) to search for the right fonts for the website
- [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/)  to create forms and buttons.
- Chrome Developer Tools for device testing.

## Testing

- ### Code Validation

	- **HTML**
		- ![index.html](readme.doc/index.html.validator.png).
		- ![industruction.html](readme.doc/instruction.html.validator.png).
		- ![feedback.html](readme.doc/feedback.html.validator.png).
		- ![game.html](readme.doc/game.html.validator.png).
	
	- **CSS**
		-	![style.css](readme.doc/style.css.validator.png).
		-	![game.css](readme.doc/game.html.validator.png).

	- **JavaScript**
		
		-	**4 Warnings**
			-	The “for” and “let” have been positioned correctly and do not affect the code after testing.
			-	The unexpected “++” has been placed before oldScore so it adds 1 to the users score. Again after numerous testing the code works perfectly.

			![JSLint](readme.doc/js.test1.png)

		-	**Report: Functions**

			![JSLint](readme.doc/js.test2.png)
		
	-	**Performance Lighthouse**.
		-	![index.html](readme.doc/index.html.lighthouse.html).
		![index.lighthouse](readme.doc/index.light.png)
		-	![instruction.html](readme.doc/instruction.html.lighthouse.html).
		![Instruction.lighthouse](readme.doc/inst.light.png)
		-	![feedback.html](readme.doc/feedback.html.lighthouse.html).
		![feedback.lighthouse](readme.doc/feed.light.png)
		-	![game.html](readme.doc/game.html.lighthouse.html).
		![game](readme.doc/game.light.png)


-	**Test Cases** - Used Google Chrome Developer Tools to test my website on the below platforms. 

	-	**Tablet & Mobile Devices**

		-	Main Pages
	
		1024 x 1366 ![1024](readme.doc/1024.png)

		912 x 1368 ![912](readme.doc/912.png)

		820 x 1180 ![820](readme.doc/820.png)

		768 x 1024 ![768](readme.doc/768.png)

		540 x 720 ![540](readme.doc/540.png)

		414 x 720 ![414](readme.doc/414.png)

		390 x 844 ![390](readme.doc/390.png)

		360 x 740 ![360](readme.doc/360.png)

		280 x 653 ![280](readme.doc/280.png)

		-	Game Page

		1024 x 1366 ![game1024](readme.doc/g.1024.png)

		912 x 1368 ![game912](readme.doc/g.912.png)

		820 x 1180 ![game820](readme.doc/g.820.png)

		768 x 1024 ![game768](readme.doc/g.768.png)

		540 x 720 ![game540](readme.doc/g.540.png)

		414 x 720 ![game414](readme.doc/g.414.png)

		390 x 844 ![game390](readme.doc/g.390.png)

		360 x 740 ![game360](readme.doc/g.360.png)

		280 x 653 ![game280](readme.doc/g.280.png)

	-	**Browser Tests**

		-	Chrome

			-	Home 
			
			![Chrome Home](readme.doc/chrome.home.png)
			
			-	Instruction 
			
			![Chrome Instructions](readme.doc/chrome.instruct.png)

			-	Feedback 
			
			![Chrome Feedback](readme.doc/chrome.feed.png)

			-	New Game 
			
			![Chrome New Game](readme.doc/chrome.new.png)

			-	Random Numbers 
			
			![Chrome Random Number](readme.doc/chrome.random.png)

			-	Remove Numbers 
			
			![Chrome Remove Numbers](readme.doc/chrome.remove.png)

			-	Submit Answers 
			
			![Chrome Submit](readme.doc/chrome.submit.png)

			-	Continue Game 
			
			![Chrome Continue](readme.doc/chrome.cont.png)

		-	Edge

			-	Home 
				
				![Edge Home](readme.doc/edge.home.png)
				
				-	Instruction 
				
				![Edge Instructions](readme.doc/edge.instruct.png)

				-	Feedback 
				
				![Edge Feedback](readme.doc/edge.feed.png)

				-	New Game 
				
				![Edge New Game](readme.doc/edge.new.png)

				-	Random Numbers 
				
				![Edge Random Number](readme.doc/edge.random.png)

				-	Remove Numbers 
				
				![Edge Remove Numbers](readme.doc/edge.remove.png)

				-	Submit Answers 
				
				![Edge Submit](readme.doc/edge.submit.png)

				-	Continue Game 
				
				![Edge Continue](readme.doc/edge.cont.png)

		-	Firefox

			-	Home 
				
			![Firefox Home](readme.doc/fire.home.png)
			
			-	Instruction 
			
			![Firefox Instructions](readme.doc/fire.instuct.png)

			-	Feedback 
			
			![Firefox Feedback](readme.doc/fire.feed.png)

			-	New Game 
			
			![Firefox New Game](readme.doc/fire.new.png)

			-	Random Numbers 
			
			![Firefox Random Number](readme.doc/fire.random.png)

			-	Remove Numbers 
			
			![Firefox Remove Numbers](readme.doc/fire.remove.png)

			-	Submit Answers 
			
			![Firefox Submit](readme.doc/fire.submit.png)

			-	Continue Game 
			
			![Firefox Continue](readme.doc/fire.cont.png)

		-	Opera

			-	Home 
				
			![Opera Home](readme.doc/op.home.png)
			
			-	Instruction 
			
			![Opera Instructions](readme.doc/op.instruct.png)

			-	Feedback 
			
			![Opera Feedback](readme.doc/op.feed.png)

			-	New Game 
			
			![Opera New Game](readme.doc/op.new.png)

			-	Random Numbers 
			
			![Opera Random Number](readme.doc/op.random.png)

			-	Remove Numbers 
			
			![Opera Remove Numbers](readme.doc/op.remove.png)

			-	Submit Answers 
			
			![Opera Submit](readme.doc/op.submit.png)

			-	Continue Game 
			
			![Opera Continue](readme.doc/op.cont.png)

- **Test Procedure**
	- Click ![Test Procedure](readme.doc/test.procedure.pdf) to view the test procedure.
-	**Fixed bugs** - Click![Bugs](readme.doc/bugs.fixed.pdf) to view bugs.pdf

## Deployment

- GitHub: Click![Deployment](readme.doc/github.deploy.pdf) to view screenshots.
	1.	Go to [GitHub-Slots Project](https://github.com/2ndborn/slots-project)
	2.	Click on **settings**.
	3.	Scroll down and click on **pages** on the left-hand side.
	4.	Scroll down to **Build and deployment**.
	5.	Where it says **“none”** change to **“main”**.
	6.	Press **“Save”** to deploy to GitHub.

- Click ![Codeanywhere](readme.doc/codeanywhere.pdf) to view screenshots
	1.	Go to [Codeanywhere](https://app.codeanywhere.com/)
	2.	Workspaces section click on **“2ndborn-slots-project-d85y6w40kn”**.
	3.	Once the page is loaded open a new terminal and type **“python3 -m http.server”**. Then press **Enter**.
	4.	Options to open the preview page or the browser will be shown. Click on the **browser**.
	5.	The browser will open and reveal the web page.



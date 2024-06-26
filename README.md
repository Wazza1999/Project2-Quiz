# Gotta Quiz Them All 

Gotta quiz them all is a online quiz designed to test your knowledge on all things pokemon. This site hopes to demonstrate how pure Javascript works in a real-world context. Gotta Catch Them All is a fully responsive Javascript quiz game that will allow users to have fun putting their knowledge to the test to see whether or not they have what it takes to become a Pokemon Master!!!



![Gotta Quiz Them All shown on a variety of different screens](media/devices.JPG)

## Design
As the pages of the site have a background image, I wanted to keep the colour scheme used on the site quite small so as to not overwhelm users.
I felt the white container with the blue text was the best way to see the quiz without any eye straining.

In my css file I have used 8 different colours in my code. 

* I have used #0000ff as the background colour in case the image fails to load

* I have used #fff as the colour for the main container as it makes the contents stand out more

* I have used #333 as the colour for the border of the container 
 
* I have used #001e4d as the colour for the quiz Title as it stands out in fron the of the banner image without appearing too bright in contrast to the background image

* I have used #b8860b as the colour for when you hover over a button as I just think it looks nice

* I have used #008000 as the colour for when you pick the correct answer 

* I have used #8b0000 as the colour for when you pick the incorrect answer

##Typography
Google fonts was used to import the chosen fonts for use in the site.

*For the Page Title I have used the google font Jersey [Jersey-10](https://fonts.google.com/specimen/Jersey+10) as it looks like text you would see in a video game so I thought it was fitting

*For the question and answer font I used the font [Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif]. This wasn't a google font however.

## Imagery 
As the quiz is focused on Pokemon I felt it needed imagery that was also Pokemon related and quite fun to look at much like the games.

## Wireframes
Wireframes were created for mobile, tablet and desktop using balsamiq.
![Main Page](media/wireframes.JPG)
![Score Page](media/wireframes2.JPG)


 
## Features 
The website is comprised of a home page, games page and a score page

All pages on the website are responsive and have:

* A favicon in the browser

![favicon](media/Features/favicon.JPG)

*The title of the site at the top of every page, The title also links back to the home page.

![Title](media/Features/Banner.JPG)

*A score page

![Score Page](media/Features/Score.JPG)

*A next Button

![Next Button](media/Features/Next.JPG)

*The answer buttons

![Answer Buttons](media/Features/answer.JPG)

*Play again? button
![Play again button](media/features/play-again.JPG)

### Existing Features

- __The Gotta Catch Them All Logo and Heading__

-Featured at the top of the quiz, the logo and heading are easy to see for the user. Upon viewing the page, the user will be able to see the name of the game. 

![Logo](media/pikachu-header.png)

- __The Game Area__

  - This section is where the user will be able to see the questions on the quiz. The user will be able answer the questions by picking one of the four answers in the boxes below the question.
  The quiz will then tell the player whether or not they are correct by highlighting the correct answer in green and the wrong answer in red (if it was picked).

![Game](media/answer.JPG)

- __The Score Area__

  - This section will allow the user to see exactly how many correct and incorrect answers they have provided. 

![score](media/score.JPG)

### Features Left to Implement

- I'd like to be able to implement a feature which lets the player record their highscore and compare it to others that have played the quiz previously. 

## Accessibility
I have been mindful during coding to ensure that the website is as accessible friendly as possible. This has been achieved by:

* Using Semantic HTML

*Using a hover state on all buttons on the site to make it cleat to the user if they are hovering over a button.

*Choosing san-serif font for the site - these fonts are suitable for people with dyslexia

*Ensuring there is sufficient colour contrast throughout the site.
### Unfixed Bugs


## Deployment & Local Deployment

### Deployment
This site is deployed using Github Pages - [Gotta Quiz Them All](https://github.com/Wazza1999/Project2-Quiz)

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://wazza1999.github.io/Project2-Quiz/

### Local Deployment

#### How to Fork

To fork the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Wazza1999/Project2-Quiz](https://github.com/Wazza1999/Project2-Quiz)
3. Click the Fork button in the top right corner.

#### How to Clone
To clone the repository:

1. Log in (or sign up) to Github.
2. Go to the repository for this project, [Wazza1999/Project2-Quiz](https://github.com/Wazza1999/Project2-Quiz)
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

## Testing 

Please refer to [Testing.md](testing.md) file for all testing carried out. 

### Known Bugs

*When viewing the web page on the smallest mobile screen the header doesn't seem to fit properly despite a lot of playing around with the code and even trying media queries.

### Credits - Content 

- Questions and Answers were made in ChatGPT.

- The font was taken from google fonts - Jersey 10 was the font used. 

### Credits - Media

- The background photo was taken from this open source site - https://wallpaper-house.com/wallpaper-id-187118.php
- The title photo was taken from - https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0a2c1192-7b12-4ddb-ac55-b677334dab1c/d5r677z-fe33c740-fa5e-4641-9366-70f0e92aeefb.png/v1/fill/w_900,h_472,q_75,strp/pikachu_twitter_header_by_kings1ngh-d5r677z.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8wYTJjMTE5Mi03YjEyLTRkZGItYWM1NS1iNjc3MzM0ZGFiMWMvZDVyNjc3ei1mZTMzYzc0MC1mYTVlLTQ2NDEtOTM2Ni03MGYwZTkyYWVlZmIucG5nIiwid2lkdGgiOiI8PTkwMCIsImhlaWdodCI6Ijw9NDcyIn1dXX0._1qF1WRmsLFx-CfVtiY4AulMsPm2z-8x1fOptdJ5Qgk

### Acknowledgments

I would like to acknowledge the following people:

* Jubril Akolade - My code institute mentor.

* Chloe Timlin - For being a great support and helping me test the website
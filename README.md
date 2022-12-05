# Sketch
## Author: Chiraag Chandarana
## Live: https://chigzzer.github.io/Sketch/
# Description 
A small learning project to design a etch a sketch pad that colours in the grid as you mouseover the squares. The squares are produced via a loop in JavaScript, where majority of this application is produced in. 

The application has three modes: Colours, Rainbow and Opacity. Colour mode, is the default mode where the user can select the colour of their choice to paint on the pad. The Rainbow mode removes the choice of colour selection, but changes colour, in order of the rainbow, every square. The final mode Opacity mode, colours the square with the chosen colour at a low opacity at first mouseover. Every mouseover after darkens the square by 10%. If the square is at max opacity, it will reset it back to 10%.

The ability to resize the pad to three different settings as well as change the grid size via a slider or a input value is also present.

# What I Learnt
* How to obtain readings from a range slider and convert that to display the readings on the webpage.
* How to dynamically change a webpage via adding and removing divs. 
* I understood the order of operation for JavaScript.
* I learnt that bugs will always be present in code, even in the simplest of functions and that every small feature needs to be tested properly.
    * I had a bug in the reset function, that would break the functionality of the application if used in Rainbow mode.
* How to remove event listeners and why removing them is useful. 
* Understood the importance of branching for every new feature.
    * I produced a feature that didn't work and caused the application to fail. It took me a while to return to a functioning application. 
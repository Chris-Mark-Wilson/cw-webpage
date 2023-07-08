# cw-webpage
Example / 'portfolio' webpage started before I came back to course, having just about got a basic feel for react I've continued to further my knowledge with various api use, using a site nav, tabs and some bootstrap components.
It's a constant work in progress that I come back to when I'm not concentrating on learning.

The pictures are my own work and property and are stored on firebase. 

Theres also a little bit of js in css in here with one of the bar graphs done this way, the other one done with inline styling. I find the inline styling much easier to understand and keep track of. The hourly chart (the one displayed for today and tomorrows weather) is the one that uses css in js and imports ``` styles.js``` for styling the bars.

The daily chart, the one used by the 7day range forecast is done with inline styling.

## To-do
- abstract out geolocation functionality to a new component
- include new geolocation component in all tabs in forecast
- pass ```setLat, setLong``` to component from forecast to enable lat and long to be set prior to use by ```fetchWeatherApi```
- edit out exiting 'current' component from site nav, just make the tab 'weather' only
- add nighttime icons functionality to ```objectify.jsx```. The icons are available in 'public' directory, it just needs a bit of a 'what time is it? so what icon do I want?' function in ```objectify.jsx```. 
- upgrade the 7day chart to look better, the functionality works, so make it now look good. Possibly use the blended colours idea from the hourly chart where the tips 'glow' red after 20℃ (remember windowskey+. then Ω for emojis)
- get rid of the css in js, rewrite the hourly chart using inline styling + vanilla css


 # Sort out the CSS 
- mobile first but adapt for full screen viewports, sideways phone etc..
- possibly look into some odd shaped divs or maybe a game or two
- try and get some animations in here somehow, even if its just an ```onClick()``` spinning div...

## Game ideas
- css battleships? cant think how to write that though...
- breakout snake? ball is the snake? gets bigger the more you knock out? kick a hole go through - youre on the next screen, make it a 9x9 board of screens? collect power-ups, avoid the poisonous mushrooms... make the bat work like 'warlord' by atari i.e. it moves all the way round the edge of the screen? use a mouse, make the bat curved..
- sabotage? old zx81 remake? good array based effects...
- css 3d monster maze? any maze? css generated? cant be too difficult?
- some sort of catapult physics based game? possibly 3d?
- a good old text adventure requiring you to solve coding puzzles along the way?
- splat? spectrum remake?


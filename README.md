## Netball-App
My fourth and final General Assembly Project - Netball statistics!
This app allows users (mainly netball teams (Or spectators!)) to effectively track and report their games! After match summary provides a brief break down on how the game went.
## :computer: [Click here](https://netball-stats-43he.onrender.com) to try my app!

## :page_facing_up: About
**How to use the app:**
1. Users will need to sign in (for security purposes)
1. Teams can create their team, with team name, their coaches name, players and preffered positions
2. Start match! Option to enter location to provide information about the weather, could be useful for planning ahead of the match.
3. Spectator to start the match when the siren goes off! Record GA / GS scores or misses, center-pass and intercept data throughout the match.
4. Pause the timer for any timeouts or injuries.
5. Finish the match to be provided with summary of the match.

<!-- <img src="./resources/app_screenshot.png" alt="image of the app preview" width="auto" height="auto"> -->

## :pencil2: Planning & Problem Solving
The planning process for this applicaiton was a steep learning curve for me, I often plan more throughly than I did for this app, instead diving head first into the development stage. Even though I had planned out an initial idea of the database structure it was nothing compared to how it would look towards the end of the project. For future building the data somewhere towards the middle and coding the fit the data structure I believe would be more beneficial as I found myself dropping tables and the database quite often to rememdy my shortcomings.


![image of the user stories for the app](./resources/)

Then the wireframes for the app were put together:
![image of the wireframes for the app](./resources/)
![image of the wireframes for the app](./resources/)


![image of the database relationships for the app](./resources/1-many.png)



## :rocket: Cool tech
- Coding languages: HTML, CSS, JavaScript, SQL.
- Web framework: Express.
- Database related tech: Postgresql, CRUD, RESTful routes.
- Code editor: Visual Studio Code.
- Deployment: Render.
- All the passwords are securely stored through bcrypt hashing and salthing.

## :scream: Bugs to fix :poop:




## :sob: Lessons learnt
- Better planning of database relations and how it will interact with the code I am planning on writing.
- Frequent and succinct git commits assist in telling a clear story. 
- Making notes on each part of the code even if everyone thinks they know what it does. The goal is to make sure we all have the same understanding.
- Always create a new repo branch when working on a new feature or fixing a bug.
- Always delete the branch once the feature is finished to avoid having different branches and getting confused in them.
- When debugging change very small parts of the code, even if it's one line, then console.log it to see if it's changed anything.

## :white_check_mark: Future features
- Users to build a report detailing their statistics over the season.
- Leader table.
- User to search by div (A1, A2 etc.)
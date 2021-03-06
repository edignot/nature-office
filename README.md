# Nature Office

## https://nature-office.herokuapp.com/

![nature office mockup](/natureofficemockup.jpg)

## About

## Built with
*React*, *React Router*, *ES6*, *TDD*, *SCSS*, *MobX*, *Fetch API for receiving 3rd party data*

Nature Office is an appication we built during our time at [Turing School of Software and Design](http://turing.io). The goal for this project, over the course of nine days, was to incorporate a new technology into our application that wasn’t explicitly taught. We chose to learn global state management using MobX. 

## Challenges
Finding documentation and resources on MobX that were consistent was challenging. Given the short turn around time, we had less opportunity to dive deep into the "why" and "how" thing's were and were not working with our MobX implementaion. We ran into issues with using MobX's "inject" in conjunction with React Router. This caused our MobX functionality to not work quite in the way we wanted. Future iterations would address this issue. Another challenge we faced was working with the Google API. It was more complex than APIs we've used on previous projects, although in the end was a success! 

## Setup
1. clone down this repo to desired location
2. `cd` into the new directory
3. run `npm install`
4. run `npm start`
5. Open localhost:3000 in your favorite browser (unless your terminal says otherwise)

## Animation 
![1](/gif.gif)

## User Stories 
### User should be able to

### Login with username, email and enter zipcode.
<img width="1439" alt="1" src="https://user-images.githubusercontent.com/57964291/83582274-57359800-a4fe-11ea-9c25-4d7dbc6e55fc.png">

### See loading page animation if data is loading.
![2](https://media.giphy.com/media/JQpGvS9Qq4cKCQWxO3/source.gif)

### See current weather conditions for entered location and categories.
<img width="1438" alt="3" src="https://user-images.githubusercontent.com/57964291/83582285-5ef53c80-a4fe-11ea-9562-961aa68b8be8.png">

### See all spots for a location when selecting ALL SPOTS menu category.
<img width="1437" alt="4" src="https://user-images.githubusercontent.com/57964291/83582290-5f8dd300-a4fe-11ea-89fa-cf86ab50311d.png">

### See Favorited spots for a location when selecting the FAVORITES menu category.
<img width="1437" alt="5" src="https://user-images.githubusercontent.com/57964291/83582292-61579680-a4fe-11ea-8ef7-45c65f809e01.png">

### Select any spot and see details / have ability to add a new comment about the spot.
<img width="1437" alt="6" src="https://user-images.githubusercontent.com/57964291/83582294-61f02d00-a4fe-11ea-9043-aac623a706f2.png">

<img width="1437" alt="8" src="https://user-images.githubusercontent.com/57964291/83582300-64528700-a4fe-11ea-9eff-cdb9e3a7ff3a.png">

### See a map with all spots tagged. When clicking on red flag- it opens google maps. When clicking on grey- it rerenders page and displays that specific spot details.
<img width="1438" alt="7" src="https://user-images.githubusercontent.com/57964291/83582298-63215a00-a4fe-11ea-9fbd-9290f72ba589.png">

### Add a new spot.
<img width="1435" alt="9" src="https://user-images.githubusercontent.com/57964291/83582301-64528700-a4fe-11ea-8fb0-fa4ac726f83a.png">

### See confirmation message if new spot is successfully added.
<img width="1440" alt="10" src="https://user-images.githubusercontent.com/57964291/83582305-66b4e100-a4fe-11ea-9969-42c7460b82ec.png">

### Navigate to user page and see all favorite spots, logout button, personal info.
<img width="1435" alt="11" src="https://user-images.githubusercontent.com/57964291/83582310-687ea480-a4fe-11ea-97a4-c32fd2ced8fd.png">

## Contributors
- [Madison Randle](https://github.com/madisonrandle)
- [Edita Ignot](https://github.com/edignot)
- [Nick Taylor](https://github.com/nickstaylor)
- [Taras Tarlov](https://github.com/ttarlov)

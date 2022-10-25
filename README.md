# Mashup Course - Advanced 2022

<div style="text-align: justify">
In this repo you will find the starter boilerplate (template) to start the course from the same point as our instructor in the videos.

There is a particular folder "Help Files" in which you will find:

1. **End of Lessons Code**: as the name suggests, these are the files the way they should be at the end of each named lesson; If anything goes sideways, or if you want to revisit any specific lessons, you may browse to the desired folder, run "npm install", and go from there on. You might also find it usefull to copy and paste the CSS code as done in the videos.
2. **Figma file to the mashup's layout**: You might upload this file to your Figma to access the suggested layout for the course's mashup.
3. **QVF file**: You might import this file to your Qlik server to develop a mashup just like the course, **or** you can use another mashup to get the data from and build a mashup of your own.

**NOTE**: You do not need to download anything yet. The course videos will walk you through all the steps.
</div>

<br>
<hr>
<br>

## Configuring the project
*(Standard Boilerplate Instructions)*

### Configure qlik connection
Add your Qlik Sense url, appId and/or the webIntegrationId if you are building against the Qlik Hosted, Qlik Sense Business and Qlik Sense Enterprise for SaaS, in the src/Context/Nebula.jsx

![image](https://user-images.githubusercontent.com/27926021/165561461-b272c05a-458f-4e9a-a5c7-c8aa3ba1bdd2.png)


#### Install the appropriate packages by running ‘npm install’ (you need to have NodeJS installed for this step). 
https://nodejs.org/en/download/

#### Done, now you can start coding :)

After the installation you can type "npm start" on the terminal to start the mashup in a local server.


### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


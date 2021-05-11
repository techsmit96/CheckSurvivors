Hi... My name is Sumit and these are the steps and solutions of faced problems to develop the project.
This is my own genuine way to solve the problem

# 1:- Understand the problem

First of all, let me tell you when I got the task, I didn't know it. because they need MERN with python. luckily I knew MERN and python. But I have never seen the code of the .ipynb file like this before. I know a little bit of knowledge of pandas,matplotlib,numpy etc... So I understand and realize. This problem comes under Data science and ML. then I start finding...and search "How to build Ml Model in python" then I found a Video on Youtube related in a ML Model. Then I understand why we use .csv file, dataframe, sklearn,pkl,joblib also what is prediction.

### Best video for understanding what is model and all:-

https://www.youtube.com/watch?v=U_oJqcyc0eI

# 2:- Which technology is better?

After understanding "what is the model?" and I created the model by running the code of the .ipynb file. The task needs MERN technology for building a website with the model.
So I started to search at google how to connect node js to the Ml model. because I don't know how to connect python to the node. After reading a lot of blogs, articles and watching videos. I understand we can do with TensorFlow js, make a new thread in node js, and cloud computing also... that time god with me and I found one article on StackOverflow and he said we can do with flask server and flask server can connect with node js.
So I decided the task is small so I use flask for the Ml model and python because it is lightweight.

# 3:- Connecting Node js,Reactjs and flask

As I my experience, I know how to connect react js and node js. So my first job was that make connections with node js and flask. So I made one basic route for flask and call from node js. that time I used postman for calling node js API. after running "http://localhost:3001/" in postman "The flask running on port 5000" was printed in the console. That was my first victory... Then, I started to connect node js and React js and call react js server with his route in the browser ... so the response of flask route was printed in the browser. Means React connect with node and node connects with flask.

### Connect Node to Flask:-

https://medium.com/javarevisited/connecting-flask-with-node-js-7b9d823ca923.

### Deploy ML model with Flask:-

https://www.kdnuggets.com/2019/10/easily-deploy-machine-learning-models-using-flask.html.

### Build API for Flask:-

https://www.kdnuggets.com/2019/01/build-api-machine-learning-model-using-flask.html.

### Watch web frameworks and Flask:-

https://www.youtube.com/playlist?list=PLJ39kWiJXSiwG_eroIoElSDTZv03G4yNm.

# 4:- Model coding in Flask:-

In python there is two task:-

## 1. Make prediction of user entered data.

After loading model to new predict route of the flask. I copied code from the .ipynb file and paste it to app.py and also import the necessary packages. In coding, prediction data saved to a new variable and make a condition and return passenger survived or not to node js. In react part I created a new form with validation and send a request with the post method to node js and node js also send data with the post method to the flask route. Flask returns data after prediction completed. Node js captured it and sent it to react and react showed it on the browser

## 2. Display plots genereated during the EDA.

The second job is to display plots. So I made three-component with suitable routes in React js with their name "Histogram, Scatter, the category". after making three routes for three plots and read CSV file in the global dataframe variable in a flask, the big deal was "How to send matplotlib figure to node js". so I searched and I found one article on StackOverflow. this article shows we need the BytesIO package to convert figure into bytes and save figure with png format in the BytesIO variable. so I typed code just like that then encode bytes data to base64 format and sent it to node js. node js decoded data and sent a response to react js. React js showed figure with his routes to a browser.
But problem is that In the histogram figure had 6 plots over there. so I typed one line of for loop and save it in a variable. and call hist function. so the problem is solved and 6 images will show in one image.
And applied these steps for the other two plots with its code.

# 5:- Biblography

### I watched but not use in this project(Watson Machine Learning):-

https://www.youtube.com/playlist?list=PLgNJO2hghbmjNrHZqplNMEpsW-QLFdvJV

### Check out this project for getting idea:-

https://github.com/theairbend3r/poke-zoo

### Complete ML Model using React and Flask

https://towardsdatascience.com/create-a-complete-machine-learning-web-application-using-react-and-flask-859340bddb33

### Develop end-to-end project in machine model:-

https://www.freecodecamp.org/news/end-to-end-machine-learning-project-turorial/

### I prefer this link specially forknow about shortcut of column name(Sibsp,parch):-

https://www.ritchieng.com/machine-learning-project-titanic-survival/

### Show base64 image to react :-

https://stackoverflow.com/questions/56769076/how-to-show-base64-image-in-react#:~:text=5%20Answers&text=Did%20you%20make%20sure%20to,with%20the%20base64%20encoded%20value%3F&text=Hope%20this%20helps!!&text=base64data%20is%20the%20data%20in%20base64%20format.

### Background jobs with flask:-

https://smirnov-am.github.io/background-jobs-with-flask/

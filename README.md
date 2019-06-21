# FullstackHWAssignment

# 1: "Tell me about your proudest professional achievement. It can be a personal or school project."

Finishing a project in general gives me a "coders high" is what I like to call it. The satisfaction of completing a project you've work on for countless hours makes you feel accomplished. To narrow it down to my proudest achievement, I would say a project called Duckery. This was a project that me and a couple of developer friends created in less then a week. The idea was centered around the "rubber duck" concept. If you haven't heard about that it is a concept that for debugging purposes, you carry a rubber duck around to talk to when you get stumped on what's going wrong. The concept is so pose to help you debug by explaining the concept out loud which can help with figuring out the logic of your code. This application is RESTful using express, handlebars, and node.js packages. Users can create an account using passport.js and SQL. Customize their virtual rubber duck using canvas.js, JavaScript, and SQL. Even chat with other developers if they're just completely hopeless using sockets and http. I'm most proud of this because of how we worked together and the amount of work it took to bring our vision to life.

# 2: "Tell me about a book, blog, article or GitHub repo you read or liked recently, and why you like it and why you should recommend I do the same."

There are so many different articles that I've diguested from Medium. One of my favorites as of right now is 7 SKills of Highly Effective Programmers. It was inspried by an ex-Google TechLead and it goes over some great practices for working in the tech world. Medium is one of my favorite websites for articles on programming because it's usually inspirational and informative. Coding being my passion I love (and need) to learn the new technologies that come out. I would recommend for any programmer to create an Medium account because of the amount of information that is at your finger-tips. Every programmer can get better.

# 3: "Describe what Availity does to a 7-year-old."

Avalilty helps process the transactions between insurance companies and hospitals. They are esstientially the middle man for their interactions.

# 4: "You are tasked to write a checker that validates the parentheses of LISP code. Write a program which takes in a string as an input and returns true if all the parentheses in the string are properly closed and nested."

Try it here: https://fullstackhw.herokuapp.com/part2

Type into the form any string and press submit. It will submit a post request then display true or false based on the balance of parentheses. This is one function inside the script file named Act3.js that loops through an array from the given string and sends it through a series of if statements to narrow if the parentheses are close and nested correctly. Try for yourself above.

# 5: "For frontend engineer: Healthcare providers request to be part of the Availity system. Using React framework, create a registration user interface so healthcare providers can eletronically join Availity. The following data points should be collected: First and Last name, NPI number, Buiness Address, Telephone Number, and Email address"

GitHub repo: https://github.com/dderrickmatheww/ReactLoginForm

I created a registration form for Availity made completely out of React.js. It takes in 5 inputs from the user, Full name, NPI number, Buisness Address, Telephone number, and email address. When you press submit it console logs the values inside the browser. Inside the handleChange component is where a post request would go using axios, to create an auth system. I created a seperate repo <a href="https://github.com/dderrickmatheww/ReactLoginForm">here</a> for the react code exclusivly.

# 6: "Availity receives enrollment files from various benefits management and enrollment solutions (I.e. HR platforms, payroll platforms).  Most of these files are typically in EDI format.  However, there are some files in CSV format.  For the files in CSV format, write a program that will read the content of the file and separate enrollees by insurance company in its own file. Additionally, sort the contents of each file by last and first name (ascending).  Lastly, if there are duplicate User Ids for the same Insurance Company, then only the record with the highest version should be included. The following data points are included in the file: User ID, Full name, Version, and Insurance Company"

GitHub repo: https://github.com/dderrickmatheww/FullstackHWAssignment

I created a node.js application that using file-system to read and write CVS files. Some of functionality was pretty difficult without storing the data inside of some sort of database like MongoDB or SQL. It is a node.js application so it doesn't run in the browser of course. Inside of assets/script/Act6.js is where the node app is. It is writing to the files inside of the CVS1 folder. Inside the folder are dummy insurance names that I just created from memory. New entrys need to be written in the example.cvs file. If the entry is in the same format as the others, it should be written into the insurance.cvs and from their it will be read and sent either into the the insurance companies name .cvs or create a whole new file with the name of the insurance company.

## Paul Cooke Zzish code test

### Technologies used
* Node.js
* Express
* MongoDB
* Mongoose
* Mocha, Chai & Supertest for tests
* Insomnia for API testing
* Robo 3T to check the seeds

### Installation
* Clone the repository and install relevant packages by typing ```yarn```
* Enter Mongo from the CLI by typing ```mongo``` 
	* ...and then create the database with ```use paulcooke_zzish```
	* Seed this new database with ```yarn seed```
* To run the app on port 8000 type ```yarn serve```
* To run the tests ini the test file type ```yarn test```

---

### Approach

* Choice of technologies:
	* I considered not using a database to hold the feature flags, but decided that there would be time to add this, as well as the single Feature model. I used the array of feature flags provided to make a seed file.
	* I decided quickly on the use of Express and Mongo with Mongoose as the ODM, as I'm familiar with them from the GA course
	* Similarly Mocha, Chai & Supertest are what we learned on the course
	* Insomnia was very useful in seeing what was being returned to me in addition to the tests, and I also used Robo 3T to check the data and see that the seeds were being created correctly

* Solving the challenge:
	* I set up the Express app to allow for more CRUD routes added
	* Before getting started I went back over my Express notes and previous work to refresh, as I had been using Django for the most recent projects
	* I also spent a bit of time before getting started looking more into what you can return from a Mongoose query, as previously I had done single item find and update type queries. So thanks to this challenge I have a better understanding of filtering in the query - I wanted to do this as opposed to returning all the feature flags and then filter them as it felt a more correct and scalable approach 
	* The main challenge was working out where to include the ratio - i tried using $cond and $filter to use it as part of the query, but in the end decided that filtering the "eligible" list that had been returned by the query was ok

### Reflections/Further things I would add
* Add the list of eligible flags to the user and send the whole user back in the response, so that we could check when a response comes in if they are flagged already
	* This would probably mean negative flagging is needed as well (already in test group but on other side)
* The rest of the CRUD routes, with jwt auth for permissions
* I would like to investigate ways to test that the A/B ratio is splitting correctly and returning the correct results
* I would have liked to successfully deploy the api, I had a brief attempt but clearly need more practise at this. I will try again after submitting the test
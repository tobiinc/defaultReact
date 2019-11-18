# zlab-poll-2019
## Please build an online anonymous voting poll. 

- Requirements: 
  - the user can create a new vote with name and at least 2 questions. 
  - there can be a maximum of 6 questions
  - the owner can define how many votes each participant has
  - once the poll is saved, a secure link to administer (edit/close/view results) is created
  - the owner can then generate voting tokens. They are valid as long as the poll is open and can only be used once 
  - when accessing the poll using the token, each participant can vote only once. They can cast the votes freely: 1 vote for   one option; all for one option; 2 for one option, 1 for another;...

  - the UI does not need to be fancy, but should work with few clicks
  - full page loads should be avoided if possible

- First view should contain at least: 
  - create poll with name and at least two questions
  - save poll

- Second view should contain at least: 
  - link to administer the poll
  - possibility to generate a defined amount of tokens

- Voting view should contain at least: 
  - vote for options
  - save the vote (with minimum one vote cast)

- Administer pool should contain at least: 
  - option to change the poll name 
  - option to close the poll
  - option to view poll results 


Bonus tasks to make the tool very easy to use: present the poll results in a graphic manner; add the copy to clipboard functionality for the tokens

You can use plain PHP, HTML, CSS and/or any library you desire. You can use vanilla JS or the vue.js or react framework. Just let us know why you choose the framework/library.

Note: there is no need for responsiveness, but if you have time to implement it, it is welcome. Also the code is more important than the UI. 

You have 3 hours to finish the task. It does not matter if you do not finish it completely, just show us how far you came.

If you have any questions just ask.

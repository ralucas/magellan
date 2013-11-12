Objective
=========
Create a site that takes the user on a virtual tour of Magellan's voyage circumnavigating the globe. Each page is a separate stop on the voyage. Build two versions: one with a separate server-side view for each stop, and one delivered as as single view with separate stops retrieved using Ajax requests.

Requirements
------------
###Part I

1. The user should start on the home page at Seville, where Magellan departed Spain in 1519.
2. Create a separate page for each of the following locations from Magellan's expedition:
	* Seville
	* Canary Islands
	* Cape Verde
	* Strait of Magellan
	* Guam
	* Philippines
3. At each location (except the last), a next button should lead the user to a new page with information about that stop on Magellan's voyage.

###Part II

1. Copy Part I into a separate folder before starting Part II.
2. Rewrite your app to use Ajax requests for each page change instead of full page refreshes. Plan out the design of how this would work and what would be different. Some questions you may want to ask yourself:
	* When do I make the Ajax request?
	* What should happen when the user clicks the Next button?
	* What URL should the Ajax request be sent to?
	* What response should the Ajax request return to the client?
	* How can I simulate a page change when the response comes back?
	* What's the best way to render the data from the server to the client?

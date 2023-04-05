## Installation

To install the app, first clone the repository:

### git clone https://github.com/payalthummar/select-category-task.git

Then navigate to the project directory and install the dependencies:

```javascript
- cd select-category-task
- npm install

```

Finally, start the app:

```javascript
npm start
```

The app should now be running on [http://localhost:3000](http://localhost:3000).

## Overview

- You have a JSON Data inside the data folder (category.json) !important [Added backgroundColor properties in JSON file to set up the background-color]

- On the load of the application, you get to the start screen named with (SelectionPage component). The user is asked to select a category

- When the user selects the category, it saves a selection as Cookie and redirects to the Home Page (selectedCategoryPage component)

- On Home Page, there is a carousel slider with data

- If the user selects Category “a” or "b", cookies save the selectedCategory<br>
  e.g [<button onClick={() => handleCategorySelect("a")}>Category A</button><br>
  <button onClick={() => handleCategorySelect("b")}>Category B</button>]<br>

- If the user selects Category “a”, The slider data (image, heading, subheading, background-color ) load as per the category “a” in the JSON file

- If the user selects Category “b”, The slider data (image, heading, subheading, background-color) load as per the category “b” in the JSON file

## setCookie

// Save the selected category as a cookie with default path

- document.cookie = `selectedCategory=${selectedCategory}; path="/"`;

// Redirect to the home page

- window.location.href = "/home";

## getCookie function retuns the cookies

function getCookie(cookieName) { <br>
const cookieValue = document.cookie<br>
.split("; ")<br>
.find((name) => name.startsWith(`${cookieName}=`))<br>
?.split("=")[1];<br>
return cookieValue;<br>
}<br>

- Step 1: [document.cookie] retrieves all the cookies as a string.
- Step 2: [.split("; ")] splits the cookie string into an array of strings. The "; " is used as a separator because cookies are typically separated by "; " in the cookie string.
- Step 3: [.find()] searches the first string that start with "selectedCategory=". This string represent the "selectedCategory" cookie.
- Step 4: ?.split("=")[1] splits the value of the "selectedCategory" cookie into an array using "=" as a separator and retrieving the second element of the array (index 1).

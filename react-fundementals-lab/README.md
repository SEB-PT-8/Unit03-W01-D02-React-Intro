# **React Fundementals Lab**


## **Instructions**

### 1. Create the React App

* Use `vite` to set up a new React project.
* `npm create vite@latest .`
* Install dependencies if you haven't already with `npm i`.

---

### 2. Clean Up `App.jsx`

* Open `App.jsx` file.
* Remove all existing JSX inside the `return` statement so it’s empty and keep th `<> </>`.
* Open both `index.css` and `App.css` and delete everything inside

---

### 3. Create the Components Folder

* Inside `src/`, create a folder called `components`.
* Inside `components`, create a folder called `Button`.

---

### 4. Create the Button Component

* Inside the Button folder, create a new component file.
* **IMPORTANT: ALL COMPONENT NAMES SHOULD BE CAPITAL FIRST LETTER** 
* Make it return a paragraph element for now with the content `Upload`.
* Export the component using `export default Button` at the bottom of your component file.

---


### 5. Import and Render the Button

* Open `App.jsx` again.
* Import the Button component.
* Render the Button component **twice** inside the App.
* run the application using `npm run dev` to see the result. You should see two buttons on the page.

---

### 6. Style the Button

* In the Button folder, create a CSS file.
* Style the paragraph element with background color, border, padding, etc. (What you think will mak the button look nicer).

---

### 7. Add a clicking event to the buttons

* In the `Button.jsx` component add a function called `handleClick` that when called will just `console.log('Button Clicked')`.
* Add a onClick event on your p element so when it's clicked it calls the `handleClick` function.

---

### 8. BONUS use .map() for rendering array elements

* Create a new folder `StudentsList` and a  components called `StudentsList.jsx`
* Create a functional component inside that returns jsx
* Paste the following variable in the component:
```jsx
const students = ['Munther','Mohammad','Ahmad','Safa','Abeer','Salman']
```
* Now what you should do is use .map() to show all the names of the students on the page inside of a `<ul></ul>`.
* Now export the component and import it in the `App.jsx` and then render it under the buttons.
* Run the app and see the result

---


### 9. BONUS BONUS Conditonal Rendering

* Only print the student name on the page in the `StudentsList.jsx` if the name is NOT Salman

---

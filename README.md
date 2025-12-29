🎓 Student Management App (React)

A simple Student Management Application built with React and React-Bootstrap.
This app allows users to add student details via a form and display them in a table dynamically.

🚀 Features

📋 Add student details using a form

🧠 State management using React useState

🔄 Dynamic rendering of student list

🎨 Responsive UI using React-Bootstrap

❌ Displays “Data is Empty” when no records exist

♻️ Form auto-resets after submission

🛠️ Tech Stack

React (Vite)

JavaScript (ES6+)

React-Bootstrap

Bootstrap 5

HTML5 & CSS3

📂 Project Structure
src/
<br/>
│
<br/>
├── Components/
<br/>
│   ├── StudentContainer.jsx
<br/>
│   ├── StudentForm.jsx
<br/>
│   └── StudentList.jsx
<br/>
│
<br/>
├── App.jsx
<br/>
├── main.jsx
<br/>
├── index.css
<br/>
│
<br/>
public/
<br/>
│
<br/>
└── index.html

🧩 Component Overview
🔹 StudentContainer

Acts as the parent component

Holds the student list state

Passes data between form and table

🔹 StudentForm

Controlled form using useState

Accepts:

GR ID

Full Name

Course Name

Contact Number

Address

Sends data to parent on submit

🔹 StudentList

Displays student data in a table

Handles empty state gracefully

🖥️ UI Preview

Student Form – Enter student details

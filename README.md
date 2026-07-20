Employee Payroll System (EPS)
* Project Overview

The Employee Payroll System (EPS) is a server-side web application built using Node.js, Express.js, and EJS. It allows users to manage employee records and automatically calculate monthly payroll details such as Tax and Net Salary.
Employee data is stored in a local JSON file, making the application lightweight and easy to understand for learning CRUD operations and server-side rendering.

** Features
  - Dashboard displaying all employees
  - Add new employee
  - Edit employee details
  - Delete employee records
  - Automatic payroll calculation
  - Tax = 12% of Basic Salary
  - Net Salary = Basic Salary − Tax
  - Data persistence using employees.json
  - Custom file handling module using fs.promises
  - Input validation
  - Employee name cannot be empty
  - Salary cannot be negative
  - Responsive UI using CSS
  - Automatic redirection after every CRUD operation

** Tech Stack
 *Frontend
  - HTML5
  - CSS3
  - EJS
 *Backend
  - Node.js
  - Express.js
  - Data Storage
 - JSON File (employees.json)

** Future Enhancements
 - Employee search
 - Department filter
 - Salary sorting
 - Monthly payroll report
 - PDF salary slip generation
 - Authentication and login
 - MongoDB database integration
 - Employee profile photos
 - Export payroll to Excel/PDF
 - Responsive dashboard with charts

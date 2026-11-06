# Portfolio-project
This is a Personal CV Website, built using HTML, CSS and JavaScript as my very first project.

A responsive, three-page personal CV website built with **HTML, CSS and JavaScript**.
Created for the **Internet Applications and Databases** module.

- Home page:
<img width="527" height="736" alt="image" src="https://github.com/user-attachments/assets/faeb1e14-e160-4617-b6e1-50b1366e9973" />


# Pages:
 **Home** : Name and contact details, education, work experience, skills (programming languages with logos and an experience rating), links to GitHub and LinkedIn, interests and hobbies |
 **Portfolio** : Three or more completed projects, each with a screenshot and a short description ( I used AI to generate hypothetical projects to include in my portfolio.)
 **Contact Me**An enquiry form for a potential project, with client-side validation

Every page shares the same navigation bar, and the layout follows an F-pattern with a clear visual hierarchy and a call to action.

# Contact form and validation:

The Contact Me form collects:

- first name
- project description
- email and confirm email
- phone number
- preferred contact method
- project date and duration

Validation is written in JavaScript:

# Function :
validateForm () Runs all checks when the Submit button is pressed |
checkEmails() Confirms the email and confirm-email fields match |
checkDate() Confirms the project date is at least 1 day in the future |

If the checks pass, a pop-up summarises the form data and asks the user to confirm.
**No email is actually sent** the site is front-end only.

## Built with

- HTML5 
- CSS3 
- JavaScript 
## Bootstrap
<link rel="stylesheet" type="text/css"
href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"/>
## Project structure


├── index.html          # Home
├── portfolio.html      # Portfolio
├── contact.html        # Contact Me
├── css/
│   └── style.css
├── js/
│   └── form.js         # validateForm, checkEmails, checkDate
└── images/             # logos, screenshots, icons.

Then open `index.html` in your browser.

## What I practiseds)
- Responsive layouts with CSS Flexbox
- Clear visual hierarchy and navigation design

## Notes

- The personal details shown on the site are for demonstration purposes.
- This repository is shared as a portfolio piece. Please don't copy it for your own assessed coursework.

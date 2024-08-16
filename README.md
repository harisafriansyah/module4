# Multi-Step Form with Formik and Yup

This project implements a multi-step form using React, Formik, and Yup for form handling and validation. The form consists of three steps, collecting different sets of user information at each step. 

## Features

- Multi-step form navigation
- Form validation using Yup
- Display of submitted data upon completion
- Responsive and user-friendly design

## Technologies Used

- React
- Formik
- Yup
- Tailwind CSS (for styling)

## Getting Started

These instructions will help you set up the project locally.

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js
- npm (Node package manager) or yarn

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/multi-step-form.git
   cd multi-step-form

2. **Install dependencies:**

    Using npm:

    npm install

    Using yarn:

    yarn install

### Running the Application
To start the development server, run:

Using npm:

npm start

Using yarn:

yarn start

Open http://localhost:3000 to view it in your browser.

### Project Structure

multi-step-form/
├── public/
├── src/
│   ├── components/
│   │   ├── Step1.tsx
│   │   ├── Step2.tsx
│   │   ├── Step3.tsx
│   ├── App.tsx
│   ├── index.tsx
│   ├── MultiStepForm.tsx
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json

### Components
- Step1.tsx: Contains the form fields for the first step.
- Step2.tsx: Contains the form fields for the second step.
- Step3.tsx: Contains the form fields for the third step.
- MultiStepForm.tsx: Main component that handles form steps, validation, and submission.

### Usage
1. Navigate through the form steps:

The form starts with Step 1, where the user inputs their full name, email, and date of birth. After filling out the fields, click "Next" to proceed to Step 2.

2. Form Validation:

Each step includes validation rules defined using Yup. If a user attempts to proceed without filling out required fields or entering invalid data, appropriate error messages will be displayed.

3. Submission:

After completing all steps, clicking "Submit" will display the entered data.

Customization
- Styling:

The project uses Tailwind CSS for styling. You can customize the appearance by modifying the tailwind.config.js file and updating the classes in the component files.

- Validation:

Validation schemas are defined using Yup in the validationSchema array within MultiStepForm.tsx. You can modify or add new validation rules as per your requirements.
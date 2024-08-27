import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Button, TextField, Box, Typography, Stepper, Step, StepLabel } from '@mui/material';
import axios from 'axios';

// Step 1 Validation Schema
const Step1Schema = Yup.object({
  fullName: Yup.string().required('Full Name is required'),
  email: Yup.string().email('Invalid email address').required('Email Address is required'),
  dateOfBirth: Yup.date().required('Date of Birth is required').nullable(),
});

// Step 2 Validation Schema
const Step2Schema = Yup.object({
  streetAddress: Yup.string().required('Street Address is required'),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string().matches(/^\d{5}(-\d{4})?$/, 'Invalid Zip Code format').required('Zip Code is required'),
});

// Step 3 Validation Schema
const Step3Schema = Yup.object({
  username: Yup.string().required('Username is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .matches(/[a-z]/, 'Password must contain a lowercase letter')
    .matches(/[A-Z]/, 'Password must contain an uppercase letter')
    .matches(/[0-9]/, 'Password must contain a number')
    .matches(/[@$!%*?&#]/, 'Password must contain a special character')
    .required('Password is required'),
});

const steps = ['Personal Information', 'Address Information', 'Account Information'];

interface FormValues {
  fullName: string;
  email: string;
  dateOfBirth: string;
  streetAddress: string;
  city: string;
  state: string;
  zipCode: string;
  username: string;
  password: string;
}

const RegisterPage: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleSubmit = async (values: FormValues) => {
    try {
      
      const apiUrl = 'http://localhost:8080/register';
      await axios.post(apiUrl, values);
      alert('Registration successful!');
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Formik
        initialValues={{
          fullName: '',
          email: '',
          dateOfBirth: '',
          streetAddress: '',
          city: '',
          state: '',
          zipCode: '',
          username: '',
          password: '',
        }}
        validationSchema={
          activeStep === 0
            ? Step1Schema
            : activeStep === 1
            ? Step2Schema
            : Step3Schema
        }
        onSubmit={(values) => {
          if (activeStep === steps.length - 1) {
            handleSubmit(values);
          } else {
            handleNext();
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            {activeStep === 0 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Personal Information</Typography>
                <Field
                  as={TextField}
                  name="fullName"
                  label="Full Name"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.fullName && Boolean(errors.fullName)}
                  helperText={touched.fullName && errors.fullName}
                />
                <Field
                  as={TextField}
                  name="email"
                  type="email"
                  label="Email Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  name="dateOfBirth"
                  type="date"
                  label="Date of Birth"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  error={touched.dateOfBirth && Boolean(errors.dateOfBirth)}
                  helperText={touched.dateOfBirth && errors.dateOfBirth}
                />
              </Box>
            )}

            {activeStep === 1 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Address Information</Typography>
                <Field
                  as={TextField}
                  name="streetAddress"
                  label="Street Address"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.streetAddress && Boolean(errors.streetAddress)}
                  helperText={touched.streetAddress && errors.streetAddress}
                />
                <Field
                  as={TextField}
                  name="city"
                  label="City"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.city && Boolean(errors.city)}
                  helperText={touched.city && errors.city}
                />
                <Field
                  as={TextField}
                  name="state"
                  label="State"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.state && Boolean(errors.state)}
                  helperText={touched.state && errors.state}
                />
                <Field
                  as={TextField}
                  name="zipCode"
                  label="Zip Code"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.zipCode && Boolean(errors.zipCode)}
                  helperText={touched.zipCode && errors.zipCode}
                />
              </Box>
            )}

            {activeStep === 2 && (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6">Account Information</Typography>
                <Field
                  as={TextField}
                  name="username"
                  label="Username"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.username && Boolean(errors.username)}
                  helperText={touched.username && errors.username}
                />
                <Field
                  as={TextField}
                  name="password"
                  type="password"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
              </Box>
            )}

            <Box sx={{ mt: 2 }}>
              {activeStep > 0 && (
                <Button onClick={handleBack} sx={{ mr: 2 }}>
                  Back
                </Button>
              )}
              <Button type="submit" variant="contained">
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default RegisterPage;

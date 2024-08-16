import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';

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

const initialValues: FormValues = {
  fullName: '',
  email: '',
  dateOfBirth: '',
  streetAddress: '',
  city: '',
  state: '',
  zipCode: '',
  username: '',
  password: '',
};

const validationSchema = [
  Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    dateOfBirth: Yup.date().required('Date of Birth is required'),
  }),
  Yup.object({
    streetAddress: Yup.string().required('Street Address is required'),
    city: Yup.string().required('City is required'),
    state: Yup.string().required('State is required'),
    zipCode: Yup.string().required('Zip Code is required').matches(/^[0-9]{5}$/, 'Invalid Zip Code'),
  }),
  Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters').matches(/[a-zA-Z]/, 'Password must contain letters'),
  }),
];

const MultiStepForm: React.FC = () => {
  const [step, setStep] = useState(0);
  const [submittedData, setSubmittedData] = useState<FormValues | null>(null);

  const handleSubmit = (values: FormValues, actions: FormikHelpers<FormValues>) => {
    if (step === validationSchema.length - 1) {
      setSubmittedData(values);
      actions.setSubmitting(false);
    } else {
      setStep(step + 1);
      actions.setTouched({});
      actions.setSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
        {submittedData ? (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Registration Successful</h2>
            <p><strong>Full Name:</strong> {submittedData.fullName}</p>
            <p><strong>Email:</strong> {submittedData.email}</p>
            <p><strong>Date of Birth:</strong> {submittedData.dateOfBirth}</p>
            <p><strong>Street Address:</strong> {submittedData.streetAddress}</p>
            <p><strong>City:</strong> {submittedData.city}</p>
            <p><strong>State:</strong> {submittedData.state}</p>
            <p><strong>Zip Code:</strong> {submittedData.zipCode}</p>
            <p><strong>Username:</strong> {submittedData.username}</p>
          </div>
        ) : (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema[step]}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form>
                {step === 0 && <Step1 />}
                {step === 1 && <Step2 />}
                {step === 2 && <Step3 />}
                <div className="mt-6 flex justify-between items-center">
                  {step > 0 && (
                    <button
                      type="button"
                      className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md shadow-sm hover:bg-gray-400 transition"
                      onClick={() => setStep(step - 1)}
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="px-4 py-2 bg-indigo-600 text-white rounded-md shadow-sm hover:bg-indigo-700 transition"
                    disabled={isSubmitting}
                  >
                    {step === validationSchema.length - 1 ? 'Submit' : 'Next'}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;

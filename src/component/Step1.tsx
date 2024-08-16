import React from 'react';
import { useFormikContext, Field, ErrorMessage } from 'formik';

const Step1: React.FC = () => {
  const { errors, touched } = useFormikContext();

  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Step 1: Personal Information</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Full Name</label>
        <Field name="fullName" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        <ErrorMessage name="fullName" component="div" className="text-red-600 text-sm" />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Email Address</label>
        <Field type="email" name="email" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        <ErrorMessage name="email" component="div" className="text-red-600 text-sm" />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
        <Field type="date" name="dateOfBirth" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        <ErrorMessage name="dateOfBirth" component="div" className="text-red-600 text-sm" />
      </div>
    </div>
  );
};

export default Step1;

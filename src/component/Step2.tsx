import React from 'react';
import { useFormikContext, Field, ErrorMessage } from 'formik';

const Step2: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Step 2: Address Information</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Street Address</label>
        <Field name="streetAddress" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        <ErrorMessage name="streetAddress" component="div" className="text-red-600 text-sm" />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">City</label>
        <Field name="city" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        <ErrorMessage name="city" component="div" className="text-red-600 text-sm" />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">State</label>
        <Field name="state" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        <ErrorMessage name="state" component="div" className="text-red-600 text-sm" />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Zip Code</label>
        <Field name="zipCode" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        <ErrorMessage name="zipCode" component="div" className="text-red-600 text-sm" />
      </div>
    </div>
  );
};

export default Step2;

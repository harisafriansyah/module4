import React from 'react';
import { useFormikContext, Field, ErrorMessage } from 'formik';

const Step3: React.FC = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">Step 3: Account Information</h2>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Username</label>
        <Field name="username" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        <ErrorMessage name="username" component="div" className="text-red-600 text-sm" />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <Field type="password" name="password" className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm" />
        <ErrorMessage name="password" component="div" className="text-red-600 text-sm" />
      </div>
    </div>
  );
};

export default Step3;

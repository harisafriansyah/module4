import React from 'react';
import MultiStepForm from './component/MultiStepForm';

const App: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-full bg-gray-100">
      <div className="w-full p-8 bg-white rounded shadow-md">
        <MultiStepForm />
      </div>
    </div>
  );
};

export default App;

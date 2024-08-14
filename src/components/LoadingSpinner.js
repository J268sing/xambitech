// src/components/LoadingSpinner.jsx

import React, { useState } from 'react';

export const useLoadingSpinner = () => {
  const [loading, setLoading] = useState(false);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  return { loading, startLoading, stopLoading };
};

// LoadingSpinner component if you have one
const LoadingSpinner = () => {
  return (
    <div className="loading-spinner">
      {/* Spinner JSX here */}
    </div>
  );
};

export default LoadingSpinner;

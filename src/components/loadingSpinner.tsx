import { useContext } from "react";
import { LoadingContext } from "../context/LoadingContext";

const LoadingSpinner = () => {
  const { loading } = useContext(LoadingContext);

  return (
    <>
      {loading && (
        <div className="circular_progress">
          <svg className="w-44 h-44 animate-spin" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#2e6a71"
              strokeWidth="10"
              fill="none"
              opacity="0.4"
            />

            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#00bcd4"
              strokeWidth="10"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="80 220"
              strokeDashoffset="0"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default LoadingSpinner;

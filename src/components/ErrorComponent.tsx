import { useState, useEffect } from "react";

const ErrorComponent = ({ errorMessage }: { errorMessage: string }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Hide the error message after 4 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 20000);

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount
  }, []);

  return (
    <div
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 ease-in-out fixed top-0 right-0 p-2 sm:p-4 mt-4 mr-4 bg-red-500 sm:text-base text-sm text-white rounded`}
    >
      {errorMessage}
    </div>
  );
};

export default ErrorComponent;

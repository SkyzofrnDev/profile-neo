import React, { useEffect, useState } from "react";

const STATUS_STYLES = {
  success: "bg-green-600",
  error: "bg-red-600",
};

const Snackbar = ({ type = "success", message, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      handleClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 300);
  };

  return (
    <div
      className={`
        fixed bottom-6 right-6 z-50
        flex items-center gap-4
        px-6 py-4 rounded-xl shadow-lg text-white
        transition-all duration-300 ease-out
        ${STATUS_STYLES[type]}
        ${
          visible
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0"
        }
      `}
    >
      <span className="text-lg font-medium">{message}</span>

      <button
        type="button" 
        onClick={handleClose}
        className="ml-2 text-xl font-bold leading-none hover:opacity-80"
        aria-label="Close"
      >
        ×
      </button>
    </div>
  );
};

export default Snackbar;

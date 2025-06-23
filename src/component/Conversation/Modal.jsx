import React from "react";
import { SendMessage } from "../../hooks/api";
import Notification from "../Notification";

const Modal = ({ show, setShow}) => {
        const [notification, setNotification] = React.useState(false);

  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const formIsValid = formData.name && formData.email && formData.message;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault(); 
    if (formIsValid) {
      // Here you can handle the form submission, e.g., send data to an API
      SendMessage(formData)
     // Show notification after successful submission
      setNotification(true);
      setTimeout(() => {
        setNotification(false);
        // Hide notification after 3 seconds
      }
        , 28800);

             setTimeout(() => {
        
        setShow(false); // Hide notification after 3 seconds
      }
        , 3000);

    //   setShow(false); // Close the modal after submission
    } else {
      console.log("Form is invalid");
    }
    };

  // const isValid =
  const CancelModal = () => {
    setShow(!show);
  };
  return (
    <div className="bg-black/90 fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
        {notification && <Notification message={`Message submitted successfully. Thank you!! ${formData.name}`} />}
      <button
        className="text-8xl self-end absolute top-0  text-white right-0 px-5 "
        onClick={CancelModal}
      >
        &times;
      </button>
      <form action="" method="post" className="w-full" onSubmit={handlesubmit}>
        <div className="bg-white p-8 rounded-lg shadow-lg sm:w-1/2 w-full max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded"
              required
            ></textarea>
          </div>
          {!formIsValid && (
            <p className="text-red-500 text-center capitalize">
              all inputs are required
            </p>
          )}
          <button
            type="submit"
            className={`cursor-pointer w-full bg-[#06724b] text-white font-bold py-2 px-4 rounded hover:bg-[#055a3f] ${!formIsValid ? "opacity-50 cursor-not-allowed" : ""}`}
            disabled={!formIsValid}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Modal;

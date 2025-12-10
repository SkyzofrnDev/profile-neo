import React from "react";

const Contact = () => {
  return (
    <div className="mx-20 my-24 flex flex-col items-center">
      <p className="font-semibold text-6xl">
        Contact <span className="bg-tertiary text-white px-2">Company</span>
      </p>
      <div className="flex mt-28 w-full gap-x-64">
        <img src="Contact.png" alt="contact" loading="lazy" className="w-180 h-170" />
        <div className="w-full gap-y-10 h-full flex flex-col">
          <div className="flex flex-col gap-y-5 w-full">
            <p className="font-medium text-4xl">
              Full Name <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="bg-[#e8e8e8] px-5 h-16 rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-y-5 w-full">
            <p className="font-medium text-4xl">
              Your Email <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="bg-[#e8e8e8] px-5 h-16 rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-y-5 w-full">
            <p className="font-medium text-4xl">
              Message <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              className="bg-[#e8e8e8] px-5 h-40 rounded-2xl"
            />
            <button className="bg-primary py-10 mt-10 rounded-3xl">
              <p className="text-3xl font-semibold text-white">Submit</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

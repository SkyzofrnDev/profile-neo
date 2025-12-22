import React from "react";
import { useState } from "react";
import { sendEmail } from "../../Services/mailjs.config";
import { Snackbar } from "../../Components/Index";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const formData = {
      user_name: e.target.name.value,
      user_mail: e.target.email.value,
      body_mess: e.target.message.value,
    };

    try {
      await sendEmail(formData);
      setStatus("success");
      e.target.reset();
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-20 my-24 flex flex-col items-center">
      <p className="font-semibold text-6xl">
        Contact <span className="bg-tertiary text-white px-2">Company</span>
      </p>
      <div className="flex mt-28 w-full gap-x-64">
        <img
          src="Contact.png"
          alt="contact"
          loading="lazy"
          className="w-180 h-170"
        />
        <form
          onSubmit={handleSubmit}
          className="w-full gap-y-10 h-full flex flex-col"
          name="form-contact"
        >
          <div className="flex flex-col gap-y-5 w-full">
            <p className="font-medium text-4xl">
              Full Name <span className="text-red-500">*</span>
            </p>
            <input
              type="text"
              name="name"
              required
              placeholder="Masukan Nama Anda"
              className="bg-[#e8e8e8] px-5 h-16 rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-y-5 w-full">
            <p className="font-medium text-4xl">
              Your Email <span className="text-red-500">*</span>
            </p>
            <input
              type="email"
              name="email"
              required
              placeholder="Contoh : admin@neoone.id"
              className="bg-[#e8e8e8] px-5 h-16 rounded-2xl"
            />
          </div>
          <div className="flex flex-col gap-y-5 w-full">
            <p className="font-medium text-4xl">
              Message <span className="text-red-500">*</span>
            </p>
            <textarea
              name="message"
              placeholder="Pesan"
              required
              className="bg-[#e8e8e8] px-5 h-40 rounded-2xl p-5"
            />
            <button
              type="submit"
              className={
                loading
                  ? "bg-[#2b5fb3] py-7 mt-0 rounded-3xl"
                  : "bg-primary py-7 mt-10 rounded-3xl"
              }
              disabled={loading}
            >
              <p className="text-3xl font-semibold text-white">
                {loading ? "Mengirim..." : "Kirim"}
              </p>
            </button>
            {status === "success" && (
              <Snackbar type="success" message="Pesan Berhasil Dikirim" />
            )}

            {status === "error" && (
              <Snackbar type="error" message="Pesan Gagal Dikirim" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;

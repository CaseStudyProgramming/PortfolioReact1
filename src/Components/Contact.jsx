import React from "react";

const Contact = () => {
  return (
    <div id="contact" className=" max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className=" py-4 text-4xl font-bold text-center text-[#001b5e] ">
        Contact
      </h1>
      <form
        action="https://getform.io/f/8de6ecf7-77ba-4e08-8d6c-65479568cc2f"
        method="post"
        encType="multipart/form-data"
      >
        <div className=" grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label htmlFor="" className=" uppercase text-sm py-2">
              Nama
            </label>
            <input
              type="text"
              name="Nama"
              className=" border-2 rounded-lg p-3 flex border-gray-300"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="" className=" uppercase text-sm py-2">
              Nomor HP
            </label>
            <input
              type="text"
              name="NomorHP"
              className=" border-2 rounded-lg p-3 flex border-gray-300"
              required
            />
          </div>
        </div>

        <div className="flex flex-col py-2">
          <label htmlFor="" className=" uppercase text-sm py-2">
            Email
          </label>
          <input
            type="email"
            name="Email"
            className=" border-2 rounded-lg p-3 flex border-gray-300"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="" className=" uppercase text-sm py-2">
            Subjek
          </label>
          <input
            type="text"
            name="Subjek"
            className=" border-2 rounded-lg p-3 flex border-gray-300"
            required
          />
        </div>
        <div className="flex flex-col py-2">
          <label htmlFor="" className=" uppercase text-sm py-2">
            Pesan
          </label>
          <textarea
            name="Pesan"
            id=""
            rows="10"
            className=" border-2 rounded-lg p-3 flex border-gray-300"
            required
          ></textarea>
        </div>

        <button className=" bg-[#1ef12c] text-gray-100 mt-4 w-full rounded-lg p-4">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default Contact;

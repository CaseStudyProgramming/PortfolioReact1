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
              autoComplete="off"
              onInvalid={(e) =>
                e.target.setCustomValidity("Tolong isi bagian nama")
              }
              onInput={(e) => e.target.setCustomValidity("")}
              title=""
            />
          </div>

          {/*Nomor HP*/}
          <div className="flex flex-col">
            <label htmlFor="" className=" uppercase text-sm py-2">
              Nomor HP
            </label>
            <input
              type="text"
              name="NomorHP"
              className=" border-2 rounded-lg p-3 flex border-gray-300 "
              required
              autoComplete="off"
              // title="Isi nomor telepon anda dengan benar (minimal 11 digit dan maksimal 13 digit)"
              pattern="[0-9]{11,13}"
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Tolong isi bagian nomor hp yang sesuai"
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
              title=""
            />
          </div>
        </div>

        {/*EMAIL*/}

        <div className="flex flex-col py-2">
          <label htmlFor="" className=" uppercase text-sm py-2">
            Email
          </label>
          <input
            type="email"
            name="Email"
            className=" border-2 rounded-lg p-3 flex border-gray-300"
            required
            autoComplete="off"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Tolong isi bagian email dengan benar (contoh: nama@example.com)"
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
            title=""
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
            autoComplete="off"
            onInvalid={(e) =>
              e.target.setCustomValidity("Tolong isi bagian subjek")
            }
            onInput={(e) => e.target.setCustomValidity("")}
            title=""
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
            autoComplete="off"
            onInvalid={(e) =>
              e.target.setCustomValidity("Tolong isi bagian pesan")
            }
            onInput={(e) => e.target.setCustomValidity("")}
            title=""
          ></textarea>
        </div>

        <button className=" bg-[#1ef12c] text-gray-100 mt-4 w-full font-bold rounded-lg p-4 hover:bg-green-800 hover:text-white tracking-[1px]">
          Kirim
        </button>
      </form>
    </div>
  );
};

export default Contact;

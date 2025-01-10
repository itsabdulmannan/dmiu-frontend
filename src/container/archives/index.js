import React, { useState } from "react";
import ArchivesBg from "../../assets/images/AboutSectionsBg.jpg";
import logo from "../../assets/images/logo.png";
import { FaUserCircle } from "react-icons/fa"; // React Icons for the user icon
import { MdOutlineFileDownload } from "react-icons/md"; // React Icons for the download icon
import { BsEye } from "react-icons/bs"; // React Icons for the view abstract icon
import { useForm } from "react-hook-form";
import AbstractModal from "../../components/Modals/AbstractModal";

const papers = [
  {
    id: 1,
    title:
      "Variation on the soil thermal properties of different applications in greenhouse solarization",
    authors:
      "Sertan Sesveren, Yusuf Tulun, Kemal Dogan, Mert Acar and Alkhan Sariyev",
    doi: "10.21162/PAKJAS/25.104",
    date: "2025-01-09",
  },
  {
    id: 2,
    title: "Another research paper title here for demonstration",
    authors: "Author 1, Author 2, Author 3",
    doi: "10.21162/EXAMPLE/25.105",
    date: "2025-02-15",
  },
  {
    id: 1,
    title:
      "Variation on the soil thermal properties of different applications in greenhouse solarization",
    authors:
      "Sertan Sesveren, Yusuf Tulun, Kemal Dogan, Mert Acar and Alkhan Sariyev",
    doi: "10.21162/PAKJAS/25.104",
    date: "2025-01-09",
  },
  {
    id: 2,
    title: "Another research paper title here for demonstration",
    authors: "Author 1, Author 2, Author 3",
    doi: "10.21162/EXAMPLE/25.105",
    date: "2025-02-15",
  },
  {
    id: 1,
    title:
      "Variation on the soil thermal properties of different applications in greenhouse solarization",
    authors:
      "Sertan Sesveren, Yusuf Tulun, Kemal Dogan, Mert Acar and Alkhan Sariyev",
    doi: "10.21162/PAKJAS/25.104",
    date: "2025-01-09",
  },
  {
    id: 2,
    title: "Another research paper title here for demonstration",
    authors: "Author 1, Author 2, Author 3",
    doi: "10.21162/EXAMPLE/25.105",
    date: "2025-02-15",
  },
];

const Archives = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isOpen, setIsOpen] = useState(false); // Modal state
  const [position, setPosition] = useState({ x: 0, y: 0 }); // Position state

  const openModal = (event) => {
    const { clientX, clientY } = event; // Gets the click position
    setPosition({ x: clientX, y: clientY }); // Updates the position state
    setIsOpen(true); // Opens the modal
  };

  const closeModal = () => {
    setIsOpen(false); // Close modal
  };

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
  };

  return (
    <div>
      <div
        className="bg-cover bg-center min-h-[100px]"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${ArchivesBg})`,
        }}
      >
        <div className="py-10">
          <h1 className="text-4xl text-center font-semibold text-white">
            ArchivesBg
          </h1>
        </div>
      </div>
      <div className="container-global py-4">
        <div className="bg-secondary p-6 rounded-lg">
          <div className="grid grid-cols-7 gap-4 items-center">
            {/* Title Input */}
            <div className="grid col-span-2">
              <input
                id="title"
                type="text"
                className="mt-1 p-2 w-full border rounded-lg"
                placeholder="Enter title"
              />
            </div>

            {/* Author Input */}
            <div className="grid col-span-2">
              <input
                id="author"
                type="text"
                className="mt-1 p-2 w-full border rounded-lg"
                placeholder="Enter author"
              />
            </div>

            {/* Volume Select */}
            <div>
              <select id="volume" className="mt-1 p-2 w-full border rounded-lg">
                <option value="">Select Volume</option>
                <option value="1">Volume 1</option>
                <option value="2">Volume 2</option>
                <option value="3">Volume 3</option>
              </select>
            </div>

            {/* Issue Select */}
            <div>
              <select id="issue" className="mt-1 p-2 w-full border rounded-lg">
                <option value="">Select Issue</option>
                <option value="1">Issue 1</option>
                <option value="2">Issue 2</option>
                <option value="3">Issue 3</option>
              </select>
            </div>

            {/* Search Button */}
            <div>
              <button className=" w-full  py-2 rounded-lg text-white shadow-md bg-primary focus:outline-none">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-darkText mt-4">
          <section className="flex flex-col gap-2">
            <div className="bg-fadeBg flex flex-col gap-3 justify-center text-center px-2 py-4 rounded-lg">
              <span className="flex justify-center w-full">
                <img className="w-2/3" src={logo} alt="logo" />
              </span>
              <button className="w-full flex justify-center cursor-pointer py-2 px-4 bg-secondary text-white rounded-md hover:bg-primary focus:outline-none">
                Online Submission
              </button>
            </div>

            <div className="bg-fadeBg flex flex-col gap-1 px-4 py-6 rounded-lg">
              <h3 className="font-semibold">Email Alert</h3>
              <p className="text-sm">Add your e-mail address to receive:</p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col gap-3 mt-3"
              >
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className={`w-full p-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-md outline-none`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email.message}
                  </span>
                )}
                <button
                  type="submit"
                  className="w-full flex justify-center  cursor-pointer py-2 px-4 bg-secondary text-white rounded-md hover:bg-primary focus:outline-none"
                >
                  Submit
                </button>
              </form>
            </div>
          </section>
          <section className="flex flex-col gap-2 md:col-span-3">
            <div className="">
              <h1 className="text-xl font-semibold text-secondaryText">
                INPRESS PAPER
              </h1>
              <div className="space-y-6">
                {papers.map((paper) => (
                  <div
                    key={paper.id}
                    className="flex flex-col gap-0 border-b border-gray-200 pb-4"
                  >
                    <h2 className="text-lg font-semibold mt-3 text-darkText">
                      {paper.title}
                    </h2>
                    <div className="flex items-center">
                      <FaUserCircle className="text-blue-600 mr-2" />
                      <span className="font-sans text-[13px] font-bold leading-relaxed tracking-wider my-1 text-primaryText">
                        {paper.authors}
                      </span>
                    </div>
                    <p className="font-sans italic text-[13px] font-bold text-gray-700">
                      {paper.doi} - {paper.date}
                    </p>
                    <div className="flex justify-between items-center gap-4 mt-4">
                      <button className="flex items-center px-4 py-2 bg-secondary text-white text-sm rounded-lg shadow-md hover:bg-primary focus:outline-none">
                        <MdOutlineFileDownload className="mr-2" />
                        Download PDF
                      </button>
                      <button
                        onClick={openModal}
                        className="flex items-center px-4 py-2 bg-gray-200 text-gray-800 text-sm rounded-lg shadow-md hover:bg-gray-300"
                      >
                        <BsEye className="mr-2" />
                        View Abstract
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
      <AbstractModal isOpen={isOpen} position={position} onClose={closeModal} />
    </div>
  );
};

export default Archives;

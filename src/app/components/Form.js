"use client";

import React, { useState } from "react";
import Image from "next/image";

const Form = () => {
  const initialInfo = {
    firstName: "",
    lastName: "",
    dateOfBirth: "",
  };

  const initialCities = [{ dateArrived: "", cityName: "" }];

  const [personalInfo, setPersonalInfo] = useState(initialInfo);

  const [cities, setCities] = useState(initialCities);

  const handlePersonalInfoChange = (e) => {
    setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
  };

  const handleCityChange = (index, e) => {
    const newCities = [...cities];
    newCities[index][e.target.name] = e.target.value;
    setCities(newCities);
  };

  const addCity = () => {
    setCities([...cities, { dateArrived: "", cityName: "" }]);
  };

  const removeCity = (index) => {
    const newCities = cities.filter((_, cityIndex) => cityIndex !== index);
    setCities(newCities);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      personalInformation: personalInfo,
      citiesTravelled: cities,
    };

    console.log(JSON.stringify(formData, null, 2));
    // TODO: Here, you would typically send 'formData' to server

    //Clear Form
    setPersonalInfo(initialInfo);
    setCities(initialCities);
  };

  return (
    <div className="max-w-6xl mx-auto my-10 p-8 bg-white border border-gray-200 rounded-lg shadow-xl">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16">
          {/* Personal Information Section */}
          <div className="mb-6">
            <h1 className="text-xl font-bold text-gray-700 mb-6">
              Personal Information
            </h1>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                id="firstName"
                name="firstName"
                value={personalInfo.firstName}
                onChange={handlePersonalInfoChange}
                placeholder="Dennis"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                id="lastName"
                name="lastName"
                value={personalInfo.lastName}
                onChange={handlePersonalInfoChange}
                placeholder="Kofi"
                required
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dateOfBirth"
              >
                Date of Birth
              </label>
              <input
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={personalInfo.dateOfBirth}
                onChange={handlePersonalInfoChange}
              />
            </div>
          </div>

          {/* Cities Travelled Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-700 mb-6">
              Cities Travelled
            </h2>
            {cities.map((city, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between items-center">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`cityName-${index}`}
                  >
                    City Name
                  </label>
                  <Image
                    width="16"
                    height="16"
                    className="text-sm text-red-800 cursor-pointer active:text-red-600"
                    src="https://img.icons8.com/small/16/5E1205/trash--v1.png"
                    alt="trash--v1"
                    onClick={() => removeCity(index)}
                  />
                </div>

                <input
                  className="w-full p-3 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200"
                  id={`cityName-${index}`}
                  name="cityName"
                  value={city.cityName}
                  onChange={(e) => handleCityChange(index, e)}
                  placeholder="Paris"
                  required
                />
                <div className="flex justify-between items-baseline">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor={`dateArrived-${index}`}
                  >
                    Date Arrived
                  </label>
                </div>

                <input
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-200 mb-2"
                  type="date"
                  id={`dateArrived-${index}`}
                  name="dateArrived"
                  value={city.dateArrived}
                  onChange={(e) => handleCityChange(index, e)}
                  required
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addCity}
              className=" bg-blue-500 text-xs hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Add More
            </button>
          </div>
        </div>
        <div className="flex justify-center mt-6">
          <button
            type="submit"
            className="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

import React from "react";
import { useState } from "react";

const ContactForm = () => {
  return (
    <>
      <section className="w-big">
        <h1 className="text-namewhite text-lg font-semibold text-left w-70p pl-32 mb-6">
          Email Me:
        </h1>
      </section>
      <section className="flex justify-center w-big h-screen align-text-top">
        <form class="w-70p">
          <div class="mb-4">
            <label class="block text-namewhite font-bold mb-2" for="username">
              Your email
            </label>
            <input
              class="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="tyfortheview@example.com"
            />
          </div>
          <div class="mb-10">
            <label class="block text-namewhite font-bold mb-2" for="password">
              Message
            </label>
            <textarea
              class="appearance-none border rounded w-full h-32 py-2 px-3 text-gray-700 align-top focus:outline-none focus:shadow-outline"
              id="password"
              type="textarea"
              placeholder="For work, collabs, or just to talk, send me a message!"
            ></textarea>
          </div>
          <div class="flex items-center justify-start">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ContactForm;

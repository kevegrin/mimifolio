import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mt-8">Contact</h1>
      <form className="mt-4 space-y-4">
        <div>
          <label className="block text-lg">Name</label>
          <input type="text" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block text-lg">Email</label>
          <input type="email" className="border p-2 w-full rounded" />
        </div>
        <div>
          <label className="block text-lg">Message</label>
          <textarea className="border p-2 w-full rounded"></textarea>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

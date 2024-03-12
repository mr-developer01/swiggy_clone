const Contact = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-28 text-center font-bold text-2xl">
        Hello Contact Page!
      </h1>
      <form className="mt-8">
        <input type="text" placeholder="Enter Email" className="border border-orange-300 px-2 py-1"/>
        <input type="text" placeholder="Enter Password" className="border border-orange-300 px-2 py-1 ml-4"/>
        <br />
        <button className="border border-orange-300 px-2 py-1 ml-48 mt-4">Submit</button>
      </form>
    </div>
  );
};

export default Contact;

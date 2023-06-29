import React from "react";
import Heading from "./Components/Heading";
import TextArea from "./Components/TextArea";
import Button from "./Components/Button";

const App = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-center">
        <Heading />
      </div>

      <div className="my-10 flex h-1/2">
        <div className="w-2/3 mr-4 ">
          <TextArea placeholder="Enter URL"/>
        </div>
        <div className="w-1/3">
          <TextArea placeholder="Enter custom text here"/>
        </div>
      </div>
      <div className="flex justify-center">
        <Button className="text-2xl px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-bold" />
      </div>

      <div className="flex justify-center mt-10 w-1/2 mx-auto">
        <TextArea placeholder="Shortened URL"/>
      </div>
    </div>
  );
};

export default App;

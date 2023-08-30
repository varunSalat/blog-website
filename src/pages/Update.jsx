import { Btn } from "../components";

import { useState, useRef, useMemo } from 'react';
import JoditEditor from 'jodit-react';

const Example = ({ placeholder }) => {
	const editor = useRef(null);

	return (
		<JoditEditor
			ref={editor}
			tabIndex={1}
      config={{
        height:"400px"
      }}
		/>
	);
};

const Update = () => {
  const admin = true;
  if (!admin) {
    return (
      <section className="padding flex flex-col justify-center gap-4 items-center w-screen h-[70vh]">
        <h1 className="text-lg font-medium text-black">
          Please Login to Continue
        </h1>
        <div className="flex flex-col items-start">
          <label htmlFor="" className="text-lg font-medium text-gray-500">
            Email:
          </label>
          <input
            type="text"
            className="border-black/20 border-2 rounded-md p-2 w-80"
          />
        </div>
        <div className="flex flex-col items-start">
          <label htmlFor="" className="text-lg font-medium text-gray-500">
            Password:
          </label>
          <input
            type="text"
            className="border-black/20 border-2 rounded-md p-2 w-80"
          />
        </div>
        <div className="flex flex-col items-start">
          <Btn title={"Login"} />
        </div>
      </section>
    );
  }
  return (
    <section className="padding flex flex-col items-center justify-center gap-4 ">
      <div className="w-full xl:w-[1280px]">
        <h1 className="text-center text-2xl font-bold p-4 uppercase">
          Creating Article
        </h1>
      </div>
      <div className="w-full xl:w-[1280px]">
        <input
          type="text"
          className="border-black/20 border-2 rounded-md p-2 w-full"
          placeholder="Title of Article"
        />
      </div>
      <div className="w-full xl:w-[1280px]">
        <input
          type="text"
          className="border-black/20 border-2 rounded-md p-2 w-full"
          placeholder="Summary of Article"
        />
      </div>
      <div className="w-full xl:w-[1280px]">
        <input
          type="text"
          className="border-black/20 border-2 rounded-md p-2 w-full"
          placeholder="Url of Article (Must be Unique)"
        />
      </div>
      <div className="w-full xl:w-[1280px]">
        <input
          type="file"
          accept="image/*"
          className="border-black/20 border-2 rounded-md p-2 w-full"
          placeholder="Summary of Article"
        />
      </div>
      <div className="w-full xl:w-[1280px] block">
        <Example placeholder={"hi"} className="h-full pb-8" />
      </div>
      <div className="w-full xl:w-[1280px]">
        <Btn title="Post" />
      </div>
    </section>
  );
};

export default Update;

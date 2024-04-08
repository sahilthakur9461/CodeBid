import React from "react";
import ImageUpload from "@/components/imageUpload";
import { X } from "lucide-react";

function UploadComponent({cancelFunc}) {
  return (
    <div className="bg-stone-400 h-full rounded-2xl flex justify-center items-center p-4  mt-2">
      {/* <ImageUpload  /> */}
      <div className=" w-[450px] relative h-[300px] flex rounded-r-2xl rounded-l-2xl ">
        <div>
          <img className="rounded-2xl w-[250px] h-[280px] p-3 "
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Lion_%28Panthera_leo%29_male_6y.jpg/200px-Lion_%28Panthera_leo%29_male_6y.jpg "
            alt="hii"
                      />
         
        </div>
        <div className="px-8 py-2 flex flex-col justify-center items-center gap-5">
          <CustomInput lable={"Title"} placeholder={"Enter title"} />
          <CustomInput lable={"Description"} placeholder={"Text area"} />
          <CustomInput lable={"Location"} placeholder={"Enter location"} />
          <button className="bg-sky-500 text-white py-2 px-4 border rounded-xl justify-center">
            Upload
          </button>
        </div>
        <button onClick={cancelFunc}>
          <X className="absolute h-4 w-4 test-black top-2 right-2"/>
        </button>
      </div>
    </div>
  );
}

function CustomInput({ lable, placeholder }) {
  return (
    <div className="flex flex-col  gap-1">
      <label>{lable}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="border bg-transparent rounded-md p-2 w-full"
      />
    </div>
  );
}

export default UploadComponent;

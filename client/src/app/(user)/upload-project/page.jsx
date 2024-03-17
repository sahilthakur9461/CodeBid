"use client";

import CustomBtn from "@/components/customButton";
import CustomInput from "@/components/customInput";
import axios from "axios";
import { Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function UploadProject() {
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [paid, setPaid] = useState("Free");
  const [selectedImage, setSelectedImage] = useState(null);
  // const [imageFile, setImageFile] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImage(files);
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("description", description);
      formData.append("project_Price", amount);
      formData.append("isPaid", paid);
      selectedImage.forEach((image) => {
        formData.append("imageUrl", image);
      });
      const response = await axios.post(
        "http://localhost:4000/api/post",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            authToken: localStorage.getItem("authToken"),
          },
        },
      );
      if (response.status === 201) {
        router.push("/");
      } else {
        console.error("Upload failed");
      }
    } catch (e) {
      console.error("Error occurred:", e);
    }
  };
  return (
    <div className="h-full p-20">
      <div className="flex rounded-[30px]  h-full items-center justify-center border-1 border-white">
        <div className=" px-20 w-full flex items-center justify-around">
          <div className="flex flex-col  items-center text-center  border-dashed border-white  border-3  rounded-2xl py-10 px-4">
            <div>
              <Upload className="h-16 w-16 text-white mb-4" />
            </div>
            <div className="text-white">
              <div className="mb-4">Drag and drop files to upload</div>
              <div className="mb-4">Or</div>
              <label className="bg-sky-500 rounded-l-full rounded-r-full py-1 px-5 ">
                <input
                  type="file"
                  name="projectImage"
                  onChange={handleImageChange}
                  multiple
                  className="hidden"
                />
                Browse
              </label>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div class="flex rounded-lg shadow-sm">
              <span class="px-4 inline-flex items-center min-w- rounded-s-md border border-e-0 border-gray-900 bg-gray-800 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">
                Title
              </span>
              <input
                type="text"
                class="py-2 px-3s pe-11 block w-full  shadow-sm rounded-e-lg text-sm focus:z-10disabled:opacity-50  bg-gray-700 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              />
            </div>
            <div class="flex rounded-lg shadow-sm">
              <span class="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-900 bg-gray-800 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">
                Description
              </span>
              <input
                type="text"
                class="py-2 px-3s pe-11 block w-full  shadow-sm rounded-e-lg text-sm focus:z-10disabled:opacity-50  bg-gray-700 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              />
            </div>
            <div>
              <label class="inline-flex items-center cursor-pointer">
                <label className="text-white mr-4">Paid</label>
                <input type="checkbox" value="" class="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Toggle me
                </span>
              </label>
            </div>

            <div className="flex rounded-lg shadow-sm">
              <span className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-900 bg-gray-800 text-sm text-gray-500 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-400">
                Project amount
              </span>
              <input
                type="text"
                className="py-2 px-3s pe-11 block w-full  shadow-sm rounded-e-lg text-sm focus:z-10disabled:opacity-50  bg-gray-700 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

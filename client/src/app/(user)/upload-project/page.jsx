"use client";
import UploadComponent from "@/components/Upload";
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
  const [isUploadOpen, setIsUploadOpen] = useState(false)
  // const [imageFile, setImageFile] = useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedImage(files);
  };

  const cancelFunc  = ()=>{
    setIsUploadOpen(false)
  }

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
        }
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
      <div className="relative flex rounded-[30px]  h-full items-center justify-center border-1 border-white">
        <div className=" px-20 w-full flex items-center justify-center">
          <div className="flex flex-col  items-center text-center border-dashed border-white bg-white border-3 rounded-2xl py-10 px-4">
            <div>
              <Upload className="h-16 w-16 text-black mb-4" />
            </div>
            <div className="text-black">
              <div className="mb-4">Drag and drop files to upload</div>
              <div className="mb-4">Or</div>
              <label className="bg-sky-500 text-white rounded-l-full rounded-r-full py-1 px-5" onClick={()=>{setIsUploadOpen(true)}}>
                Browse
              </label>
            </div>
          </div>
        </div>
       {isUploadOpen && (
        <div className="z-10 absolute top-[50%] left-[50%]">
          <UploadComponent cancelFunc={cancelFunc}/>
        </div>
       )}
      </div>
    </div>
  );
}

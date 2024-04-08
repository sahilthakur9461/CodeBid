import { Upload } from "lucide-react";

export default function ImageUpload() {
    return <div className='bg-[#f7d4d4] flex justify-center items-center flex-col gap-5  p-4 w-[400px] rounded-r-2xl rounded-l-2xl' >
    <div className=''>Upload Photos</div>
    <Upload size={45}/>
    <div>We are glad you decided to join our cause!</div>
    <label className='bg-[#F8F6F0] text-black rounded-r-full rounded-l-full  px-3 py-1'>
        <input type="file" className='hidden' /> Browse
    </label>
</div>
}
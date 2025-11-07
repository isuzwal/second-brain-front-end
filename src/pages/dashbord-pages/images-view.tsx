import { Upload } from "lucide-react";
import { useState } from "react";

export default function Imagesview() {
  const [image,setImage]=useState<File | null >(null);
  return (
    <div className="flex  items-center justify-center h-screen">
      <div className=" max-w-xl mx-auot w-full flex flex-col gap-2  justify-center p-1.5">
        {image && (
          <div className="max-w-[26rem] mx-auto w-full  rounded-xl flex gap-1 flex-col p-2">
           <img alt="not found" 
           src={URL.createObjectURL(image)} className="w-full rounded-xl" />
          <button  className=" rounded-lg px-5 py-1.5 text-[12px] font-medium bg-primary text-neutral-100 border cursor-pointer border-primary" onClick={()=>setImage(null)}>Remove</button>
          </div>
        )}
        <label className="flex  cursor-pointer justify-center items-center   border-2 max-w-[26rem] mx-auto w-full rounded-xl  border-dashed py-10 bg-neutral-100 border-neutral-200">
          <p className="flex gap-1 text-[14px] items-center">
          <Upload className="text-neutral-500 " />
           <span className="mt-2  font-medium">Upload the Image</span>
          </p>
          <input type="file"   onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{
            if(e.target.files && e.target.files[0]){
              setImage(e.target.files[0]
              )
            }
          }} className=" hidden w-full " />
        </label>
        
      </div>
    </div>
  );
}

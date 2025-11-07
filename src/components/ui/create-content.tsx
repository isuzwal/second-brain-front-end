import { X, LoaderIcon } from "lucide-react";
import { Input } from "./input";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";

import {
  Field,
  FieldLabel,
  FieldGroup,
  FieldSet,
  
} from "./field";
import { Textarea } from "./textarea";

interface OpenmodelPropps {
  open: boolean;
  onClose: () => void;
}

export function CreateContent({ open, onClose }: OpenmodelPropps) {
  const token = localStorage.getItem("token");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState("");
  const [brain, setBrain] = useState("");
  const [notes,setNotes]=useState("");
  const [loading, setLoading] = useState(false);
 
  // api call
  const handleFrom = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);
        
        const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/brain/user/add-content`,
        { title: title, link: link,  tags: tags, brain: brain },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (res.status === 201) {
        toast.success("Content add successfully");
      }
    } catch (error: any) {
      const msgError = error.response?.error || "Failed to add content !";
      toast.error(msgError);
    } finally {
      setLoading(false);
    }
  };
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-xl p-6">
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 rounded-full border border-primary text-neutral-800 p-1  transition">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-lg font-semibold text-gray-800 mb-4">Add New Content</h2>

        <form onSubmit={handleFrom} className="flex flex-col gap-4">
          <FieldGroup>
            <FieldSet>
              <Field >
                <FieldLabel htmlFor="checkout">Title your brain</FieldLabel>
                <Input
                  id="checkout"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                 
                  placeholder="Vibe coding"
                  className="placeholder:text-[12px]"
                />
             
              </Field>
              <Field>
                <FieldLabel htmlFor="">Past your link</FieldLabel>
                <Input
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  placeholder="Past your link "
                  className="placeholder:text-[12px]"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="">What barin is it ?</FieldLabel>
                <Input
                  value={brain}
                  onChange={(e) => setBrain(e.target.value)}
                  placeholder="Youtube,Github and other "
                  className="placeholder:text-[12px]"
                />
              </Field>

              <Field>
                <FieldLabel htmlFor="">Tags </FieldLabel>
                <Input
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="#vibe,#grind,#fun"
                  className="placeholder:text-[12px]"
                />
              </Field>
               <Field>
                <FieldLabel htmlFor="">Describe your brain notes  </FieldLabel>
                <Textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Example (Vibing  the flow of the music ) "
                  className="placeholder:text-[12px] rounded-lg"
                />
              </Field>
            </FieldSet>
          </FieldGroup>

       

          <button
            disabled={loading}
            type="submit"
            className="mt-2 w-full cursor-pointer  rounded-lg bg-primary text-white py-2 font-medium hover:bg-primary/40 transition">
            {loading ? (
              <span className="flex w-full justify-center gap-2 items-center">
                Saving your content <LoaderIcon size={24} className="ml-2 animate-spin" />
              </span>
            ) : (
              "Save Content"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

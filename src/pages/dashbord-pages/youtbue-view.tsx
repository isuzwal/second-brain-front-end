import { Card, type Brain } from "@/components/ui/card-custom";
import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "@/components/ui/loading.view";
import Error from "@/components/ui/error-view";

interface ContentItem {
  _id: string;
  brain: string;
  title: string;
  link: string;
  tags: string[];
  userId: {
    username: string;
  };
  createdAt: string;
  image:string
  description:string
}
export default function YoutubePage() {
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [content, setContent] = useState<ContentItem[]>([]);
  useEffect(() => {
    const fetchbrain = async (value: string) => {
      try {
        setLoading(true);
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/brain/user/brain/${value}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
       
      
         // @ts-ignore
        setContent(res.data.data);
      } catch (error: any) {
        setError(error.response?.message || "Something went wrong  try again !");
      
      } finally {
        setLoading(false);
      }
    };
    fetchbrain("youtube");
  }, []);
   if(loading){
    return <Loading  text="Looking into your brain" size={50} />
  }
  if(error) return <Error  message={error} onRetry={()=>window.location.reload()}/>
  return (
      <>
      {content.length === 0 ? (
        <p className="text-sm mt-2 font-semibold text-gray-700">Your brain  is empty!</p>
      ) : (
        <div className=" p-2 gap-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-stretch">
          {content.map((item) => (
            <Card
              key={item._id}
              brain={item.brain as Brain}
              title={item.title}
              link={item.link.replace("x.com", "twitter.com")}
              tags={item.tags}
              username={item.userId.username}
              upload={item.createdAt}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      )}
    </>
  );
}

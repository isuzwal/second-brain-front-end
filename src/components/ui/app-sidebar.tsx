import {
  Sidebar,
  SidebarContent,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { LogOut, Loader2Icon } from "lucide-react";
import { Link } from "react-router";
import { Button } from "./button";
import { useContext, useState } from "react";
import { UserContextProvider } from "@/context/user-content";
export function AppSidebar() {
  const [isActive, setActice] = useState("Dashbord");
  const context = useContext(UserContextProvider);
  if (!context) {
    throw new Error("useContext must be used inside a ContextProvider");
  }
  const { user, loading, logout } = context;
  if (!user) {
    return;
  }

  if (loading) {
    return (
      <div className="text-sm text-gray-500">
        Loading <Loader2Icon className="animate-spin" />{" "}
      </div>
    );
  }
  interface SidebarProps {
    title: string;
    url: string;
    icons: React.ReactNode;
  }
  const items: SidebarProps[] = [
    {
      title: "Dashbord",
      url: "/dashbord",
      icons: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15">
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M2.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 1.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 2.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041A1.5 1.5 0 0 0 6.96 5.85c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6A1.5 1.5 0 0 0 5.85 1.04C5.676 1 5.48 1 5.25 1H2.8Zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.003.374-.014.417a.5.5 0 0 1-.37.37C5.575 5.996 5.509 6 5.2 6H2.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C2.004 5.575 2 5.509 2 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37ZM9.8 1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 2.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6A1.5 1.5 0 0 0 9.15 6.96c.174.04.37.04.6.04h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.11-1.109c.04-.174.04-.37.04-.6v-2.5c0-.229 0-.426-.041-.6a1.5 1.5 0 0 0-1.109-1.11c-.174-.04-.37-.04-.6-.04H9.8Zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.003-.417-.014a.5.5 0 0 1-.37-.37C9.004 5.575 9 5.509 9 5.2V2.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37ZM2.75 8h2.5c.229 0 .426 0 .6.041A1.5 1.5 0 0 1 6.96 9.15c.04.174.04.37.04.6v2.5c0 .229 0 .426-.041.6a1.5 1.5 0 0 1-1.109 1.11c-.174.04-.37.04-.6.04h-2.5c-.229 0-.426 0-.6-.041a1.5 1.5 0 0 1-1.11-1.109c-.04-.174-.04-.37-.04-.6v-2.5c0-.229 0-.426.041-.6A1.5 1.5 0 0 1 2.15 8.04c.174-.04.37-.04.6-.04Zm.05 1c-.308 0-.374.003-.417.014a.5.5 0 0 0-.37.37C2.004 9.425 2 9.491 2 9.8v2.4c0 .308.003.374.014.417a.5.5 0 0 0 .37.37c.042.01.108.013.416.013h2.4c.308 0 .374-.004.417-.014a.5.5 0 0 0 .37-.37c.01-.042.013-.108.013-.416V9.8c0-.308-.003-.374-.014-.417a.5.5 0 0 0-.37-.37C5.575 9.004 5.509 9 5.2 9H2.8Zm7-1h-.05c-.229 0-.426 0-.6.041A1.5 1.5 0 0 0 8.04 9.15c-.04.174-.04.37-.04.6v2.5c0 .229 0 .426.041.6a1.5 1.5 0 0 0 1.109 1.11c.174.041.371.041.6.041h2.5c.229 0 .426 0 .6-.041a1.5 1.5 0 0 0 1.109-1.109c.041-.174.041-.371.041-.6V9.75c0-.229 0-.426-.041-.6a1.5 1.5 0 0 0-1.109-1.11c-.174-.04-.37-.04-.6-.04H9.8Zm-.417 1.014c.043-.01.11-.014.417-.014h2.4c.308 0 .374.003.417.014a.5.5 0 0 1 .37.37c.01.042.013.108.013.416v2.4c0 .308-.004.374-.014.417a.5.5 0 0 1-.37.37c-.042.01-.108.013-.416.013H9.8c-.308 0-.374-.004-.417-.014a.5.5 0 0 1-.37-.37C9.004 12.575 9 12.509 9 12.2V9.8c0-.308.003-.374.014-.417a.5.5 0 0 1 .37-.37Z"
            clip-rule="evenodd"
          />
        </svg>
      ),
    },
    {
      title: "Github Repo",
      url: "github",
      icons: (
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 20 20">
          <path
            fill="currentColor"
            d="M20 10.25c0 2.234-.636 4.243-1.908 6.027c-1.271 1.784-2.914 3.018-4.928 3.703c-.234.045-.406.014-.514-.093a.539.539 0 0 1-.163-.4V16.67c0-.863-.226-1.495-.677-1.895a8.72 8.72 0 0 0 1.335-.24c.394-.107.802-.28 1.223-.52a3.66 3.66 0 0 0 1.055-.888c.282-.352.512-.819.69-1.402c.178-.583.267-1.252.267-2.008c0-1.077-.343-1.994-1.028-2.75c.32-.81.286-1.717-.105-2.723c-.243-.08-.594-.03-1.054.147a6.94 6.94 0 0 0-1.198.587l-.495.32a9.03 9.03 0 0 0-2.5-.346a9.03 9.03 0 0 0-2.5.347a11.52 11.52 0 0 0-.553-.36c-.23-.143-.593-.314-1.088-.514c-.494-.2-.868-.26-1.12-.18c-.381 1.005-.412 1.912-.09 2.722c-.686.756-1.03 1.673-1.03 2.75c0 .756.09 1.423.268 2.002c.178.578.406 1.045.683 1.401a3.53 3.53 0 0 0 1.048.894c.421.24.83.414 1.224.52c.395.108.84.188 1.335.241c-.347.32-.56.779-.638 1.375a2.539 2.539 0 0 1-.586.2a3.597 3.597 0 0 1-.742.067c-.287 0-.57-.096-.853-.287c-.282-.192-.523-.47-.723-.834a2.133 2.133 0 0 0-.631-.694c-.256-.178-.471-.285-.645-.32l-.26-.04c-.182 0-.308.02-.378.06c-.07.04-.09.09-.065.153a.738.738 0 0 0 .117.187a.961.961 0 0 0 .17.16l.09.066c.192.09.38.259.567.508c.187.249.324.476.41.68l.13.307c.113.338.304.612.574.821c.269.21.56.343.872.4c.312.058.614.09.905.094c.29.004.532-.011.723-.047l.299-.053c0 .338.002.734.007 1.188l.006.72c0 .16-.056.294-.17.4c-.112.108-.286.139-.52.094c-2.014-.685-3.657-1.92-4.928-3.703C.636 14.493 0 12.484 0 10.25c0-1.86.447-3.574 1.341-5.145a10.083 10.083 0 0 1 3.64-3.73A9.6 9.6 0 0 1 10 0a9.6 9.6 0 0 1 5.02 1.375a10.083 10.083 0 0 1 3.639 3.73C19.553 6.675 20 8.391 20 10.25Z"
          />
        </svg>
      ),
    },
    {
      title: "Blogs",
      url: "blogs",
      icons: (
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 32 32">
          <path
            fill="currentColor"
            d="M4 24h10v2H4zm0-6h10v2H4zm22-4H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zM6 6v6h20V6zm20 22h-6a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm-6-8v6h6v-6z"
          />
        </svg>
      ),
    },
    {
      title: "Twitter",
      url: "twitter",
      icons: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 12 12">
          <path
            fill="currentColor"
            d="M.076 0H3.61l3.145 4.498L10.53 0h1.129L7.185 5.114L12 12H8.468L5.183 7.303L1.128 12H0l4.753-5.312z"
          />
        </svg>
      ),
    },
    {
      title: "Youtube",
      url: "youtube",
      icons: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 180">
          <path
            fill="red"
            d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134Z"
          />
          <path fill="#FFF" d="m102.421 128.06l66.328-38.418l-66.328-38.418z" />
        </svg>
      ),
    },
    {
      title: "Spotify",
      url: "soptify",
      icons: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
          <path
            fill="#1ED760"
            d="M128 0C57.308 0 0 57.309 0 128c0 70.696 57.309 128 128 128c70.697 0 128-57.304 128-128C256 57.314 198.697.007 127.998.007l.001-.006Zm58.699 184.614c-2.293 3.76-7.215 4.952-10.975 2.644c-30.053-18.357-67.885-22.515-112.44-12.335a7.981 7.981 0 0 1-9.552-6.007a7.968 7.968 0 0 1 6-9.553c48.76-11.14 90.583-6.344 124.323 14.276c3.76 2.308 4.952 7.215 2.644 10.975Zm15.667-34.853c-2.89 4.695-9.034 6.178-13.726 3.289c-34.406-21.148-86.853-27.273-127.548-14.92c-5.278 1.594-10.852-1.38-12.454-6.649c-1.59-5.278 1.386-10.842 6.655-12.446c46.485-14.106 104.275-7.273 143.787 17.007c4.692 2.89 6.175 9.034 3.286 13.72v-.001Zm1.345-36.293C162.457 88.964 94.394 86.71 55.007 98.666c-6.325 1.918-13.014-1.653-14.93-7.978c-1.917-6.328 1.65-13.012 7.98-14.935C93.27 62.027 168.434 64.68 215.929 92.876c5.702 3.376 7.566 10.724 4.188 16.405c-3.362 5.69-10.73 7.565-16.4 4.187h-.006Z"
          />
        </svg>
      ),
    },
    {
      title: "Notes",
      url: "notes",
      icons: (
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g fill="none">
            <path
              fill="#c77f67"
              d="M17.762 1H4.143c-.578 0-1.047.469-1.047 1.048v19.904c0 .579.469 1.048 1.047 1.048h13.62c.578 0 1.047-.469 1.047-1.048V2.048c0-.579-.469-1.048-1.048-1.048"
            />
            <path
              fill="#fff"
              d="M14.619 8.857a.524.524 0 0 1-.524.524H8.857a.524.524 0 0 1-.524-.524V5.714a.524.524 0 0 1 .524-.524h5.238a.524.524 0 0 1 .524.524z"
            />
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.047 4.143H5.19M2.047 9.38H5.19m-3.143 5.24H5.19m-3.143 5.237H5.19"
            />
            <path
              fill="#66e1ff"
              d="M21.953 4.143v3.143H18.81v-4.19h2.095a1.05 1.05 0 0 1 1.048 1.047"
            />
            <path fill="#ffef5e" d="M21.953 7.286H18.81v4.19h3.143z" />
            <path fill="#ff808c" d="M21.953 11.476H18.81v4.19h3.143z" />
            <path
              fill="#b2ffc0"
              d="M21.953 15.667v3.143a1.05 1.05 0 0 1-1.048 1.047H18.81v-4.19z"
            />
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.762 1H4.143c-.578 0-1.047.469-1.047 1.048v19.904c0 .579.469 1.048 1.047 1.048h13.62c.578 0 1.047-.469 1.047-1.048V2.048c0-.579-.469-1.048-1.048-1.048"
            />
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M14.619 8.857a.524.524 0 0 1-.524.524H8.857a.524.524 0 0 1-.524-.524V5.714a.524.524 0 0 1 .524-.524h5.238a.524.524 0 0 1 .524.524zm7.334-4.714v3.143H18.81v-4.19h2.095a1.05 1.05 0 0 1 1.048 1.047m0 3.143H18.81v4.19h3.143zm0 4.19H18.81v4.19h3.143zm0 4.191v3.143a1.05 1.05 0 0 1-1.048 1.047H18.81v-4.19z"
            />
          </g>
        </svg>
      ),
    },
    {
      title: "Images",
      url: "images",
      icons: (
        <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24">
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 19v-9a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm0 0l4.293-4.293a1 1 0 0 1 1.414 0L14 20M7 6V5a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1m-7-4v.01"
          />
        </svg>
      ),
    },
  ];
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="font-semibold text-xl text-primary">
            Second Brain
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="m-2">
                  <SidebarMenuButton
                    asChild
                    onClick={() => setActice(item.title)}
                    className={`bg-transparent hover:border-primary border   border-transparent duration-300 cursor-pointer ease-in-out ${
                      item.title == isActive ? "bg-primary text-white" : "text-black"
                    }`}>
                    <Link to={item.url}>
                      {item.icons}
                      <span className="font-medium">{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <div className=" rounded-xl border bg-neutral-100 border-neutral-200">
              <div className=" p-2">
                <h1 className="text-neutral-800 font-semibold text-[14px]">{user.username}</h1>
                <span className="text-neutral-600 font-medium text-[12px]">{user.email}</span>
              </div>
              <Button
                onClick={logout}
                variant="destructive"
                className="w-full flex items-center gap-2 cursor-pointer font-semibold rounded-lg">
                <LogOut className="size-5 text-base" /> Logo out
              </Button>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

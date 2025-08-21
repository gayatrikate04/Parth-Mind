"use client";

import React from "react";
import Link from "next/link";
import 
{ 
  HomeIcon,
  LayoutDashboard,
  MessageCirclePlus,
  Music2 ,
  BookCheck
} from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "../globals.css";


const Direction = () => {

  // Moveable Start here

  const [movebool, setMoveBool] = useState({
    moved: false,
    movedPositionTop: "70%",
    movedPositionBottom: "8%"
  });
  const moveAble = () => {
    const moveDiv = document.getElementById("moveAbleDiv");
    if(!movebool.moved) {
      setMoveBool(prev => ({...prev, moved: true}));
      moveDiv.style.bottom = movebool.movedPositionTop;
    } else {
      setMoveBool(prev => ({...prev, moved: false}));
      moveDiv.style.bottom = movebool.movedPositionBottom;
    }
  }

  // Moveable ends here

  // File pathway and navigation start here
  const pathName = usePathname();
  let currentIcon;
  const [otherLink, setOtherLink] = useState([
    { name: "/dashboard", value: <LayoutDashboard /> },
    { name: "/Chat-Pro", value: <MessageCirclePlus /> },
    { name: "/Music", value: <Music2 /> },
    { name: "/Diary", value: <BookCheck /> },
  ]);

  const filterLink = otherLink.filter((links) => links.name !== pathName);

  switch (pathName) {
    case "/dashboard":
      currentIcon = <LayoutDashboard />;
      break;
    case "/Chat-Pro":
      currentIcon = <MessageCirclePlus />;
      break;
    case "/Music":
      currentIcon = <Music2 />;
      break;
    case "/Diary":
      currentIcon = <BookCheck />;
      break;
    default:
      currentIcon = <HomeIcon />;
  }

  // FilePath ends here


  return (
    <div className="navigation-div" id="moveAbleDiv">
      <div className="navigation-second-div">
        {filterLink.map((element, index) => (
          <button className="navigation-btn navigation-btn-1" key={index}>
            {<Link href={element.name}>{element.value}</Link>}
          </button>
        ))}
      </div>
      <div className="navigation-third-div">
        <button className="navigation-btn" onClick={moveAble}>{currentIcon}</button>
      </div>
    </div>
  );
}


export default Direction;
import React from "react";
import CardTomas from "../components/tomas/Card";
import Header from "../components/tomas/Header";
function Tomas() {
  const characters = [
    {
      id: "1",
      name: "Thomas",
      lastName: "Shelby",
      age: "30",
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
    {
      id: "2",
      name: "Grace",
      lastName: "Shelby",
      age: "27",
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
    {
      id: "3",
      name: "Arthur",
      lastName: "Shelby",
      age: "32",
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
    {
      id: "4",
      name: "Finn",
      lastName: "Shelby",
      age: "12",
      imageUrl:
        "https://cdn-local.mebmarket.com/meb/server1/134219/Thumbnail/web_large2.gif?2",
    },
  ];
  return (
    <div>
      <Header />
      <button>เพิ่มข้อมูล นะครับ</button>
      <div className="d-flex">
        {characters.map((character) => {
          return <CardTomas key={character.id} character={character} />;
        })}
      </div>
    </div>
  );
}
export default Tomas;

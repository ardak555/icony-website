import Iconi from "iconys";
import datas from "iconys/allicons.json";
import React, { useState } from "react";

export const HomeIconPage = () => {

  const [search, setSearch] = useState("");
  console.log(search);

  
  return (
    <div>
      <div className="container bg-color">
        <div className="header col-12 d-flex justify-content-between p-3">
            <h1 className="text-white  ">Icony</h1>  
            <input onChange={(e) => setSearch(e.target.value)} className="" type="text" name="Search" id="searchBar" placeholder="Search"/>
        </div>

        <div className="w-100 mt-3 border-bottom"></div>
        <h2 className="mt-3 text-white">**Home Icons**</h2>

        <div className="mt-4 container flex-wrap d-flex flex-row  all-card">

          {/* <div data-value="home" className="col-2 d-flex justify-content-center flex-column card">
            <div className="w-100 d-flex justify-content-center">
              <img className="icon" src={datas[0].icons} alt="home1"></img>
            </div>
            <div  className="w-100 d-flex justify-content-center fw-bold">{datas[0].name}</div>
          </div> */}

          {datas.filter((data)=>{
            return data.name.toLowerCase().includes(search.toLowerCase())
          }).map((data, index) => {
            return (
              <div key={index.id} data-value={data.name} className=" d-flex justify-content-center flex-column card">
                <div className="w-100 d-flex justify-content-center">
                  <Iconi name={data.name} />
                </div>
                <div  className="w-100 d-flex justify-content-center fw-bold">{data.name}</div>
              </div>
            );
          }
          )}
        </div>
      </div>
    </div>
  );
};

export default HomeIconPage;

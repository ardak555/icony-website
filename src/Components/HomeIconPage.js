import Iconi from "iconys";
import datas from "iconys/allicons.json";
import React, { useState } from "react";

export const HomeIconPage = () => {
  const [search, setSearch] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (index) => {
    setSelectedIcon(index === selectedIcon ? null : index);
  };

  return (
    <div>
      <div className="container bg-color">
        <div className="header col-12 d-flex justify-content-between p-3">
          <h1 className="text-white">Icony</h1>
          <input
            onChange={(e) => setSearch(e.target.value)}
            className=""
            type="text"
            name="Search"
            id="searchBar"
            placeholder="Search"
          />
        </div>

        <div className="w-100 mt-3 border-bottom"></div>
        <h2 className="mt-3 text-white">**Home Icons**</h2>

        <div className="mt-4 container flex-wrap d-flex flex-row  all-card">
          {datas
            .filter((data) =>
              data.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((data, index) => (
              <div
                onClick={() => handleIconClick(index)}
                key={index.id}
                data-value={data.name}
                className=" d-flex justify-content-center flex-column card"
              >
                <div className="w-100 d-flex justify-content-center">
                  <Iconi name={data.name} />
                </div>
                <div className="w-100 d-flex justify-content-center fw-bold">
                  {data.name}
                </div>
              
                {selectedIcon === index && (
                  
                    <div className="usage-card">
                      <div className="col-4 icon-area">
                        <Iconi name={data.name} />
                      </div>
                      <div className="col-8 info-intro d-flex justify-content-center align-items-center flex-column">
                        <div className="row svg-usage">
                          <h5>Svg Usage</h5>
                          {data.svgUsage}
                        </div>
                        <div className="row react-usage">
                          <h5>React Usage</h5>
                          {data.reactUsage}
                        </div>
                      </div>
                    </div>
                  
                )}
               
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HomeIconPage;

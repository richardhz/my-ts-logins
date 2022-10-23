import React, { useState, useEffect } from "react";
import LoginItem from "./loginItem";
import Item from "../models/item";
import GetList from "../services/apiService";

const SummaryList = () => {
  const items: Item[] = [];
  const [listData, setListData] = useState(items);
  //const [dataUrl, setDataUrl] = useState("");

  const itemClickHandler = (id: string) => console.log(id);

  useEffect(() => {
    async function processGet() {
      const data = await GetList("");
      setListData(data);
    }

    processGet();
  }, []);

  //console.log("Data -> ", listData);

  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-3">
          <ul className="list-group login--list">
            <li className="list-group-item login-header">Login Items</li>
            {listData.map((d) => (
              <LoginItem
                item={d}
                key={d.id}
                onClickFunction={itemClickHandler}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SummaryList;

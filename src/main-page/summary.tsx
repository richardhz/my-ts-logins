import React, { useState, useEffect } from "react";
import LoginItem from "./loginItem";
import Item from "../models/item";
import ItemInfo from "../models/itemInfo";
import GetList, { GetInfo } from "../services/apiService";
import LoginItemInfo from "./loginItemInfo";

const SummaryList = () => {
  const items: Item[] = [];
  const info: ItemInfo = {};
  const [listData, setListData] = useState(items);
  const [isLoading, setLoading] = useState(true);
  const [requestId, setRequestId] = useState("");
  const [infoData, setInfoData] = useState(info);

  const itemClickHandler = (id: string) => setRequestId(id);

  useEffect(() => {
    const processGet = async () => {
      const data = await GetList();
      setListData(data);
      setLoading(false);
    };
    processGet();
  }, []);

  useEffect(() => {
    const processGetInfo = async (rid: string) => {
      const data = await GetInfo(rid);
      setInfoData(data);
    };
    processGetInfo(requestId);
  }, [requestId]);

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col-3">
          <div>Login Items</div>
          <ul className="list-group login--list">
            {listData.map((d) => (
              <LoginItem
                item={d}
                key={d.id}
                onClickFunction={itemClickHandler}
              />
            ))}
          </ul>
        </div>
        <div className="col-7">
          <div>Login Detail</div>
          <LoginItemInfo item={infoData} />
          <div>We have the Id when we select item:- {requestId}</div>
        </div>
      </div>
    </div>
  );
};

export default SummaryList;

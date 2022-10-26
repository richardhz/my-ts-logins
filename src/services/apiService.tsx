import Item from "../models/item";
import ItemInfo from "../models/itemInfo";

const GetList = async () => {
  const records: Item[] = [];
  let myData = records;
  let pageUrl = "https://sba-local.logins.com:44395/api/logins";

  const resp = await fetch(pageUrl);
  myData = await resp.json();
  /*
  myData = [
    {
      id: "c778a338-43be-47f6-a7bd-79f82403072f",
      name: "Amazon",
    },
    {
      id: "6b0dcec0-ae41-488c-b53e-3be471774519",
      name: "Apress",
    },
    {
      id: "a72822b2-aac1-45e8-8c75-d0ea0c15abae",
      name: "Aris Bass Blog",
    },
  ];*/
  console.log("Api called...");
  return myData;
};

const GetInfo = async (id: string) => {
  let pageUrl = `https://sba-local.logins.com:44395/api/logins/${id}`;

  const resp = await fetch(pageUrl);
  let myInfo: ItemInfo = await resp.json();
  return myInfo;
};

export default GetList;
export { GetInfo };

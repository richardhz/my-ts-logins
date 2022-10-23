import Item from "../models/item";

const GetList = async (pageUrl: string) => {
  const records: Item[] = [];
  let myData = records;
  if (pageUrl === "") {
    pageUrl = "http://sba-local.logins.com:5000/api/logins"; //"https://sba-local.logins.com:44395/api/logins";
  }

  //const resp = await fetch(pageUrl, { mode: "no-cors" });
  //console.log(resp);
  //myData = await resp.json();
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
  ];
  console.log("Api called...");
  return myData;
};

export default GetList;

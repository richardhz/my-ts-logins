import ItemInfo from "../models/itemInfo";

const LoginItemInfo = (props: { item: ItemInfo }) => {
  console.log(props.item.name);
  return (
    <>
      <div>{props.item.name}</div>
      <div>{props.item.login}</div>
      <div>{props.item.password}</div>
      <div>{props.item.description}</div>
    </>
  );
};

export default LoginItemInfo;

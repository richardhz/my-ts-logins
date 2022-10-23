import Item from "../models/item";

const LoginItem = (props: { item: Item; onClickFunction: any }) => {
  const handleClick = () => props.onClickFunction(props.item.id);
  return (
    <li
      className="list-group-item list-group-item-action"
      onClick={handleClick}
    >
      {props.item.name}
    </li>
  );
};

export default LoginItem;

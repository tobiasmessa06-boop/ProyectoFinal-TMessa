import Item from "../Item/Item";

const ItemList = ({ items }) => {
  return (
    <>
      {items.map(game => (
        <Item key={game.id} {...game} />
      ))}
    </>
  );
};

export default ItemList;

import { getItemsByBox, getBoxById, useQuery } from "wasp/client/operations";
export const HelloPage = (props) => {
  const { data: box } = useQuery(getBoxById,  props.match.params.name);
  const { data: items } = useQuery(getItemsByBox, props.match.params.name);

  return (
    <div>
      <h1>Box Name: {box && box.name}</h1>
      <hr />
      {items && items.map((box, idx) => <h1 key={idx}> {box.name} </h1>)}
    </div>
  );
};

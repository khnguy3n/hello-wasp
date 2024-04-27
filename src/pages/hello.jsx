import { getItemsByBox, getBoxById, useQuery } from 'wasp/client/operations'
export const HelloPage = (props) => {
  const { data: box } = useQuery(getBoxById, "1yh4KS9pnirLgpKOl8Z6B");
  const { data: items } = useQuery(getItemsByBox, "1yh4KS9pnirLgpKOl8Z6B");

  return (
    <div>
      <h1> Hi {props.match.params.name} mom </h1>
      <p> should show item data {box && box.name}</p>
      <div>
        {items && items.map((box, idx) => (
          <h1 key={idx}> {box.name} </h1>
        ))}
      </div>
    </div>
      )
}

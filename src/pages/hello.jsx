export const HelloPage = (props) => {
  return (
    <div>
      <h1> Hi {props.match.params.name} mom </h1>
    </div>
  )
}

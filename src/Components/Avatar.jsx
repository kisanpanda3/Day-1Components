import Button from "./Button";

function Avatar(props) {
  const { name, src, rounded } = props;
  const style = {
    borderRadius: "1rem"
  };
  if (rounded) {
    style.borderRadius = "50%";
  }
  return (
    <div>
      <img style={style} src={src} alt="icon" width="130px" />
      <h3>{name}</h3>
      <Button text="Say Hello" onClick={() => alert(`Say Hello to ${name}`)} />
      <br />
    </div>
  );
}
export default Avatar;

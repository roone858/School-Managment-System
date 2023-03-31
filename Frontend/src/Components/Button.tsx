
interface Props {
  color: string;
  name: string;
  onClick?: () => void;
}

const Button = ({color,name,onClick}: Props) => {
  return (
    <button onClick={onClick} type="button" className={"btn btn-"+color}>
      {name}
    </button>
  );
};

export default Button;

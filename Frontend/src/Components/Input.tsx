export const Input = (props: any) => {
  return (
    <div className={"form-group col-md-6"}>
      <label htmlFor={props.id}>{props.text}</label>
      <input
        onChange={props.onChange}
        name={props.name}
        type={props.type}
        className="form-control"
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
};

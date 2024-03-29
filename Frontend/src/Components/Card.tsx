const Card = ({ title, description, image }: any) => {
  return (
    <>
      <div className="card border h-100 ">
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>

          <a href="#" className="btn btn-primary disabled">
            Enroll Me
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;

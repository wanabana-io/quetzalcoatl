const Card = ({img, icon, title, subtitle, description}) => {
  return (
    <>
      <div className="card-container">
        <img src={img} alt="Planning" className="card-image" />
        <div className="information-container">
          <div className="title-container">
            <img src={icon} alt="Planning icon" className="title-container__icon"/>
            <h1 className="title-container__title">{title}</h1>
          </div>
          <h3 className="subtitle">{subtitle}</h3>
          <h2 className="description">{description}</h2>
        </div>
      </div>
    </>
  );
};

export default Card;

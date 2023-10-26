const TwoLineHeading = ({ title: title, subtitle: subtitle }) => {
  return (
    <div className="line-title flex-container">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </div>
  );
};
export default TwoLineHeading;

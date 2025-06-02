


const Background = (props) => {
  return (
    <div
      className="bg-cover bg-center h-50 sm:h-100 sm:bg-fixed"
      style={{ backgroundImage: `url(${props.backgroundImage})` }}
    ></div>
  );
};

export default Background;

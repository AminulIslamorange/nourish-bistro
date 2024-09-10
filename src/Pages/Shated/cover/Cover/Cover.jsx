

const Cover = ({img,title,details}) => {
    return (
        <div
        className="hero h-[600px]"
        style={{ backgroundImage:`url(${img})`}}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md"
           style={{
    background: "rgba(21, 21, 21, 0.60)",
    width: "900px",
    height: "200px",
    padding:'10px'
    
   
  }}>
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">
              {details}
            </p>
           
          </div>
        </div>
      </div>
    );
};

export default Cover;
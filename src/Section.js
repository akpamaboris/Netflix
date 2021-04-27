import movies from "./movies.json";

const Section = () => {
  return (
    <div>
      {movies.map((x) => (
        <div>
          <h2>{x.category}</h2>
          <div className="img-car">
            {x.images.map((y) => (
              <div>
                <img src={y} alt="cinema cover" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Section;

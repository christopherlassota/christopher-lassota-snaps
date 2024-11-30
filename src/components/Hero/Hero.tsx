import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero">
      <h3 className="hero__title">Our Mission:</h3>
      <h1 className="hero__statement">
        Provide photographers a space to share photos of the neighborhoods they
        cherish,
        <span className="hero__span"> expressed in their unique style.</span>
      </h1>
    </section>
  );
};

export default Hero;

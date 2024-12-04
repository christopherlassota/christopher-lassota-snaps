import "./Details.scss";

const Details = ({ imageUrl,name,tags }: detailsProps) => {
    return (
        <article
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="details"
    >
      <p className="details__name">{name}</p>
      <div className="details__tagbar">
        <ul className="details__taglist">
          {tags.map((tag:string, index:number) => (
            <li key={index} className="details__tag">
              {tag}
            </li>
          ))}
        </ul>
        
      </div>
    </article>
    )
}

export default Details;
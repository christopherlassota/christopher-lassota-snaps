import "./Details.scss";

interface detailsProps {
    imageUrl: string;
    name: string;
    tags: string[];
    likes: number;
    date: number;
}

const Details = ({ imageUrl,name,tags,likes,date }: detailsProps) => {
    const formattedDate = new Date(date).toLocaleDateString('en-US');

    return (
        <article
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
      className="details"
    >
      <div className="details__tagbar">
        <ul className="details__taglist">
          {tags.map((tag:string, index:number) => (
              <li key={index} className="details__tag">
              {tag}
            </li>
          ))}
        </ul>
        <ul className="details__like-list">
            <li className="details__like-info">{likes}</li>
            <li className="details__like-info">{formattedDate}</li>
        </ul>
          <p className="details__name">Photo by {name}</p>
      </div>
    </article>
    )
}

export default Details;
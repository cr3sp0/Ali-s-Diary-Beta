interface Props {
  date: string;
  title: string;
  description: string;
  imageUrl: string;
}

const Article = ({ title, description, date, imageUrl }: Props) => {
  function artCoverCtrl() {}

  return (
    <div className="contaimer h-art-home">
      <div className="article">
        <div className="art-img">
          <img src={imageUrl} alt="img" />
        </div>

        <div className="art-data">
          <p className="art-date">{date}</p>
          <h2 className="art-title">{title}</h2>
          <div className="art-desc" style={{ whiteSpace: "pre-line" }}>
            {description}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;

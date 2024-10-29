import Article from "./Article";
import articlesData from "../json/articles.json";

const PageContent = () => {
  const ArticleList = () => {
    return articlesData.map((article, index) => (
      <Article
        key={index}
        title={article.title}
        description={article.description}
        date={article.date}
        imageUrl={article.imageUrl}
      />
    ));
  };

  return (
    <div className="container lg flex-row">
      <div className="column c-l"></div>
      <div className="articles">{ArticleList()}</div>
      <div className="column c-r"></div>
    </div>
  );
};

export default PageContent;

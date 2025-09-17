import './Article.css';

const Article = ({ title, author, date, content, image, imageAlt, imageCaption }) => {
  return (
    <article>
      <header>
        <h2>{title}</h2>
        <time datetime={date}>{date}</time>
        <p className="author">Por: {author}</p>
      </header>
      <figure>
        <img src={image} alt={imageAlt} />
        <figcaption>{imageCaption}</figcaption>
      </figure>
      <div className="content">
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  );
};

export default Article;

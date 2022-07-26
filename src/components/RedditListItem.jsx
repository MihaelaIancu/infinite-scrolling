function RedditListItem(props) {
  const { title, thumbnail, name, url } = props;
  return (
    <div className="reddit-item">
      <a href={url} target="__blank">
        <h2>{title}</h2>
      </a>
      <div className="item-body">
        <p>{name}</p>
        <img src={thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
}

export default RedditListItem;

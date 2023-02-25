export const GifItem = ({ title, url, username, profileUrl }) => {
  return (
    <>
      <div className="main__card-item">
        <img className="main__image" src={url} alt={title} />
        <div className="main__cart-data">
          <p className="main__name">{title}</p>
          <div className="main__card-information">
            <a href={profileUrl} className="main__username" target="_blank">
              Autor: <span>{username}</span>
            </a>
            <a className="main__btn-original" href={url} target="_blank">
              Ver Original
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

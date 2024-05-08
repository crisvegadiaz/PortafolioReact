function LiProyec({ enlace1, enlace2, img, titulo, texto, children }) {
  return (
    <li>
      <img src={img} width="1920" height="965" />
      <div className="li__datos">
        <h4>Tecnologías</h4>
        <ul>
          {Array.isArray(children) ? (
            children.map((child, index) => <li key={index}>{child}</li>)
          ) : (
            <li>{children}</li>
          )}
        </ul>
        <h4>{titulo}</h4>
        <p>{texto}</p>
      </div>
      <div className="li__button">
        <a href={enlace1} target="_blank">
          <i className="fa-brands fa-github"></i>
        </a>
        {enlace2 && (
          <a href={enlace2} target="_blank">
            <i className="fa-solid fa-globe"></i>
          </a>
        )}
      </div>
    </li>
  );
}

export default LiProyec;

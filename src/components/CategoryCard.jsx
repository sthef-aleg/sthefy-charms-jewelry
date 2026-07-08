import "./CategoryCard.css";

function CategoryCard({
  icon,
  title,
  description,
  button,
  image
}) {
  return (
    <div className="category-card">

      <img
        src={image}
        alt={title}
        className="category-image"
      />

      <div className="category-content">

        <span>{icon}</span>

        <h3>{title}</h3>

        <p>{description}</p>

        <button>{button}</button>

      </div>

    </div>
  );
}

export default CategoryCard;
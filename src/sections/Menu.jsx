import { menuData } from "../data/menuData";

function Menu() {
  return (
    <section className="menu-section" id="menu">
      <div className="menu-header">
        <p className="menu-label">THE NOIR MENU</p>

        <h2>
          Crafted for
          <span> curious palates.</span>
        </h2>

        <p className="menu-description">
          A carefully curated selection of dishes built around seasonal
          ingredients, bold flavours and modern technique.
        </p>
      </div>

      <div className="menu-grid">
        {menuData.map((item, index) => (
          <article className="menu-card" key={item.name}>
            <div className="menu-card-image">
              <img src={item.image} alt={item.name} loading="lazy" />
            </div>

            <div className="menu-card-top">
              <span>0{index + 1}</span>
              <span>{item.category}</span>
            </div>

            <div className="menu-card-content">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>

            <div className="menu-card-bottom">
              <span>{item.price}</span>
              <span className="menu-arrow">↗</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Menu;
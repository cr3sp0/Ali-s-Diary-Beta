const items = ["Home", "About", "Search", "Social"];

const NavBar = () => {
  let count = 0;

  function BorderCtrl() {
    count++;
    if (count < items.length) return <div className="separator-v"></div>;
    else return "";
  }

  return (
    <>
      <div className="container lg">
        <div className="nav-t">
          <div className="nav-row">
            {items.map((item) => (
              <>
                <div className={`nav-block ${item}`}>{item}</div>
                {BorderCtrl()}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;

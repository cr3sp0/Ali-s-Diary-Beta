import NavBar from "./NavBar";

interface Props {
  title: String;
}

const PageTop = ({ title }: Props) => {
  return (
    <>
      <div className="container lg">
        <div className="title">{title}</div>
      </div>
      <div className="navbar">
        <NavBar />
      </div>
    </>
  );
};

export default PageTop;

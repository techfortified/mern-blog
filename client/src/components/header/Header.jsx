import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="overlay" />
      <div className="headerTitles verticalCenter">
        <h1 className="headerTitleLg">Blog</h1>
        <h5 className="headerTitleSm">
          MERN ~ Mongo | Express | React | Node ~ Javascript
        </h5>
      </div>
    </div>
  );
}

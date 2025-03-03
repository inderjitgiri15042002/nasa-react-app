export default function Main(props) {
  const { data } = props;
  console.log("data", data);
  return (
    <div className="imgContainer">
      <img src={data.url} alt={data.title || "bg-img"} className="bgImage" />
    </div>
  );
}

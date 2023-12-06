export default function Pokemon({ name, imge }) {
  return (
    <div>
      {/* <span>{key}</span> */}
      <h1>{name}</h1>
      <img src={imge} alt="" />
    </div>
  );
}

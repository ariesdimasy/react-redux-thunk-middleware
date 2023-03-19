export default function BookPages({ books }) {
  return (
    <div>
      <h3> Book Pages Component </h3>

      <ul>
        {books.map((item, index) => {
          console.log(index);
          return <li key={index}> {item}</li>;
        })}
      </ul>
    </div>
  );
}

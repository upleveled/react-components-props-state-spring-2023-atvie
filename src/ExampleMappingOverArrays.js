// Map is a method that allows to transform arrays into new arrays
// Map doesn't change the length of the array
// Map also behave as a loop over the array

export default function ExampleMappingOverArrays() {
  const animals = ['elephant', 'lion', 'mouse'];

  return (
    <div>
      {/* [<div>elephant</div>,<div>lion</div>,<div>mouse</div>] */}
      {animals.map((animal) => {
        return <div key={`animal-div-${animal}`}>{animal}</div>;
      })}

      {/* [<button>elephant</button>,<button>lion</button>,<button>mouse</button>] */}
      {animals.map((animal) => {
        return <button key={`animal-button-${animal}`}>{animal}</button>;
      })}
    </div>
  );
}

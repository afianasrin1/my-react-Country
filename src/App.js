import "./App.css";
import Countries from "./components/Countries/Countries";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Countries></Countries>
      <Footer></Footer>

      {/* <LoadCountries></LoadCountries> */}
    </div>
  );
}

// function LoadCountries() {
//   const [countries, setCountries] = useState([]);
//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((res) => res.json())
//       .then((data) => setCountries(data));
//   }, []);
//   return (
//     <div className="country">
//       <h1>visiting Every country of the world</h1>
//       <h3>Available countreis:{countries.length} </h3>
//       {countries.map((country) => (
//         <Country
//           name={country.name.common}
//           population={country.population}
//           flags={country.flags.png}
//           languages={country.languages?.bul}
//           region={country.region}
//         ></Country>
//         // <p>Country Name:{country.name.common}</p>
//       ))}
//     </div>
//   );
// }
// function Country(props) {
//   return (
//     <div>
//       <h2>name:{props.name}</h2>
//       <h5>population :{props.population}</h5>
//       <h3>flags :{props.flags.png}</h3>
//       <h4>languages :{props.languages}</h4>
//       <h5>region :{props.region}</h5>
//     </div>
//   );
// }
export default App;

// useState in Next.js
// "use client";
// import { useState } from "react";

// function State1(){
//     const [color,setColor] = useState("red");
//     return(
//         <div>
//             <h1>My favourite color is {color}! </h1>
//             <button className="bg-black text-white w-16 h-11" 
//             type="button"
//             onClick = {() => setColor("blue")}>Blue</button>
//             <br />
//             <br />
//         </div>
//     )
// }
// export default State1;


// function Car(){
//     const [carname, setCarName] = useState(" Toyota Corolla");
//     const [color, setColor] = useState("White");
//     const [model, setModel] = useState("Mustang");
//     const [year, setYear] = useState("1970");
    
//     return(
//         <div>
//       <h1 className="text-5xl font-bold font-mono">My {carname} </h1>
//       <p className="text-yellow-600 font-serif items-center">
//         It is a {color} with {model} and year in {year}.
//       </p>
//         </div>
//     )
// }
// export default Car;


// function Car1(){
//     const[car,setCar] = useState({
//         brand:"Ford",
//         model:"Mustang",
//         year:1964,
//         color:"red",
//     });
//     return(
//         <div>
//         <h1 className="text-5xl font-mono ">My {car.brand} </h1>
//         <p>
//             It is a {car.color} {car.model} from {car.year}.
//         </p>
//         </div>
//     )
// } 
// export default Car1;


// function Car2(){
//     const[car,setCar] = useState({
//                 brand:"Ford",
//                 model:"Mustang",
//                 year:1964,
//                 color:"red",
// });

// const updateColor = () => {
//     setCar(previousState => {
//         return{...previousState, color:"Blue"}
//     });
// }

// return(
//     <div>
//     <h1>My{car.brand} </h1>
//     <p>
//         It is a {car.color} {car.model} from {car.year}.
//     </p>
//     <button 
//     type="button"
//     onClick={updateColor}>
//         Blue
//     </button>
//     </div>
// )

// }
// export default Car2;
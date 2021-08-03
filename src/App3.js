// function Result({ json }) {
//   if (json !== 0) {
//     return (
//       <div>
//         {/* <h2>Text: {json[0]["phonetics"][0]["text"]}</h2> */}
//         {/* <audio controls>
//           <source src={json[0]["phonetics"][0]["audio"]} type="audio/mpeg" />
//         </audio> */}
//         {/* <h4>Part of Speech: {json[0]["meanings"][0]["partOfSpeech"]}</h4> */}

//         {/* <h4>
//           Synonyms:
//           {item["synonyms"].map((value) => (
//             <span>{value}, </span>
//           ))}
//         </h4> */}

//         <hr />
//         <h4>
//           {json[0].meanings[0]["definitions"].map((item) => (
//             <div>
//               <h4>Definition: {item.definition}</h4>
//               <h4>{item.example ? <p>Example: {item.example}</p> : ""}</h4>
//               <hr />
//             </div>
//           ))}
//         </h4>
//       </div>
//     );
//   } else {
//     return <div></div>;
//   }
// }

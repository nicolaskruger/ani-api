import React from 'react';
import './App.css';
import styled from 'styled-components';
import { COLOR } from './constants';
import { RouterBuilder } from './routers';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }
const { Background } = COLOR;

const DivApp = styled.div`
    background-color: ${Background};
    width: 100%;
    min-height: 100vh;
  `;
const Container = styled.div`
    max-width: 1000px;
    width: 90%;
    margin: 0 auto;
  `;

function App() {


  return (
    <DivApp>
      <Container>
        <RouterBuilder />
      </Container>
    </DivApp>
  );
}


export default App;

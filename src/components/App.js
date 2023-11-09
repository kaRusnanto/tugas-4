// function Hello() {

//     const nama = "Erik"

//     return(
//         <div>
//         <Navbar />
//             <h2>Hello {nama}</h2>
//         </div>
//     )
// }

// function Navbar () {
//     return(
//         <ul>
//             <li>Home</li>
//             <li>Profile</li>
//             <li>Setting</li>
//             <li>About</li>
//         </ul>
//     )
// }

import React from 'react';
import ReactDOM from 'react-dom';

const Hello = () => {
  const nama = 'nanto';
  return (
    <div>
      <h1>Hello {nama}</h1>
    </div>
  );
};

const Header = () => {
  const itemHeader = ['Home', 'About', 'Profile'];
  return (
    <div>
      <ul>
        {itemHeader.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Main = () => {
  const nama = 'nanto';
  return (
    <div>
      <p>Hello {nama}</p>
    </div>
  );
};

const Footer = () => {
  const author = 'rusnanto';
  return (
    <div>
      <p>Copyright {author}</p>
    </div>
  );
};

const App = () => (
  <div>
    <Hello />
    <Header />
    <Main />
    <Footer />
  </div>
);

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);

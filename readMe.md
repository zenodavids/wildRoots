STEP 1

\\\\\\\\\\\\\\\\\\\\ setting up
-- create two new folders namely;

- client - this is where our react application will be.
  we will use // npx create-react-app client
  to create this folder

- smart_contract - this is where our solidity contract will go.

//////////////////////////////////////////////////////////////////// client folder
\\\\\\\ using VITE to replace REACT

-- initailise our terminal

- in vscode, click on the 'view' tab and click on terminal, cd into our 'client' folder.
- open the browser and go to 'vitejs.dev', click on the get started button to view the documentation.
  --- in the terminal;
  // npm init vite@latest
  askes you for project name = ./ because we already in the project directory.
  askes you for the package name = 'name of your project' //wildroots
  asks you for a framework = react
  asks you for a variant = react
  next we run // npm install
  then we run // npm run dev
- and our react app is now running!

\\\\\\\\\\\\ next we use TAILWIND TO REPLACE CSS
tailwind is a css framework that allows you to style your web apps without leaving html.

- next, we install;
  // npx tailwindcss init
  this creates the 'tailwind css config file'

-to run tailwindcss with 'vite', we install the 'postcss' in tailwind too.
// npm install -D tailwindcss postcss autoprefixer

- then we go to the documentation on the tailwind website, copy;
  module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
  extend: {},
  },
  plugins: [],
  }

- and paste this in the'tailwind.config.js' file to replace whats there.

- then go back to the doc and copy all the tailwind css directives;
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
- and paste it in the 'index.css'file (thats in the 'src' folder) to replace whats there

- then we relace everything in the 'app.jsx' file with this;
  const App = () =>{
  return (
  <div className="App">
  <h1 class="text-3xl font-bold underline">
  Hello world!
  </h1>
  </div>
  )
  }
  export default App

- to check if we good (the h1 must be underlined and bold), open terminal, cd into client and run // npm run dev

//////////////////////////////////////////////

/////////////////////////////////////////////////////// smart_contract

\\\\\\\\\\\\\\
-- first we cd into the smart_contract directory,
// npm init -y
this initializes an empty json package

STEP 2

\\\\\\\\\\\\\\\\\\ working on react
-- we create a flder inside src called 'components' and create six files inside the components flder namely;

- Welcome.jsx
- Navbar.jsx
- Footer.jsx
- Services.jsx
- Transactions.jsx
- Loader.jsx

each file will contain a code snippet like;
const Filename = () => {return (<h1>Filename</h1>);}
export default Filename

-- in the same components folder, we create a 'index.js'.
this will help us export all the components from a single file.
and the js file will hold;
export{ default as Loader} from './Loader';
export{ default as Navbar} from './Navbar';
export{ default as Transactions} from './Transactions';
export{ default as Services} from './Services';
export{ default as Footer} from './Footer';
export{ default as Welcome} from './Welcome';

-- then we open app.jsx and paste this in;
import{ Navbar, Welcome, Footer, Services, Transactions} from './index.js';

const App = () =>{
return (

<div className="min-h-screen">
<div className='gradient-bg-welcome'>
<Navbar />
<Welcome />
</div>
<Services />
<Transactions />
<Footer />
</div>
);
}
export default App

- we test run using
  // npm run dev

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

STEP 3

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ installing dependecies our react app will use

// npm i react-icons ethers

- react-icons: this will install react icons.
- ethers: allows us to interact with the blockchain and smart cards

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

STEP 4

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ setting up our components

//// Navbar
-- in the app.jsx, hold down the ctrl key and click on 'Navbar'. this opens the navbar.jsx file.

\\\\\\\\\\\\\\\\\\\\\\\app.jsx
import { Navbar, Welcome, Footer, Services, Transactions } from "./components";

const App = () =>{
return (

<div className="min-h-screen">
<div className="gradient-bg-welcome">
<Navbar />
<Welcome />
</div>
<Services />
<Transactions />
<Footer />

    </div>

)
}
export default App

\\\\\\\\\\\\\\\\\\\\\\\\ the smart contract

cd into smart_contract
run// npm i hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers

\\hardhat is ethereum based and helps us to run solidity locally

\\next npx hardhat

> create a basic sample project
> tap enter key again

\\npx hardhat test
-- this creates a sample version of solidity

////////////

\\\\\\\\\\\\ lets create our real smart contract

\\ download the extension "solidity" in vscode
-- this will make syntax highlighting easy

\\ we go to the contracts directory and delete the greeter.sol file. thats the demo contract.

- then we create a new contract file in the same directory called Transactions.sol
  \\ to deploy our smart contract, we need to go to the scripts folder and rename the file there to 'deploy.js'

\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\ getting fake ethereum to test your deployment
\\ Gas

- this are small fractions of etheruem used to make something happen and we need Gas to be able to deploy our ethereum
- to get gass, we need to do the folowing;
  -- download the metamask extension into your browser from your browser store,
  -- sign up / sign in by inputing your 12 phrase
  -- set up your metamask and go the settings.
  -- toggle the test network on and click on the top button with a dropdown sign and choose 'posten test network'
  -- copy your ethereum wallet code
  -- then go to faucet.egorfine.com and paste your ethereum wallet code there.

  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  \\\\\\\\\\\\ using alchemy to assist in deployment

  - go to alchemy.com and sign up
  - on the top right of the screen, you'll see a 'create app' button which you will click annd input the name of your app/ website, the description, chain(ethereum) and network(ropsten to test it and mainet for serious shit) and click create app once we done
  - we then click on the 'view details' of the newly created app.
    then we click on 'view key' thats on the top-right corner of the screen and copy the 'http'key.

  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  \\\\\\\\\\\\\\\\\\\\\\\\\\\\ DEPLOYING OUR CONTRACT

  - since we now have our config file (hardhat.config.js), our solidity smart contract(Transactions.sol) and a script we will use to deploy that contract (deploy.js), we are ready to deploy it;

\\ in the terminal,

- open the terminal and cd into the client folder,
- type 'npx hardhat run scripts/deploy.js --network ropsten' and click enter.
- this action will generate two things for us; a contract address and a folder named 'artifacts'.
  -- contract address:
  we will copy that and inside the src folder, create a folder 'utils' and a file named constants.js inside that folder paste it (the contract address) under the variable name 'contractAddress' in the constants.js file thats in the utils folder.

-- the artifacts folder:
following this path; artifacts/contracts/Transactions.sol/Transactions.json and the contents inside the json file is called an 'a.b.i' and this contains all the info about our smart contracts.

- we copy the entire contents in the file, go to utils folder, create a new file called 'Transactions.json' and paste it in the file.

\\ then we import the abi in the constants file

- - after all these, if your gas fes fees have reduced, it means we deloyed the smart contract successfully.

\\ to connect our smart contract to our react app and actually make it to send ethereum,

- first, we create a new folder named 'context' inside the client/src.
- in the context folder, we create a new file called 'TransactionContext.jsx' and in here we will run our api that will connect both ends. this will serve the purpose of connecting to the blockchain. this will allow us to write our code (api) only in one place

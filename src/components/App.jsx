import React from 'react';
import Logo from './logos/Logo1';
import Creac from './account/Creac';
import Ban_car from "./bannercarousel/Ban_car";
import Signin from "./signin/Signin";
import Signsecond from "./signsecond/Signsecond";
import Success from './success/Success';



function App() {
  const[loginCheck,setLogin]=React.useState(false) 
  const [value,setValue]=React.useState(false)
   
  if(value)
  return <Success />;
  else
  return (
    <div className='sign-wrapper'>
    <div >
    {loginCheck ? <Signin /> : <Signsecond value={value} setValue={setValue} />}
    <Ban_car />
    </div>
      <Logo />
      <Creac loginCheck={loginCheck} setLogin={setLogin} />
    </div>
  );
}

export default App;

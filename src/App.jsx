import { useEffect, useState } from 'react';
import { Button, Card, Typography } from '@mui/material';
import { RecoilRoot, useRecoilValue, useSetRecoilState , atom} from 'recoil';

function App() {

  return (    

    <RecoilRoot>
        <div style={{
      display: "flex", 
      justifyContent: "center", 
    }}>
      <Card variant="outlined" style={{
        width: 400,
        padding: 20,
        border: "2px solid black",
        marginTop: 100,
        backgroundColor: "#f0f0f0", // Light gray background
      }}>
        <Typography variant='h5' style={{
          display: 'flex',
          justifyContent: 'center',
          color: "#333", // Dark gray text color
        }}>COUNTER GAME</Typography>
        <br/>
        <Buttons />
        <DisplayContent /> 
      </Card>
    </div>     
  

    </RecoilRoot>
  )
}

function Buttons() {
  return <div style={{
    display: "flex",
    justifyContent: "space-between",
    marginTop: 20,
  }}>
    <Increase />
    <Decrease />
  </div>;
}

function Increase() {
  const setCount = useSetRecoilState(countState);
  return <div>
    <Button variant="contained" color="primary" onClick={() => setCount(exisitingCount => exisitingCount+ 1)}>
      INCREASE COUNTER
    </Button>
  </div>;
}

function Decrease() {

  const setCount = useSetRecoilState(countState);
  return <div>
    <Button variant="contained" color="secondary" onClick={() => setCount(exisitingCount => exisitingCount-1)}>
      DECREASE COUNTER
    </Button>
  </div>;
}

function DisplayContent() {

  const count = useRecoilValue(countState);
  return <div style={{
    display: "flex", 
    justifyContent: "center",
    marginTop: 20,
  }}>
    <Typography variant="h5" style={{ color: "#007bff" }}>{count}</Typography>
  </div>;
}

export default App; 

const countState = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});
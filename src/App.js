import React from "react";
import './App.css';
import{ Grid } from '@material-ui/core'
import Nav from "./components/Nav";
function App() {   
  return (
    <>    
        
        <div className="App">
            <Grid container>
                <Grid item container>
                    <Grid item xm={0} sm={2} />
                    <Grid item xm={12} sm={8}>
                        <Nav />
                    </Grid>
                    <Grid item xm={0} sm={2} />
                </Grid>
            </Grid>
        </div>
        
        
    </>  
  )    
}
export default App;
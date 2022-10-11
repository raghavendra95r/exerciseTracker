import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
function App() {
  return (
    <React.Fragment>
<Navbar />
<Routes>
       
     <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
     <Route path="/create" component={CreateExercise} />
     <Route path="/user" component={CreateUser} />  
  
     </Routes>
   
    </React.Fragment>
   
    
  );
}

export default App;

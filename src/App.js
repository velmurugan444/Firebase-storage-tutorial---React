import './App.css';
import React,{useState} from 'react';
import { db, storage } from './files/firebase';

function App() {
  const [file, setfile] = useState('');

  const handleSubmit = (e)=>{
    var currentdate = new Date();
    var day = currentdate.getDate();
    var month = currentdate.getMonth() + 1;
    var year = currentdate.getFullYear();
    var fulldate = day + "-0"+month+"-"+year;
    e.preventDefault();
    if(file === ""){
      alert("please pick atlease one file");
    }else{
      storage.ref("images").child(fulldate.toString()+".jpg").put(file).then(()=>{
        storage.ref("images").child(fulldate.toString()+".jpg").getDownloadURL().then((url)=>{
          db.collection("images").add({
            imageurl:url,
          }).then(()=>{
            alert("image inserted successfully");
          })
        })
      })
    }
  }
  return (
    <div className="App">
     <h1>Rect-Firebase Storage Tutorial</h1>
     <br/><br/>
     <input type="file"onChange={(e)=>setfile(e.target.files[0])} />
     <br/><br/>
     <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default App;

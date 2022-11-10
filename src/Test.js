import React, { useState } from 'react'
import {db} from './firebase'
import {addDoc, updateDoc,setDoc,collection,arrayUnion} from "firebase/firestore"

function Test(props) {

  const[ans,setans]=useState([])
  const[fans,setfans] = useState([])
  const[nam,setnam] = useState("")
  const[id,setid] = useState("")

  const l=["cy1","cy2","cy3"]
  const scs = {cy1:10,cy2:20,cy3:30}
  let[scr,setscr] = useState(0)

  const usersCollectionsRef = collection(db,"flaghost")

  function funm(){
    setnam(props.nam)
    setid(props.id)

    if(l.includes(ans) && !(fans.includes(ans))){
      setscr(scr = scr + scs[ans]) 
      setfans([...fans,ans])
      
      // setscr(scr+scs.ans)
      alert("Flag Accepted")
      console.log(scr,"nish")     
    }else{
      alert("Flag Rejected")
    }
  }
  const fu = async() => {
    console.log(fans)
    await addDoc(usersCollectionsRef,{ans:fans,score:scr,name:nam,id:id}).then((res)=>{
      console.log(res)
              })
  } 
  return (
    <div>
        <h2>Enter the Answer  :</h2>
        <input type="text" onChange={(e)=>{setans(e.target.value)}}/>
        <button onClick={funm}>Check</button>
        <button onClick={fu}>Submit</button>
        <h1>{scr}</h1>
    </div>
  )
}

export default Test
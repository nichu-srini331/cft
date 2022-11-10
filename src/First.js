import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from "react-router-dom";
import {db} from './firebase'
import {addDoc, updateDoc,setDoc,collection,arrayUnion} from "firebase/firestore"

function First(props) {

    const navigate = useNavigate();
    const[id,setid] = useState("")
    const[name,setname] = useState("")
   const[score,setscore] = useState("")
    const[ans,setans] = useState(["nichu"])

    const usersCollectionsRef = collection(db,"flaghost")

    const nxt = async() => {
      navigate("/t")
      props.onsubmit(name)
      props.sub(id)
    }

    
    const func =async() => {
        
        await addDoc(usersCollectionsRef,{name:name,id:id,ans:ans,score:score}).then((res)=>{
console.log(res)
        })
        await setDoc(usersCollectionsRef,
          { ans: arrayUnion(...ans) }
          , {merge: true});
    } 

    useEffect(()=>{
      console.log(id)
      console.log(name)
    })

  return (
    <div>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Unique ID : </Form.Label>
      <Form.Control type="email" placeholder="Enter ID" onChange={(e)=>{setid(e.target.value)}}/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Name : </Form.Label>
      <Form.Control type="email" placeholder="Enter name" onChange={(e)=>{setname(e.target.value)}} />
    </Form.Group>
    <Button variant="primary" type="submit" onClick={nxt}>
      Submit
    </Button>
  </Form></div>
  )
}

export default First
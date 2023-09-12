import { useEffect, useState } from "react";
import './bottls.css'
import Bottle from "../bottle/Bottle";
import { GetStordCard, addTOLS, remnovedfromLC } from "./utlittes/LocalStroje";
import Cart from "../Cart/Cart";
const Bottls = () => {

    const [bottles,setbottles] = useState([]);
    const [Card,setCard] = useState([])
    useEffect(()=>{
        // const ApicallFunction=async()=>{
        // const res = await fetch('bottls.json');
        // const data = res.json()
        // setbottles(data)
        // }
        // ApicallFunction()
        fetch('bottls.json')
        .then(res=>res.json())
        .then(data=>setbottles(data))
    },[])
    useEffect(()=>{
       if(bottles.length>0){
        const storedCard = GetStordCard();
        const SaveCart = []
        for(const id of storedCard){
            console.log(id)
            const  bottle  = bottles.find(bottle=>bottle.id===id);
            if(bottle){
               SaveCart.push(bottle)
            }
        }
        console.log(SaveCart)
        setCard(SaveCart)
       }
       
    },[bottles])
  const hengleCard=(bottle)=>{
    const newCard = [...Card,bottle]
    setCard(newCard)
    addTOLS(bottle.id)

  }
  const hendleremovedfromCart=(id)=>{
    const  remainingCart = Card.filter(bottle=> bottle.id!==id);
    setCard(remainingCart)
    remnovedfromLC(id)
  }
    return (
        <div>
                 <h3>Bottles: {bottles.length} </h3>
                 {
                    <Cart cart={Card} hengleCard={hendleremovedfromCart}></Cart>
                 }
                 {/* <h3>Card purchas: {Card.length}</h3> */}
                <div className="bottles-container"> {
                       bottles.map((bottle,index)=><Bottle bottle={bottle}
                        key={index}
                        hengleCard={hengleCard}
                        ></Bottle>)
                      }
                 </div>
        </div>
    );
};

export default Bottls;
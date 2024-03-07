import { useEffect, useState } from "react";


function Person(props){

    const [qua,setQua] = useState(1);



    const inc = () =>{
        setQua(qua + 1);

    }

    const desc = () =>{
        if(qua == 1) return;
        setQua(qua - 1);
    }

    return(
        <div className="person-box">
            <img src={props.img} alt="" className="profile-img" />
            <h3 style={
                {
                    color:'black',
                }
            }>Item : {props.item}</h3>
            <h3>Price  : ₹/-{props.price}</h3>
            <h3>Total  : ₹/-{qua * props.price}</h3>
            <h3>Qty. : {qua}</h3>

            <button onClick={desc}>-</button>
            <button onClick={inc}>+</button>

        </div>
    )

}

export default Person;
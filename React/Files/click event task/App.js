import React from 'react';
import { useState } from 'react';
 
function Onclick() {
    const [person, setPerson] = useState({
        name: "sateesh",
        place: 'pdtr',
        age: 25
    });
 
    const handler = () => {
        setPerson({
            name: "Reddy",
            place: "Hyd",
            age: 25
        });
    };
 
    return (
        <>
            <h3>click event</h3>
           
            <table border={3}>
                <tr>
                    <td>name</td>
                    <td>place</td>
                    <td>age</td>
                </tr>
               <tr>
                <td>{person.name}</td>
                <td>{person.place}</td>
                <td>{person.age}</td>
               </tr>
            </table>
            <button onClick={handler}>Click me</button>
        </>
    );
}
 
export default Onclick
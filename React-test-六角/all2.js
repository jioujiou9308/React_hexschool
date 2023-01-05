const numbers = [1,2,3,4,5]

// const numberList = numbers.map((numbers,i)=>
//  <li key={i}>{numbers}</li>
//  )

// OR
const numberList = numbers.map((numbers,i)=>{
     return (
<li key={i}>{numbers}</li>
     )
}
 )


const root  = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<ul>{numberList}</ul>);
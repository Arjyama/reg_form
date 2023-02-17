// const Form = ()=> {
//     const handelSubmit = ()=> {
//         // fetch({
//         //     url: "",    //surver address
//         //     method: "Post",
//         //     data: ""
//         // }).then (()=> {

//         // }).catch(()=> {

//         // })
//     }
//     return (
//         <div>
//             <h1> Registration Form </h1>
//             <form action="/test" method="post" >
//             <div>
//                 <label htmlFor="username"> Username </label>
//                 <input id="username" type="text" />
//             </div>

//             <div>
//                 <label htmlFor="email"> Email </label>
//                 <input id="email" type="email" name="" />
//             </div>

//             <div>
//                 <label htmlFor="password"> Password </label>
//                 <input id="password" type="password" />
//             </div>

//             <button type="submit" onClick={handelSubmit} >SUBMIT</button>
//             </form>


//         </div>
//     )
// }
// export default Form;




import { useState } from "react";

const Form = ()=> {
    //username
    //email
    //password

    const [form, setForm] = useState({username: "", email: "", password:""})
    //username
    //email
    const handleSubmit = ()=> {
        console.log(form)
        debugger
        // fetch("url",{
        //     method: "Post",
        //     data: ""
        // }).then(()=> {

        // }).catch(()=> {

        // })
    }
    return (
        <div>
            <h1>Registration form</h1>
            <form>
                <div>
                    <label htmlFor="username">Username</label>
                    <input id="username" onChange={(e)=> {setForm({...form,username: e.target.value})}}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={(e)=> {setForm({...form,email: e.target.value})}}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e)=> {setForm({...form,password: e.target.value})}}/>
                </div>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
            
        </div>
    )
}
export default Form;
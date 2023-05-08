import React, {useState} from 'react'


const SignIn = (navigation) => {
    <div>
        Hi
    </div>
//     const [values, setValues] = useState({
//         username: '',
//         email: '',
//         password: '',
//         rolesId: 1
//       });
//       const [error, setError] = useState('');
    
//     const handleSubmit = () => {
    
//         const formdata = new FormData();
//         formdata.append("email", values.username);
//         formdata.append("password", values.password);
//         formdata.append("role_id", values.rolesId);
    
//     var requestOptions = {
//       method: 'POST',
//       body: formdata,
//       redirect: 'follow'
//     };
//     console.log(values)
    
//        fetch("https://niqsolution.com/api/auth/login", requestOptions)
//       .then(response => response.text())
//       .then(result => console.log(result))
//       .catch(error => console.log('error', error));
    
//       const { userDetails, userToken } =  requestOptions.json();
    
//       if (requestOptions.ok){
//          localStorage.setItem('userDetails', JSON.stringify(userDetails));
//          localStorage.setItem('userToken', userToken);
        
//         navigation.navigate('Home');
//       }  
//       else {
//         setError('error');
//       }


//   return (
//     <div>
//         <div className="card-body">
          
//           <h4 className="card-title mb-4 text-center">Sign in</h4>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <input
//                 className="form-control"
//                 placeholder="Email"
//                 type="email"
//                 onChange={text => setValues( prevState => ({...prevState, username: text}))}
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 className="form-control"
//                 placeholder="Password"
//                 type="password"
//                 onChange={text => setValues( prevState => ({...prevState, password: text}))}
//               />
//             </div>

//             <div className="mb-4">

//             {error ? <p>{error}</p> : null}
//               <button type="submit" className="btn btn-primary w-100" onSubmit={handleSubmit}>
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//     </div>
//   )
// }
}
export default SignIn
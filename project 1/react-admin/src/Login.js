import { useContext, useEffect, useRef, useState } from 'react';
import axios from './api/axios';
import AuthContext from './context/AuthProvider';


const LOGIN_URL = '/auth';
const Login = () => {

    const {setAuth} = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [ user, setUser ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ errMsg, seterrMsg ] = useState('');
    const [ success, setSuccess ] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    },[]);

    useEffect(() => {
        seterrMsg('');
    },[user,pass]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{
            
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({user,pass}),
                {
                    headers: { 'content-type' : 'application/json'},
                    withCredentials:true
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            setAuth({ user, pass, accessToken });
            setSuccess(true);

        }catch(err){

            if(!err?.response){
                seterrMsg('no server response');
            }else if(err.response?.status === 400){
                seterrMsg("wrong password or username");
            }else if (err.response?.status === 401){
                seterrMsg("Unauthorized");
            }else{
                seterrMsg('login failed');
            }
            errRef.current.focus();

        }
    };

    return (
        <>{success ? (
            <div><a href="#" >home</a></div>
        ) : ( 
            <div>
                <p ref={errRef} className={errMsg ? "errmsg" :"offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Login In</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" ref={userRef} onChange={(e) => setUser(e.target.value)} value={user} required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" onChange={(e) => setPass(e.target.value)} value={pass} required />
                    <button>LogIn</button>
                </form>
                <p><a href="#">Admin login</a></p>
            </div>
        )}
        </>
    )
}

export default Login;
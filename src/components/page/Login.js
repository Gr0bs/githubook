import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/login.scss';

const Login = () => {

    const [value, setValue] = useState('')

    const handleLogin = () => {
        localStorage.setItem('user', value)
    }

    return ( 
        <div className="login">
            <div className="border">
                <div className="login__card">
                    <header>
                        <h1>Githubook</h1>
                        <em>Your new <strong>Github</strong> social media</em>
                    </header>
                    <section>
                        <label className='login__insert'>
                            Insert your Github username
                            <input 
                                type="text" 
                                placeholder="Bibidu34"
                                onChange={(e) => setValue(e.target.value)}
                            />
                        </label>
                        <Link to='/'>
                        <button 
                            className='btn btn--login'
                            onClick={handleLogin}
                            >Let's Go !</button>
                        </Link>
                    </section>
                </div>
            </div>
        </div>
     );
}
 
export default Login;
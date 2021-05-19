import { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../styles/login.scss';

const Login = () => {


    const [value, setValue] = useState('')

    const handleLogin = () => {
        localStorage.setItem('user', value)
    }


    return ( 

        <div className="login">
        {localStorage.getItem('user') !== null && <Redirect to='/' />}
            <div className="border">
                <div className="login__card">
                    <header>
                        <h1>Githubook</h1>
                        <em>Your new <strong>Github</strong> social media</em>
                    </header>
                    <section>
                        <form>
                            <label className='login__insert'>
                                Insert your Github username
                                <input 
                                    className='input'
                                    type="text" 
                                    placeholder="Bibidu34"
                                    onChange={(e) => setValue(e.target.value)}
                                />
                            <em>If you don't have any insert <strong>gr0bs</strong></em>
                            </label>
                            <Link to='/'>
                            <button 
                                className='btn btn--login'
                                onClick={handleLogin}
                                >Let's Go !</button>
                            </Link>
                        </form>
                    </section>
                </div>
            </div>
        </div>
     );
}
 
export default Login;
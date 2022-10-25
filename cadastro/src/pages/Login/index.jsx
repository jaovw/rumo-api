import { Link } from 'react-router-dom'
import { useState } from 'react';
import logo from '../../assets/logo.svg'
import '../../styles.css'
import { Layout } from '../../components/layout';

export const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <Layout>
            <form className="login-form">

                <span className="login-form-title">
                    <img src={logo} alt='Logo'></img>
                </span>

                <span className="login-form-title">Bem vindo!</span>

                <div className='wrap-input'>
                    <input
                        type='email'
                        className={email !== '' ? 'has-val input' : 'input'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Email'></span>
                </div>

                <div className='wrap-input'>
                    <input
                        type='password'
                        className={password !== '' ? 'has-val input' : 'input'}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Password'></span>
                </div>

                <div className='container-login-form-btn'>
                    <button className='login-form-btn'>Login</button>
                </div>

                <div className='text-center'>
                    <span className='txt1'>Nao possui conta?</span>
                    <Link className='txt2' to='/register'>Criar conta.</Link>
                </div>

            </form>
        </Layout>
    )
}
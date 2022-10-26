import { Link } from "react-router-dom"
import { Layout } from "../../components/layout"
import { useState } from "react"
import logo from '../../assets/logo.svg'


export const Register = () => {

    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [country, setCountry] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [adress, setAdress] = useState('')

    return (
        <Layout>
            <form className="login-form">

                <span className="login-form-title">
                    <img src={logo} alt='Logo'></img>
                </span>

                <span className="login-form-title">Cadastro</span>

                {/* <div className='wrap-input'>
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
                </div> */}

                <div className='wrap-input'>
                    <input
                        type='name'
                        className={name !== '' ? 'has-val input' : 'input'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Nome'></span>
                </div>

                <div className='wrap-input'>
                    <input
                        type='state'
                        className={phone !== '' ? 'has-val input' : 'input'}
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Telefone'></span>
                </div>

                <div className='wrap-input'>
                    <input
                        type='country'
                        className={country !== '' ? 'has-val input' : 'input'}
                        value={country}
                        onChange={e => setCountry(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Pais'></span>
                </div>

                <div className='wrap-input'>
                    <input
                        type='state'
                        className={state !== '' ? 'has-val input' : 'input'}
                        value={state}
                        onChange={e => setState(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Estado'></span>
                </div>

                <div className='wrap-input'>
                    <input
                        type='city'
                        className={city !== '' ? 'has-val input' : 'input'}
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Cidade'></span>
                </div>

                <div className='wrap-input'>
                    <input
                        type='adress'
                        className={adress !== '' ? 'has-val input' : 'input'}
                        value={adress}
                        onChange={e => setAdress(e.target.value)}
                    />
                    <span className='focus-input' data-placeholder='Endereco'></span>
                </div>

                <div className='container-login-form-btn'>
                    <button className='register-form-btn'>Cadastrar</button>
                    <button className='cancel-form-btn'><Link className='txt2' to='/login'>Cancelar</Link></button>
                </div>

                <div className='text-center'>
                    <span className='txt1'>Ja possui uma conta?</span>
                    <Link className='txt2' to='/login'>Entrar</Link>
                </div>

            </form>
        </Layout>
    )
}
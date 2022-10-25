import logo from './assets/logo.svg'
import './styles.css'

function App() {
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">

            <span className="login-form-title">Bem vindo!</span>
            <span className="login-form-title">
              <img src={logo} alt='Logo'></img>
            </span>

            <div className='wrap-input'>
              <input type='email' className='input' />
              <span className='focus-input' data-placeholder='Email'></span>
            </div>

            <div className='wrap-input'>
              <input type='password' className='input' />
              <span className='focus-input' data-placeholder='Password'></span>
            </div>

            <div className='container-login-form-btn'>
              <button className='login-form-btn'>Login</button>
            </div>

            <div className='text-center'>
              <span className='txt1'>Nao possui conta?</span>
              {/* <a className='txt2' href='#'>Criar conta.</a> */}
            </div>

          </form>
        </div>

      </div>
    </div>
  );
}

export default App;

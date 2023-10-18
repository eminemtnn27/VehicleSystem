import React, { Component } from 'react'

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>TOYOTA -CARS</h3>
         <div className="mb-3">
          <label>Kullanıcı Adı</label>
          <input
            type="text"
            className="form-control"
            placeholder="Kullanıcı adınızı giriniz"
          />
        </div>

        <div className="mb-3">
          <label>Şifre</label>
          <input
            type="password"
            className="form-control"
            placeholder="Şifrenizi giriniz"
          />
        </div> 
        {/* <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div> */}

        <div className="d-grid">
           <button type="submit" colorScheme="purple" width="full">
            Log In
          </button>
        </div>
        <p className="forgot-password text-right">
          Şifreni mi unuttun? <a href="/sign-up"> Sign Up </a>
        </p>
      </form>
    )
  }
}

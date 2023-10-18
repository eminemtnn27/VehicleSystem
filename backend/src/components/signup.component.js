import React, { Component } from 'react'

export default class SignUp extends Component {
  render() {
    return (
      <form>
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Kullanıcı Adınız</label>
          <input
            type="text"
            className="form-control"
            placeholder="Kullanıcı adınızı giriniz"
          />
        </div> 

        <div className="mb-3">
          <label>Şifre  </label>
          <input
            type="password"
            className="form-control"
            placeholder="Şifrenizi giriniz"
          />
        </div>
        <div className="mb-3">
          <label>Şifre Tekrar </label>
          <input
            type="password"
            className="form-control"
            placeholder="Şifrenizi tekrar giriniz"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Zaten hesabın var mı? <a href="/sign-in">Sign in?</a>
        </p>
      </form>
    )
  }
}

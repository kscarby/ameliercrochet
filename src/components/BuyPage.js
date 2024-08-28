import Toolbar  from './Toolbar'
import React, { useState } from 'react'

const BuyPage = () => {
    
  return (
    <div>
        <Toolbar />
        <div>
            <form>
                <h1>Cadastro</h1>
                <label>Email: </label>
                <input type='email'></input>
                <label>Senha</label>
                <input type='password'></input>
                <input type='submit'></input>

            </form>
        </div>
    </div>
  )
}

export default BuyPage
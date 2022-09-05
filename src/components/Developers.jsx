import React from 'react'
import terminal from '../assets/terminal.png'

const Developers = () => {
  return (
    <div className='w-full text-white'>
        <div className='max-w-[1240px] px-4 py-16 md:flex lg:mx-auto'>
            <div className="left">
                <h1>Superpowers for DEFI developers.</h1>
                <p>
                    Checkout the <span className='blue'>documentation</span>, the <span className='blue'>quick start</span> or a guide below to integrate your project with thousands of tokens and billons of liquidity.
                </p>
            </div>
            <div className="flex justify-center items-center py-16">
                <img className='max-w-[250px] shadow-lg shadow-cyan-500/50' src={terminal} alt="developer terminal" />
            </div>
        </div>
    </div>
  )
}

export default Developers
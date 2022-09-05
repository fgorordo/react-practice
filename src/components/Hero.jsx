import React from 'react'
import HeroVid from '../assets/video.mp4'

const Hero = () => {
  return (
    <div className='w-full h-[90vh] top-[90px]'>
        <video className="object-cover h-full w-full absolute -z-10" src={HeroVid} autoPlay loop muted></video>
        <div className='w-full h-[90%] flex justify-center items-center flex-col text-white text-center px-4'>
            <h1>Decentralized</h1>
            <h1 className='py-2'><span className='blue'>Trading</span> Protocol</h1>
            <p className='text-xl py-4'>Guaranteed liquidity trading for millons of users and top Etherum applications</p>
            <div>
                <button className='m-2'>Use Defi</button>
                <button className='m-2'>FAQ</button>
            </div>
        </div>
        <div>
            <p className='text-center text-white text-2xl font-bold w-f'>Total Volume Secured: $42,104,783,662.57</p>
        </div>
    </div>
  )
}

export default Hero
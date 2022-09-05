import React from 'react'
import AboutCard from './AboutCard'
import {SiHiveBlockchain, SiStrapi, SiFsecure} from 'react-icons/si'
import {VscServerProcess} from 'react-icons/vsc'


const About = () => {
  return (
    <div className='max-w-[1240px] mx-auto px-4 py-16 bg-black text-white text-center'>
        <div>
            <h1 className='py-4'>A Growing Protocol Ecosystem</h1>
            <p className='py-4 text-xl'>
                The Defi protocol syatem empowers developers, liquidity providers, and traders to participate in a financial marketplace that is open and accesible to all.
            </p>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>

                <AboutCard  icon={<SiHiveBlockchain size={40}/>} heading={'Reliable, tamper-proff network'} text={'Use descentralized, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract.'}/>

                <AboutCard  icon={<SiStrapi size={40}/>} heading={'Seamless connection to any API'} text={'Build on a flexible framework that can retrive data form any API, connect with existing systems, and integrate with any current or future blockchain'}/>

                <AboutCard  icon={<SiFsecure size={40}/>} heading={'Proven, ready-made solutions'} text={'Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications.'}/>

                <AboutCard  icon={<VscServerProcess size={40}/>} heading={'Secure off-chain computation'} text={'Use a descentralized network of DeFi Keeper nodes to automate contracts, migrating risk of manual interventions and crentralized servers.'}/>


            </div>
        </div>
    </div>
  )
}

export default About
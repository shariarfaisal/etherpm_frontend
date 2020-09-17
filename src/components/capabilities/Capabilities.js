import React from 'react'
import FirstItem from './FirstItem'
import Item from './Item'
import ItemMore from './ItemMore'

const items = [
  {id: 1, img: 'img/exchange.jpg',title: 'Trading Features',desc: 'Margin Trading, Professional tools and support, High Trading Chart'},
  {id: 1, img: 'img/exchange.jpg',title: 'Unique And Ethereum Based Crypto Exchange',desc: 'Eth Based Total 3 Pairs ETH°USDT°EPM'},
  {id: 1, img: 'img/exchange.jpg',title: 'No Kyc',desc: 'Not Need Kyc- Register And Start Trading'},
  {id: 1, img: 'img/exchange.jpg',title: 'Diversity Of Cryptocurrency',desc: 'EtherPM Only Accpect Unique ERC 20 Token, including all ERC-20 tokens.'},
  {id: 1, img: 'img/exchange.jpg',title: 'EtherPM Support',desc: 'Got a problem? Just get in touch. Our support team is available 24/7.'},
  {id: 1, img: 'img/exchange.jpg',title: 'Careers',desc: 'Help build the future of technology. Start your new career at EtherPM.'}
]

const Capabilities = (props) => {
  return(
    <section className="capabilities py-5">
      <div className="capabilities-wrapper px-5">
        <div className="row mx-0">

          <FirstItem />
          {items.map((item,i) => <Item key={i} {...item}/> )}
          <ItemMore />

        </div>
      </div>
    </section>
  )
}

export default Capabilities

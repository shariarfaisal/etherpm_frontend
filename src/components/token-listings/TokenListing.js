import React,{ useContext, useEffect, useState } from 'react'
import { TokenListingsContext } from '../contexts/TokenListingsContext'
import ContentLayout from '../ContentLayout'
import { useParams } from 'react-router-dom'

const Item = ({ name, value }) => {
  return (
    <div className="d-flex my-3 py-3 color3 shadow">
      <div className="col-6">{ name }</div>
      <div className="col-6">{ value }</div>
    </div>
  )
}

const TokenListing = (props) => {
  const { getTokenListingById } = useContext(TokenListingsContext)
  const [tokenListing, setTokenListing] = useState(null)
  const [error,setError] = useState(null)
  const { id } = useParams()

  useEffect(() => {
    getTokenListingById({ id, setTokenListing, setError})
  },[])

  return(
    <ContentLayout>
      <div className="token-listing row mx-0 p-5">

        <div className="col-12 text-light py-5" style={{fontSize: '14px'}}>
          {tokenListing && <div className="info">

            <Item name="Name" value={tokenListing['name']} />
            <Item name="Email" value={tokenListing['email']} />
            <Item name="Contact Position" value={tokenListing['position']} />
            <Item name="Token Name" value={tokenListing['tokenName']} />
            <Item name="Token Symbol" value={tokenListing['symbol']} />
            <Item name="Token Decimal" value={tokenListing['tokenDecimal']} />
            <Item name="Website Link" value={tokenListing['websiteLink']} />
            <Item name="Description" value={tokenListing['description']} />
            <Item name="Logo Link" value={tokenListing['logoLink']} />
            <Item name="Exchanges" value={tokenListing['exchanges']} />
            <Item name="Twitter Link" value={tokenListing['twitter']} />
            <Item name="Telegram Link" value={tokenListing['telegram']} />
            <Item name="Chat" value={tokenListing['chat']} />
            <Item name="Reddit" value={tokenListing['reddit']} />
            <Item name="Members" value={tokenListing['members']} />
            <Item name="Channel" value={tokenListing['channel']} />
            <Item name="Reffered By" value={tokenListing['refferedBy']} />

          </div>}
          {!tokenListing && !error && <div className="text-center">loading...</div>}
          {error && <div className="d-flex justify-content-center align-items-center" style={{height: '400px'}}>
              <h1>Not Found</h1>
          </div>}
        </div>


      </div>
    </ContentLayout>
  )
}
export default TokenListing

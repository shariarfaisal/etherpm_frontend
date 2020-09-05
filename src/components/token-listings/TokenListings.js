import React,{ useContext } from 'react'
import { TokenListingsContext } from '../contexts/TokenListingsContext'
import ContentLayout from '../ContentLayout'
import { Link } from 'react-router-dom'

const TokenListings = (props) => {
  const { tokenListings } = useContext(TokenListingsContext)
  return(
    <ContentLayout>
      <div className="token-listing row m-5">
        <div className="col-12">
          <div className="list-group">

            <div className="list-group-item d-flex my-2 text-light shadow border-0 rounded-0" style={{fontSize: '13px',background: '#41606E',fontWeight: 'bold'}}>
              <div style={{width: '5%'}}>#</div>
              <div style={{width: '20%'}}>Email</div>
              <div style={{width: '20%'}}>Token Name</div>
              <div style={{width: '15%'}}>Symbol</div>
              <div style={{width: '20%'}}>Website</div>
              <div style={{width: '20%'}}>Action</div>
            </div>

            {
              tokenListings && tokenListings.map((item,i) => {
                return (
                  <div key={i} className="list-group-item d-flex my-2 text-light border-0 rounded-0" style={{fontSize: '13px',background:'inherit'}}>
                    <div style={{width: '5%'}}>{i+1}</div>
                    <div style={{width: '20%'}}>{item.email}</div>
                    <div style={{width: '20%'}}>{item.tokenName}</div>
                    <div style={{width: '15%'}}>{item.symbol}</div>
                    <div style={{width: '20%'}}>{item.websiteLink}</div>
                    <div style={{width: '20%'}}>
                      <Link to={`/token-listings/${item._id}`} className="btn btn-info mx-2 px-3">view</Link>
                    </div>
                  </div>
                )
              })
            }


          </div>
        </div>
      </div>
    </ContentLayout>
  )
}
export default TokenListings

import React from 'react'
import styled from 'styled-components'


const TokenListing = (props) => {
  return(
    <TokenListingStyle className="token-listing">
      <div className="wrapper mx-5">
        <h1 className="my-5 text-center">Token Listing Apply</h1>
        <div className="row mx-0 justify-content-center">
          <form className="form col-lg-10 bg-light px-4 py-5 my-5 shadow">


            <p>Verify that the mail has been sent. Please check the email for the verification code.</p>
            <div className="item">
              <label>Contact's email</label>
              <span className="item-msg">faisaljr623@gmail.com</span>
            </div>

            <div className="item">
              <label>Mail verification</label>
              <input className="form-control" type="text" name="" value=""  />
              <span className="item-msg"></span>
            </div>

            <div className="item">
              <label>Contact's full name</label>
              <input className="form-control" type="text" placeholder="Full Name" />
              <span className="item-msg">Please enter your official full name</span>
            </div>

            <div className="item">
              <label>Contact's position</label>
              <input className="form-control" type="text" placeholder="Full Name" />
              <span className="item-msg"></span>
            </div>

            <div style={{border:'1px doted grey;',height: '1px'}}></div>

              <div className="item">
                <label>Token Name</label>
                <input className="form-control" type="text" placeholder="16 characters limited" />
                <span className="item-msg">Same as etherscan.io</span>
              </div>

              <div className="item">
                <label>Symbol</label>
                <input className="form-control" type="text" placeholder="16 character limited" />
                <span className="item-msg">Same as etherscan.io</span>
              </div>

              <div className="item">
                <label>Token decimal</label>
                <input className="form-control" type="text" placeholder="Max number 18" />
                <span className="item-msg">Same as etherscan.io</span>
              </div>

              <div className="item">
                <label>Token contract</label>
                <input className="form-control" type="text" placeholder="Example08874...OC8943" />
                <span className="item-msg">Ethersum token contract address</span>
              </div>

              <div className="item">
                <label>Official Website</label>
                <input className="form-control" type="text" placeholder="Max number 18" />
                <span className="item-msg">Official website link</span>
              </div>

              <div className="item">
                <label>Token description</label>
                <textarea className="form-control" name="" cols="" rows="5" placeholder="200 characters limited"></textarea>
                <span className="item-msg"></span>
              </div>

              <div className="item">
                <label>Logo link</label>
                <input className="form-control" type="text" placeholder="40 * 40, PNG format picture" />
                <span className="item-msg">Please enter the currect url</span>
              </div>

              <div className="item">
                <label>Listing other exchanges</label>
                <input className="form-control" type="text" placeholder="" />
                <span className="item-msg">Exchanges that Have Launched the Token</span>
              </div>

              <div className="item">
                <label>Official twitter link</label>
                <input className="form-control" type="text" placeholder="" />
                <span className="item-msg"></span>
              </div>

              <div className="item">
                <label>Official telegram link</label>
                <input className="form-control" type="text" placeholder="" />
                <span className="item-msg"></span>
              </div>

              <div className="item">
                <label>Chat</label>
                <input className="form-control" type="text" placeholder="" />
                <span className="item-msg"></span>
              </div>

              <div className="item">
                <label>Reddit</label>
                <input className="form-control" type="text" placeholder="" />
                <span className="item-msg"></span>
              </div>

              <div className="item">
                <label>Number of members</label>
                <input className="form-control" type="text" placeholder="" />
                <span className="item-msg">The number of community numbers</span>
              </div>

              <div className="item">
                <label>Channel</label>
                <input className="form-control" type="text" placeholder="" />
                <span className="item-msg"></span>
              </div>

              <div className="item">
                <label>Reffered by</label>
                <input className="form-control" type="text" placeholder="" />
                <span className="item-msg"></span>
              </div>

              <div className="my-4 text-center">
                <button className="button btn-teal" type="button">submit</button>
              </div>

          </form>
        </div>
      </div>
    </TokenListingStyle>
  )
}


const TokenListingStyle = styled.div`
  min-height: 80vh;

  .form{
    font-family: "ubuntu",sans-sarif;
    .item{
      margin: 2rem 0;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      label{
        width: 25%;
        font-size: 1.5rem;
        padding: 0 1rem;
        text-align: right
      }
      .form-control{
        width: 45%;
        margin: 0 2rem;
        font-size: 1.6rem;

        &:focus{
          box-shadow: none;
          border-color: #00BCD4;
        }
      }
      input{
        height: 40px;
      }
      .item-msg{
        width: 30%;
        font-size: 1.4rem;
      }
    }
  }

`

export default TokenListing

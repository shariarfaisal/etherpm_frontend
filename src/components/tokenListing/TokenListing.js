import React,{ useState } from 'react'
import Input from './Input'
import './token-listing.scss'


const TokenListing = (props) => {
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [position,setPosition] = useState('')
  const [tokenName,setTokenName] = useState('')
  const [symbol,setSymbol] = useState('')
  const [tokenDecimal,setTokenDecimal] = useState('')
  const [tokenContract,setTokenContract] = useState('')
  const [websiteLink,setWebsiteLink] = useState('')
  const [description,setDescription] = useState('')
  const [logoLink,setLogoLink] = useState('')
  const [exchanges,setExchanges] = useState('')
  const [twitter,setTwitter] = useState('')
  const [telegram,setTelegram] = useState('')
  const [chat,setChat] = useState('')
  const [reddit,setReddit] = useState('')
  const [members,setMembers] = useState('')
  const [channel,setChannel] = useState('')
  const [refferedBy,setRefferedBy] = useState('')

  return(
    <div className="token-listing">
      <div className="wrapper mx-5">
        <h1 className="my-5 text-center">Token Listing Apply</h1>
        <div className="row mx-0 justify-content-center">
          <form className="form col-lg-10 bg-light px-4 py-5 my-5 shadow">

              <Input
                id="email"
                label="Contact's email"
                type="email"
                plc="Email"
                value={email}
                setValue={setEmail}
              />
              <Input
                id="name"
                label="Contact's full name"
                plc="Full name"
                value={name}
                setValue={setName}
                note="Please enter your official full name"
              />
              <Input
                id="position"
                label="Contact's position"
                plc="Position"
                value={position}
                setValue={setPosition}
              />
              <Input
                id="token_name"
                label="Token Name"
                plc="16 characters limited"
                value={tokenName}
                setValue={setTokenName}
                note="Same as etherscan.io"
              />
              <Input
                id="symbol"
                label="Symbol"
                plc="16 characters limited"
                value={symbol}
                setValue={setSymbol}
                note="Same as etherscan.io"
              />
              <Input
                id="token_desical"
                label="Token decimal"
                plc="Max number 18"
                value={tokenDecimal}
                setValue={setTokenDecimal}
                note="Same as etherscan.io"
              />
              <Input
                id="token_contract"
                label="Token contract"
                plc="Example08874...OC8943"
                value={tokenContract}
                setValue={setTokenContract}
                note="Ethersum token contract address"
              />
              <Input
                id="website"
                label="Official Website"
                plc="Website lilnk"
                value={websiteLink}
                setValue={setWebsiteLink}
                note="Official website link"
              />

              <div className="item">
                <label htmlFor="description">Token description</label>
                <textarea
                  id="description"
                  value={description}
                  onChange={e => setDescription(e.target.value)}
                  className="form-control"
                  cols=""
                  rows="5"
                  placeholder="200 characters limited"></textarea>
                <span className="item-msg"></span>
              </div>

              <Input
                id="logo_link"
                label="Logo link"
                plc="40 * 40, PNG format picture"
                value={logoLink}
                setValue={setLogoLink}
                note="Please enter the currect url"
              />
              <Input
                id="exchanges"
                label="Listing other exchanges"
                plc=""
                value={exchanges}
                setValue={setExchanges}
                note="Exchanges that Have Launched the Token"
              />
              <Input
                id="twitter"
                label="Official twitter link"
                plc="Twitter link"
                value={twitter}
                setValue={setTwitter}
              />
              <Input
                id="telegram"
                label="Official telegram link"
                plc="Telegram link"
                value={telegram}
                setValue={setTelegram}
              />
              <Input
                id="chat"
                label="Chat"
                plc=""
                value={chat}
                setValue={setChat}
              />
              <Input
                id="reddit"
                label="Reddit"
                plc=""
                value={reddit}
                setValue={setReddit}
              />
              <Input
                id="members"
                label="Number of members"
                plc=""
                value={members}
                setValue={setMembers}
                note="The number of community numbers"
              />
              <Input
                id="channel"
                label="Channel"
                plc=""
                value={channel}
                setValue={setChannel}
              />
              <Input
                id="reffered_by"
                label="Reffered By"
                plc=""
                value={refferedBy}
                setValue={setRefferedBy}
              />

              <div className="my-4 text-center">
                <button className="button btn-teal" type="button">submit</button>
              </div>

          </form>
        </div>
      </div>
    </div>
  )
}


export default TokenListing

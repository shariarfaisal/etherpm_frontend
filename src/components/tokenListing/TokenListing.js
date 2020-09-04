import React,{ useState, useContext } from 'react'
import Input from './Input'
import './token-listing.scss'
import { TokenListingContext } from '../../contexts/TokenListingContext'

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
  const [loading,setLoading] = useState(false)
  const [error,setError] = useState('')
  const [success,setSuccess] = useState('')

  const { createTokenListing } = useContext(TokenListingContext)

  const onSubmitHandler = async e => {
    e.preventDefault()
    setLoading(true)
    const { data, error: err } = createTokenListing({
      email, name, position, tokenName, symbol, tokenDecimal, tokenContract, websiteLink, description, logoLink, exchanges, twitter, telegram, chat, reddit, members, channel, refferedBy
    })
    if(data){
      setLoading(false)
      setError('')
      setSuccess("Token Listing submited.")
      setEmail('');setName('');setPosition();
      setTokenName();setSymbol();setTokenDecimal();
      setTokenContract();setWebsiteLink();setDescription();
      setLogoLink();setExchanges();setTwitter();setTelegram();
      setChat();setReddit();setMembers();setChannel();setRefferedBy();
      window.scrollTo(0,0)
    }else if(err){
      setLoading(false)
      setSuccess('')
      setError(err)
    }
  }

  return(
    <div className="token-listing">
      <div className="wrapper mx-5">
        <h1 className="my-5 text-center">Token Listing Apply</h1>
        <p className="text-success text-center" style={{height: '20px'}}>{success && success}</p>
        <div className="row mx-0 justify-content-center">
          <form
            onSubmit={onSubmitHandler}
            className={`form col-lg-10 bg-light px-4 py-5 my-5 shadow ${loading? 'btn-loading': ''}`}
          >
              <Input
                id="email"
                label="Contact's email"
                type="email"
                plc="Email"
                value={email}
                setValue={setEmail}
                error={error.email? error.email: null}
              />
              <Input
                id="name"
                label="Contact's full name"
                plc="Full name"
                value={name}
                setValue={setName}
                note="Please enter your official full name"
                error={error.name? error.name: null}
              />
              <Input
                id="position"
                label="Contact's position"
                plc="Position"
                value={position}
                setValue={setPosition}
                error={error.position? error.position: null}
              />
              <Input
                id="token_name"
                label="Token Name"
                plc="16 characters limited"
                value={tokenName}
                setValue={setTokenName}
                note="Same as etherscan.io"
                error={error.tokenName? error.tokenName: null}
              />
              <Input
                id="symbol"
                label="Symbol"
                plc="16 characters limited"
                value={symbol}
                setValue={setSymbol}
                note="Same as etherscan.io"
                error={error.symbol? error.symbol: null}
              />
              <Input
                id="token_desical"
                label="Token decimal"
                plc="Max number 18"
                value={tokenDecimal}
                setValue={setTokenDecimal}
                note="Same as etherscan.io"
                error={error.tokenDecimal? error.tokenDecimal: null}
              />
              <Input
                id="token_contract"
                label="Token contract"
                plc="Example08874...OC8943"
                value={tokenContract}
                setValue={setTokenContract}
                note="Ethersum token contract address"
                error={error.tokenContract? error.tokenContract: null}
              />
              <Input
                id="website"
                label="Official Website"
                plc="Website lilnk"
                value={websiteLink}
                setValue={setWebsiteLink}
                note="Official website link"
                error={error.websiteLink? error.websiteLink: null}
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
                  error={error.description? error.description: null}
                  placeholder="200 characters limited"
                ></textarea>
                <span className="item-msg"></span>
              </div>

              <Input
                id="logo_link"
                label="Logo link"
                plc="40 * 40, PNG format picture"
                value={logoLink}
                setValue={setLogoLink}
                note="Please enter the currect url"
                error={error.logoLink? error.logoLink: null}
              />
              <Input
                id="exchanges"
                label="Listing other exchanges"
                plc=""
                value={exchanges}
                setValue={setExchanges}
                note="Exchanges that Have Launched the Token"
                error={error.exchanges? error.exchanges: null}
              />
              <Input
                id="twitter"
                label="Official twitter link"
                plc="Twitter link"
                value={twitter}
                setValue={setTwitter}
                error={error.twitter? error.twitter: null}
              />
              <Input
                id="telegram"
                label="Official telegram link"
                plc="Telegram link"
                value={telegram}
                setValue={setTelegram}
                error={error.telegram? error.telegram: null}
              />
              <Input
                id="chat"
                label="Chat"
                plc=""
                value={chat}
                setValue={setChat}
                error={error.chat? error.chat: null}
              />
              <Input
                id="reddit"
                label="Reddit"
                plc=""
                value={reddit}
                setValue={setReddit}
                error={error.reddit? error.reddit: null}
              />
              <Input
                id="members"
                label="Number of members"
                plc=""
                value={members}
                setValue={setMembers}
                note="The number of community numbers"
                error={error.members? error.members: null}
              />
              <Input
                id="channel"
                label="Channel"
                plc=""
                value={channel}
                setValue={setChannel}
                error={error.channel? error.channel: null}
              />
              <Input
                id="reffered_by"
                label="Reffered By"
                plc=""
                value={refferedBy}
                setValue={setRefferedBy}
                error={error.refferedBy? error.refferedBy: null}
              />

              <div className="my-4 text-center">
                <button disabled={loading} className="button btn-teal" type="submit">submit</button>
              </div>

          </form>
        </div>
      </div>
    </div>
  )
}


export default TokenListing

import React from 'react'
import ChartBox from './chartbox/ChartBox'
import TitleBox from './TitleBox'
import CurrencyTableView from './currencyTable/CurrencyTableView'


const Market = (props) => {
  return(
    <section className="market border-bottom bg-light py-5">
      <div className="market-wrapper px-5">
        <ChartBox />
        <TitleBox />
        <CurrencyTableView />
      </div>
    </section>
  )
}
export default Market

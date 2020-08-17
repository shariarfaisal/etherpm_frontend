import React from 'react'


const Filter = (props) => {
  return(
    <div className="filter">
      <form className="row mx-0 justify-content-end py-3">
        <div className="col-md-8 col-lg-6 row mx-0">
          <div className="form-group col-5">
            <select className="custom-select text-light" style={{fontSize: '15px',background: 'rgb(51, 80, 94)'}}>
              <option>Select One</option>
              <option>Select One</option>
              <option>Select One</option>
              <option>Select One</option>
            </select>
          </div>
          <div className="form-group col-5">
            <select className="custom-select text-light" style={{fontSize: '15px',background: 'rgb(51, 80, 94)'}}>
              <option>All</option>
              <option>Partial filled</option>
              <option>Unfilled</option>
            </select>
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-info" style={{fontSize: '15px'}}>Search</button>
          </div>
        </div>
      </form>
    </div>
  )
}
export default Filter

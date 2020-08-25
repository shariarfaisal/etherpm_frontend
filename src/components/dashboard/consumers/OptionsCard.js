import React from 'react'
import styled from 'styled-components'


const OptionsCard = ({ children, style }) => (
  <Styling style={style}  className="options-card">
    <ul style={style.ul? style.ul: {}} className="nav flex-column border rounded py-2 shadow">
      { children }
    </ul>
  </Styling>
)

const Styling = styled.div`
  min-width: 100px;
  min-height: 30px;
  background: #233843;
  color: #ffffffde;
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 13px;

  .nav{
    border-color: #39515d !important;
    &-item{
      cursor: pointer;
      padding: 4px 10px;
      &:hover{
        background: #20323c;
      }
    }
  }
`

export default OptionsCard

import React,{ createContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

export const DashboardContext = createContext()

const menuItems = [
  {id: 1,title: 'Home',icon: 'bx bx-home',link: '/',active: false},
  {id:2, title: 'Consumer',icon: 'bx bx-user',link: '',active: false,items:[
    {subId: 1,title: 'All',icon: 'bx bx-list-ul',link: '/consumers',active: false}
  ]},
  {id: 3,title: 'Admins',icon: 'bx bx-group',link: '',active: false,items:[
    {isubIdd: 1,title: 'All',icon: 'bx bx-list-ul',link: '/admins',active: false},
    {subId: 2,title: 'Profile',icon: 'bx bx-user',link: '/profile',active: false},
  ]},
]

const DashboardContextProvider = ({ children }) => {
  const [menu,setMenu] = useState(menuItems)
  const [breadcrumb,setBreadcrumb] = useState([])
  const history = useHistory()

  useEffect(() => {
    let path = history.location.pathname
    if(path.endsWith('/')) path = path.substr(0,path.length -2)
    let arr = path.substr(1).split('/')
    let s = '/'
    arr.forEach(i => {
      s += i+'/'
      breadcrumb.push({title: i,link: s,icon: ''})
    })
    setBreadcrumb([...breadcrumb])
  },[])

  const activeMenuItem = (id) => {
    const item = menu.find(i => i.id === id)
    if(item){
      item.active = !item.active
      setMenu([...menu])
    }
  }

  useEffect(() => {
    let path = history.location.pathname

    const findItem = (items) => {
      return items.find(i => {
        if(i.link === path || i.link+'/' === path){
          return true
        }else if(i.items && i.items.length > 0){
          return findItem(i.items)
        }
        return false
      })
    }



    const makeActive = (item) => {
      if(item){
        item.active = true
        setMenu([...menu])
      }
      if((item.hasOwnProperty('items')) && item.items.length > 0){
        const sub = findItem(item.items)
        if(sub){
          makeActive(sub)
        }
      }
    }

    const item = findItem(menu)
    if(item){
      makeActive(item)
    }
  },[])


  return(
    <DashboardContext.Provider value={{
      menu, breadcrumb, setBreadcrumb, activeMenuItem
    }}>
      { children }
    </DashboardContext.Provider>
  )
}
export default DashboardContextProvider

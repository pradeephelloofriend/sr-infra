
import { Nav, NavDropdown } from 'react-bootstrap'
import { connect } from 'react-redux';
import { selectMenuData } from '../../redux/menu/menuSelector';
import{createStructuredSelector } from 'reselect'
import { Button } from 'antd';
import { MobileOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'
import AboutUsComponent from "../../components/home/about/AboutUsComponent"
import React, { useRef } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)


const MenuItemComponent = ({ menuData,menuRef,setTabCode,abtMenuRef }) => {
    //console.log('menuData2', menuData)
    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)


    const router = useRouter()
    function goToPage(pathId, catCode, desc) {
        //alert(catCode)
        
            router.push({
                pathname: `/${pathId}/`,
                query: { catCode: catCode, desc: desc }
            })
    }


    const[ref,setRef]=React.useState() //contact page
    const[ref2,setRef2]=React.useState() //about page
    const scrollToDiv = (ref) => {
      //console.log("ref", ref);
      window.scrollTo(0, ref)
    };


    React.useEffect(() => {
        setRef(menuRef)
        setRef2(abtMenuRef)
        if (router.query.ref=='aboutPage'){
          window.scrollTo(0, abtMenuRef)
          
        }else if(router.query.ref=='contactPage'){
          window.scrollTo(0, menuRef)
        }
        
      }, [menuRef,abtMenuRef,router])
      
    function routeWithScroll(pathId,ref){
        router.push({
          pathname:'/',
          query:{ref:ref}
        })
    }
    return (
        <>
            <Nav className="me-auto nav-menu7" activeKey="/home">
            {menuData?menuData.map((i, index) =>
               
               i.node.childItems.edges.length<1 ?
                   <Nav.Item key={index}>
                       <Nav.Link onClick={() => goToPage(i.node.route.link)} >{i.node.label}</Nav.Link>
                   </Nav.Item>
                   :
                   <NavDropdown key={index} title={i.node.label} id="nav-dropdown" renderMenuOnMount={true}>
                       {menuData?i.node.childItems.edges.map((d,ind) =>
                   
                           <NavDropdown.Item key={ind} eventKey={`${index}.${ind}`} onClick={() =>goToPage(i.node.route.link+'/'+d.node.route.link,d.node.route.code,d.node.label)} >{d.node.label} </NavDropdown.Item>
                           ):[]}



                   </NavDropdown>
           ):[]}

                

                {/*<NavDropdown title={"Artistic Decoratives"} id="nav-dropdown" renderMenuOnMount={true}>

                    <NavDropdown.Item  onClick={() => router.push('/breezeblocks/')} >Breeze Blocks 
                    
                    <ul className='nav-submenu'>
                       <li className='submenu-item' ><a>{'j.title.rendered'}</a></li>
                       <li className='submenu-item' ><a>{'j.title.rendered'}</a></li>
                       <li className='submenu-item' ><a>{'j.title.rendered'}</a></li>
                    </ul>
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="2" onClick={() => router.push('/canewebbing/')}>Cane Webbing </NavDropdown.Item>
                    
                </NavDropdown>*/}
  
            </Nav>
            <div className="d-flex r-nav-item">
                <a onClick={() => router.push('/query/')} className="lh-base nav-btn  text-white arrow-animation" size="large">Request a quote</a>
            </div>
        </>
    )
}

const mapStateToProps=createStructuredSelector({
    menuData:selectMenuData
})
export default connect(mapStateToProps) (MenuItemComponent)

import React, { Component } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { connect } from 'react-redux';
import { fetchMenuData,setMenuData } from '../../redux/menu/menuAction';
import { fetchWorksCatData } from '../../redux/services/serviceAction';
import { withRouter } from 'next/router';
import Image from 'next/image'
import MenuItemComponent from './MenuItemComponent';
import logo from '../../public/img/home/sr-ind-logo.jpg'
class NavbarComponent extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            nav: false,
            sticky: null,   
            bg: 'bg-c-blue',
            activeId: '',
            current: 'mail',
            data:[]
            
        }

    }
    handleClick = e => {
        //console.log('click ', e);
        this.setState({ current: e.key });
    }
    /*getMenuItem= async()=>{
        const res = await fetch(`${process.env.API_PATH}tasks`)
        const data = await res.json()
        this.setState({
            data:data
        })

    }*/
    listener = null;
    handleScroll = () => {
        var scroll = window.pageYOffset
        
        if (scroll < 100) {
            //console.log('scorll=', true)
            this.setState({ sticky: null, bg: 'bg-c-blue', nav: false })
        } else {
            //console.log('scorll=', false)
            this.setState({ sticky: 'top', bg: 'bg-c-blue', nav: false })
        }

    }
    
    componentDidMount() {
        const { fetchMenuData ,fetchWorksCatData} = this.props
        //fetchUdcData()
        
        fetchMenuData()
        fetchWorksCatData()
        window.addEventListener("scroll", this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);

    }
    goToHome(){
        const{router}=this.props
        router.push('/')
    }
    render() {
        const { nav, sticky,bg,data } = this.state
        //console.log("server",data)
        return (
            <Navbar className={bg} hidden={nav} collapseOnSelect sticky={sticky} expand="lg">
                <Container>
                    <Navbar.Brand onClick={()=>this.goToHome() } ><Image src={logo} height={50} width={174} alt="a1"/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        
                        <MenuItemComponent/>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            
            
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    
    
    fetchMenuData:()=> dispatch(fetchMenuData()),
    fetchWorksCatData:()=>dispatch(fetchWorksCatData())
    //fetchFootData:() => dispatch( fetchFootData())
})


export default withRouter (connect(null, mapDispatchToProps) (NavbarComponent))
import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router,Link,useHistory } from "react-router-dom";
import { Button,Layout,Tooltip,Typography } from 'antd'; 
 
import axios from 'axios'   
import {Autocomplete,TextField } from '@mui/material';

import LogoutIcon from '@mui/icons-material/Logout'; 
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

import Menulist from "./component/Menulist";
import Routers from './Routers';
import './App.css';  
import 'antd/dist/antd.css';

const { Header,  Sider } = Layout; 
  
// export const ip = process.env.REACT_APP_IP;  
// export const port = process.env.REACT_APP_PORT; 
// export const fac = process.env.REACT_APP_FAC; 
// export const wc = process.env.REACT_APP_WC; 

// export const ip = '172.28.84.150'; 
// export const ip = '192.168.0.100'; 
export const ip = '192.168.0.200'; 
// export const ip = '112.186.43.205'; 
export const port = '5190'; 
// export const ip = 'gnrnd.synology.me'; 
// export const port = '5190'; 
// export const wc = 'CELL'; 
export const wc = 'IDB1'; 
// export const fac = '61'; 
export const fac = '91'; 
// export const ip = '172.20.32.169'; 
// export const fac = '91031'; 
// export const port = '5180';  
// export let wc = 'MCT13';

export let language = localStorage.getItem("language");
export let adminlogin = localStorage.getItem("Admin");
export let auth = localStorage.getItem("auth");

export let thememode = localStorage.getItem("Theme");
export let topcolor = localStorage.getItem("topcolor");
export let laycolor = localStorage.getItem("laycolor");
 
export let fontSizes = localStorage.getItem("FontSizes");
export let usernm = localStorage.getItem("usernm");
export let logintime = localStorage.getItem("logintime");
export let fonts = localStorage.getItem("Fonts");


// class RouterApp extends Component {
    
const RouterApp =()=> { 
    
        const history = useHistory();
        const [collapsed, setCollapsed] = useState(false);
        const [widths, setwidths] = useState(250);
        const logininfos = localStorage.getItem("login_yn");
        const urls = "http://"+ip+":"+port+"/images/logo.png";
  
        const [Data0, setData0] = useState([])  
    
        const [anchorEl, setAnchorEl] = React.useState(null); 
        const handleClick = (event) => {
            if(anchorEl){
                setAnchorEl(false);
            }
            else{
                setAnchorEl(event.currentTarget);
            }
        }; 

        const [windowWidth, setWindowWidth] = useState(window.innerWidth);

          
        localStorage.setItem("Theme", "light");  
        localStorage.setItem("fontcolor", "black");   
        localStorage.setItem("laycolor", "white");   
        localStorage.setItem("backColor", "white");   
        localStorage.setItem("title", "title-light"); 

        useEffect(() => { 
            search0();
          const handleResize = () => {
            setWindowWidth(window.innerWidth);
          };
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);

        const languagechange= ()=>{
            
            switch(language)
            {
                case "1":
                    localStorage.setItem("language", "2");  
                    document.location.href = "/MAINS" 
                    history.push("/MAINS");
                    window.location.reload();
                break;
                case "2":
                    localStorage.setItem("language", "3");  
                    document.location.href = "/MAINS" 
                    history.push("/MAINS");
                    window.location.reload();
                break;
                case "3":
                    localStorage.setItem("language", "1");  
                    document.location.href = "/MAINS" 
                    history.push("/MAINS");
                    window.location.reload();
                break;

            } 
        }
        
            
        const search0 = async() => {

            const res1 = await axios.post("http://"+ip+":"+port+"/PROCEDURE", {
            v1: "MCTC_COMBO",
            v2: "WC",
            v3: fac,
            }, {
            timeout: 60000 // 60초
            }); 
                        
            const inputdata = res1.data.map((data)=>({
                label: data.WC_NAME,
                value: data.WC_CD 
            }))
            setData0(inputdata)
    
        }
  
        // const thememodes = ()=>{
        //     if(thememode ==="dark")
        //     {
        //         localStorage.setItem("Theme", "light");  
        //         localStorage.setItem("fontcolor", "black");   
        //         localStorage.setItem("laycolor", "white");   
        //         localStorage.setItem("backColor", "white");   
        //         localStorage.setItem("title", "title-light"); 
        //         document.location.href = "/Main" 
        //     }
        //     else
        //      {
        //         localStorage.setItem("Theme", "dark");  
        //         localStorage.setItem("fontcolor", "white");  
        //         localStorage.setItem("laycolor", "#001529");   
        //         localStorage.setItem("backColor", "#3B455B");    
        //         localStorage.setItem("title", "title-dark"); 
        //         document.location.href = "/Main" 
        //      }   
        // }
        
        const adminlogin= ()=>{ 
                 
            window.location.href = "/ADMINLOGIN" 

            {/* <Modal open={true} 
            onClose={false}
            >
            <Box style={{width : '400'}}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
            <Adminlogins/> 
            </Modal>     */}

        } 

        return (
        <Router> 
            <Layout style={{   overflow:'auto', minHeight: '100vh' }}> 
            
                <Sider  
                    className="sider"  
                    theme={thememode}   
                    width={250}  
                    backgroundColor={laycolor}
                    collapsible
                    collapsed={collapsed} 
                    collapsedWidth = {60}
                    onCollapse={(value) => {setCollapsed(value)
                    if(value){setwidths(60)}
                    else{setwidths(250)}
                    }
                    
                    }
                    style={{
                      overflow: 'auto',
                      height: '100vh',
                      position: 'fixed',
                      left: 0,
                      top: 0,
                      bottom: 0,
                    }}
                    >
                    {/* <div style={{ height: 32, margin: 16, background: 'rgba(255, 255, 255, 0.2)' }} /> */}
                    <div style={{ height: 55, margin: 5}}>
                        <a>
                            <Link to="/MAINS">
                            <img src={urls} style={{ width: '100%', height: '100%'}}  ></img> 

                            {/* <img style={{ width: '100%', height: '100%'}} 
                                src='http://gnrnd.synology.me:5190/images/logo.png' 
                            /> */} 
                            </Link>
                        </a>  
                    </div>
                    <p></p>
                    <Menulist/>
                </Sider> 
                    
                <div  />
                <Layout 
                style={{  overflow:'auto',backgroundColor:laycolor
                ,  minHeight: '100vh' 
                ,  marginLeft: widths,
                }}>
                                        
                {windowWidth < 767 ? (<Button  onClick={handleClick} 
                        //style={{ display: 'none' }} // 모바일 화면에서 버튼 숨김 처리
                    >Dashboard
                </Button>) : null}
                <Menulist visible ={anchorEl} />
                <Header   style={{  
                    backgroundColor:localStorage.getItem("backColor"),
                     padding: 0, paddingTop: 15,
                     paddingRight: 15, 
                     alignSelf:"right", textAlign:"right", 
                     height:90}}>
                
                {logininfos=="Y" ? 
                    <span >
                {/* <Typography></Typography>  */}
        
                <Typography.Title
                    level={5}
                    style={{
                    marginRight: 5,
                    }}
                > Hello, [Mr.{usernm}[{auth}]] . Your Login Time : [{logintime}] X:{window.innerWidth}Y:{window.innerHeight}  <span></span>
                    <div style={{ display: 'flex',justifyContent:"flex-end", alignItems: 'center' }}>
                                                                                    
            <Autocomplete
              disablePortal
              id="combo-box-demo" 
              defaultValue="IDB1"
              options={Data0} 
              sx={{
                display: 'inline-block',  
                  width: 200,  }}
                  size ="small"
              onChange={(event, newValue) => {
                wc = newValue.value 
              }}
              renderInput={(params) => <TextField {...params} label="지정 W/C" />}
            />
                <Tooltip title="Languge">
                    <Button  
                    onClick={(e)=>{languagechange()}}
                    >   {language=='1'?'KR': language=='2'?'EN':'CN'}{language} 
                     
                    </Button>
                </Tooltip> 
                <Tooltip title="Logout">
                    <Link  to="/">
                    <Button  icon={<LogoutIcon />} 
                    onClick={(e)=>{localStorage.setItem("login_yn", "N");
                            localStorage.setItem("Admin", "N"); 
                            // document.location.href = "/" 
                        }}
                    />
                    </Link>
                </Tooltip>
                <Tooltip title="Admin">
                    <Link to="/ADMINLOGIN"> 
                    <Button icon={<ManageAccountsIcon />} 
                    // onClick={(e)=>{   adminlogin() }}
                    >
                    </Button>
                    </Link>   
                      
                </Tooltip> 
                {/* {thememode =="dark" ?  
                <Tooltip title="Light">
                    <Button  icon={<LightModeIcon />} 
                    onClick={(e)=>{thememodes(); }}
                    />
                </Tooltip>  
                : 
                <Tooltip title="Dark">
                    <Button icon={<DarkModeIcon />} 
                    onClick={(e)=>{thememodes(); }}
                    />
                </Tooltip>   
                }                */}
                </div>

                </Typography.Title>
                                        </span>    
                                        : "" }

                    </Header>
                    <Routers style={{ padding:100}}/>  
                </Layout>

                </Layout>
            </Router>
        );
    // }
}


export default RouterApp;

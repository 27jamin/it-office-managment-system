import { Box, useTheme, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import { ProSidebar,  MenuItem,  Menu } from 'react-pro-sidebar';
import { tokens } from '../../theme';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem active={selected === title} style={{color:colors.grey[100]}} onClick={() => setSelected(title)} icon={icon}>
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
        
    )
}

const SideBar = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [ isCollapsed , setIsCollapsed ] = useState(false);
    const [ selected, setSelected ] = useState("Dashboard");

    return (
        <Box
            sx = {{
                "& .pro-sidebar-inner" : {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper" : {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item" : {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover" : {
                    color: "#868dfb !important",
                }, 
                "& .pro-menu-item.active" : {
                    color: "#6870fa !important", 
                },
            }}
        >
            <ProSidebar collapsed={ isCollapsed }>
                <Menu iconShape='square'>
                    {/*logo and menu icon*/}
                    <MenuItem 
                        onClick={() => setIsCollapsed(!isCollapsed) } 
                        icon= { isCollapsed ? <MenuOutlinedIcon /> : undefined } 
                        style= {{ margin:"10px 0 10px 0", color:colors.grey[100], }}
                    >
                        {!isCollapsed && (
                            <Box display="flex" justifyContent="space-between" alignItems="center" >
                                <Typography variant="h3" color={colors.grey[100]}>Adminis</Typography>
                                <IconButton onClick= {() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                            </Box>
                        )}
                    
                        {/*user*/}
                        {!isCollapsed && (
                            <Box>
                                <Box display = "flex" justifyContent="center" alignItems="center">
                                    <img
                                        alt="profile-user"
                                        width="100px"
                                        height="100px"
                                        src={`../../assets/1.jpg`}
                                        style={{ cursor: "pointer" , borderRadius:"50%" }} 
                                    />
                                </Box>

                                <Box textAlign="center">
                                    <Typography variant="h2" color={colors.grey[100]} fontWeight="bold" sx={{ m : "10px 0 0 0" }}>Ed Roh</Typography>
                                    <Typography variant="h5" color={colors.greenAccent[500]} >Vp fancy Admin</Typography>
                                </Box>
                            </Box>
                        )}
                    </MenuItem>
                    
                    {/* menu items */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%" }>
                        <Item title="Dashboard" to="/" icon={<HomeOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Typography variant='h6' color={colors.grey[300]} sx={{ m: "15px 0px 5px 20px "}}>Data</Typography>
                        <Item title="Manage Team" to="/team" icon={<PeopleOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Contacts" to="/contacts" icon={<ContactsOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Chats" to="/chat" icon={<WhatsAppIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Invoices" to="/invoices" icon={<ReceiptOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Typography variant='h6' color={colors.grey[300]} sx={{ m: "15px 0px 5px 20px "}}>Pages</Typography>
                        <Item title="Profile" to="/form" icon={<PersonOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Calendar" to="/calendar" icon={<CalendarTodayOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="FAQ" to="/faq" icon={<HelpOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Typography variant='h6' color={colors.grey[300]} sx={{ m: "15px 0px 5px 20px "}}>Charts</Typography>
                        <Item title="Bar chart" to="/bar" icon={<BarChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Pie chart" to="/pie" icon={<PieChartOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="Line chart" to="/line" icon={<TimelineOutlinedIcon />} selected={selected} setSelected={setSelected} />
                        <Item title="geography chart" to="/geography" icon={<MapOutlinedIcon />} selected={selected} setSelected={setSelected} />
                    </Box>
                    
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default SideBar;


import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import StatBox from "../../components/statBox";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import { tokens } from "../../theme";
import LineChart from "../../components/LineChart";
import { mockTransactions } from "../../data/mockData";
import ProgressCircle from "../../components/ProgressCircle";
import BarChart from "../../components/BarChart";
import Geographychart from "../../components/GeographyChart";

const Dashboard = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">

            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subTitle="welcome" />
                <Box>
                    <Button sx={{ backgroundColor: colors.blueAccent[700], color:colors.grey[100], fontSize:"14px", fontWeight:"bold", padding:"10px 20px", }}>
                        <DownloadOutlinedIcon sx={{ mr:"10px" }} />Download Report
                    </Button>
                </Box>
            </Box>

            {/*Grid and charts*/}
            <Box display="grid" gridTemplateColumns="repeat(12,1fr)" gridAutoRows="140px" gap="20px" >
                
                {/*Row 1*/}
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" >
                    <StatBox title="12000" subtitle="Email send" progress="0.75" increase="+14%" 
                        icon={ <EmailIcon sx={{ color:colors.greenAccent[600], fontSize:"26px" }} /> } />
                </Box>
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" >
                    <StatBox title="435125" subtitle="Sales" progress="0.5" increase="+21%" 
                        icon={<PointOfSaleIcon sx={{ color:colors.greenAccent[600], fontSize:"26px" }} />} />
                </Box>
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" >
                    <StatBox title="457812" subtitle="client" progress="0.30" increase="+30%" 
                        icon={<PersonAddIcon sx={{ color:colors.greenAccent[600], fontSize:"26px" }} />} />
                </Box>
                <Box gridColumn="span 3" backgroundColor={colors.primary[400]} display="flex" alignItems="center" justifyContent="center" >
                    <StatBox title="14784" subtitle="traffic" progress="0.80" increase="+47%" 
                        icon={<TrafficIcon sx={{ color:colors.greenAccent[600], fontSize:"26px" }} />} />
                </Box>

                {/*Row 2*/}
                <Box gridColumn="span 8" gridRow="span 2" backgroundColor={colors.primary[400]} >
                    <Box mt="25px" p="0 30px" display="flex" justifyContent="space-between" alignItems="center" >
                        <Box>
                            <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>
                                Revenve generated
                            </Typography>
                            <Typography variant="h3" fontWeight="bold" color={colors.greenAccent[500]}>
                                $5300000
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon sx={{ fontSize:"26px", color:colors.greenAccent[500]}} />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" mt="-20px" >
                        <LineChart isDashboard={true} />
                    </Box>
                </Box>

                {/*transactions*/}
                <Box gridColumn = "span 4" gridRow ="span 2" backgroundColor={colors.primary[400]} overflow="auto">
                    <Box display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`} color={colors.grey[100]} p="15px">
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="500">recent transaction</Typography>
                    </Box>
                    {mockTransactions.map((transaction,i) => (
                        <Box key={`${transaction.txId}-${i}`} display="flex" justifyContent="space-between" alignItems="center" borderBottom={`4px solid ${colors.primary[500]}`}  p="15px" >
                            <Box>
                            <Typography color={colors.greenAccent[500]} variant="h5" fontWeight="600">{transaction.txId}</Typography>
                            <Typography color={colors.grey[100]} >{transaction.user}</Typography>
                            </Box>
                            <Box color={colors.grey[100]}>{transaction.date}</Box>
                            <Box backgroundColor={colors.greenAccent[500]} p="5px 10px" borderRadius="4px">${transaction.cost}</Box>
                        </Box>
                    ))}
                </Box>
                
                {/*Row 3*/}
                <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px">
                    <Typography variant="h5" fontWeight="600">Campaign</Typography>
                    <Box display="flex" flexDirection="column" alignItems="center" mt="25px">
                        <ProgressCircle size="125" />
                        <Typography variant="h5" color={colors.greenAccent[500]} sx={{ mt:"15px" }}>$580000 Revenve generated</Typography>
                        <Typography>Includes expenditures and cost</Typography>
                    </Box>
                </Box>
                <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} >
                    <Typography variant="h5" fontWeight="600" sx={{ p:"30px 30px 0 30px" }}>Sales</Typography>
                    <Box height="250px" mt="-20px">
                        <BarChart isDashboard={true} />
                    </Box>
                </Box>
                <Box gridColumn="span 4" gridRow="span 2" backgroundColor={colors.primary[400]} p="30px" >
                    <Typography variant="h5" fontWeight="600" sx={{ mb:"15px" }}>Geography</Typography>
                    <Box height="200px">
                        <Geographychart isDashboard={true} />
                    </Box>
                </Box>
            </Box>
 
        </Box>
    )
};

export default Dashboard;
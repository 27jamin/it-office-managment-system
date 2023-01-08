import { Box } from "@mui/material"
import BarChart from "../../components/BarChart"
import Header from "../../components/Header"

const Bar = () => {
    return (
        <Box m ="20px">
            <Header title="Bar Chart" subTitle="simple Bar charts" />
            <Box height="75vh">
                <BarChart />
            </Box>
        </Box>
    )
}

export default Bar;
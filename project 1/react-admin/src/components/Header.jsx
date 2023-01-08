import { Box, colors, Typography, useTheme } from "@mui/material";

import { tokens } from "../theme";



const Header = ({ title , subTitle }) => {
    const theme = useTheme();
    const color = tokens(theme.palette.mode);

    return (
        <Box mb="30px">
            <Typography
            variant="h2"
            color = {colors.grey[100]}
            fontWeight="bold"
            sx={{ mb: "5px" }}
            >
                {title}
            </Typography>
            <Typography variant="h4" color={color.greenAccent[400]}>{subTitle}</Typography>
        </Box>
    );
};

export default Header;
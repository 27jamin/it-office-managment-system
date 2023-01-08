import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box m="20px">
            <Header title="Faq" subtitle="Frequent asked question" />
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        an import question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        uysdfkbsdiudv uydsgifab uyagsdfjb ugijfb sdbf
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion defaultExpanded>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography color={colors.greenAccent[500]} variant="h5">
                        an import question
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        uysdfkbsdiudv uydsgifab uyagsdfjb ugijfb sdbf
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    )
}

export default FAQ;
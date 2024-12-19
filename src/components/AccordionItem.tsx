import { FC } from "react";
import { useTheme } from "@mui/material/styles";
import { Theme } from "@mui/material";
import { tokens } from "../theme";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

interface AccordionItemProps {
  question: string;
  details: string;
}

const AccordionItem: FC<AccordionItemProps> = ({ question, details }) => {
  const theme = useTheme<Theme>();
  const colors = tokens(theme.palette.mode);
  return (
    <Accordion defaultExpanded sx={{ bgcolor: `${colors.primary[400]}` }}>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{details}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionItem;

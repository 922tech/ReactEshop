import {styled} from "@mui/material/styles";
import {Chip} from "@mui/material";

export const OffChip = styled(Chip)(({scale=1}) => ({
  borderRadius:`calc(5px * ${scale})`,
  width:`calc(1.9rem * ${scale})`,
  height:`calc(1.7rem * ${scale})`,
  '& span':{
      margin:'auto',
      fontSize:`calc(0.7rem * ${scale})`,
      display:'inline-table',
      fontWeight:'bold',
      paddingTop:`calc(3px * ${scale})`,
      }
}))
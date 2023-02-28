import { Button, ButtonProps, styled, Typography } from "@mui/material";
import { yellow } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

interface Props{
  path: string
  name: string
}

const styleTpg = {
  flexGrow: 1,
  mr: 2,
  display: { xs: "none", md: "flex" },
  fontFamily: "monospace",
  fontWeight: 800,
  color: "inherit",
  textDecoration: "none",
};

const View = (props: Props) => {
  
  const navigate = useNavigate();

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[700]),
    backgroundColor: yellow[700],
    "&:hover": {
      backgroundColor: yellow[800],
    },
  }));

  return (
    <div>
      <Typography variant='h6' component='div' sx={styleTpg}>
        <ColorButton
          variant='contained'
          onClick={() => navigate(props.path)}
          color='primary'
        >
          {props.name}
        </ColorButton>
      </Typography>
    </div>
  );
}

export default View

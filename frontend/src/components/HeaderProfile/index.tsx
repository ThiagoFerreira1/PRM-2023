import { Avatar, Box, Typography } from "@mui/material";
//importar imagem
import banner from "../../assets/img/banner-profile.jpg";
import avatar from "../../assets/img/avatar-profile.png";

import { CalendarMonthOutlined } from "@mui/icons-material";

//Import do estilo
import "./style.css";

function HeaderProfile() {
  return (
    <Box id="header-profile">
      <Box className="header-profile-background">
        <img src={banner} />
      </Box>

      <Box className="header-profile-detail">
        <Avatar
          className="header-profile-detail-avatar"
          alt="Fulano de Tal"
          style={{ width: 128, height: 128 }}
          src={avatar}
        />

        <Box className="header-profile-detail-text">
          <Typography variant="h5">Fulano de Tal</Typography>
          <Typography variant="subtitle1" component={'h6'}>@fulanodetal</Typography>
          <Typography variant="subtitle1" component={'p'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit, placeat aliquam eligendi ut ducimus molestiae aperiam
            culpa voluptatem, dolorem sint nulla fuga aspernatur pariatur omnis
            eveniet beatae quo ab quis.
          </Typography>
          <Typography variant="caption">
            <CalendarMonthOutlined />
            Entrou em Agosto de 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderProfile;

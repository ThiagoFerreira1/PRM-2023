import { Avatar, Box, Typography } from "@mui/material";
import banner from "../../assets/img/banner-profile.jpg";
import avatar from "../../assets/img/avatar-profile.png";
import { CalendarMonthOutlined } from "@mui/icons-material";
import { IntlProvider, FormattedDate } from "react-intl";

import "./style.css";

type HeaderProfileProps = {
  user: any;
};

function HeaderProfile({ user }: HeaderProfileProps) {
  return (
    <Box id="header-profile">
      <Box className="header-profile-background">
        <img src={banner} alt="Banner" />
      </Box>

      <Box className="header-profile-detail">
        <Avatar
          className="header-profile-detail-avatar"
          alt="Fulano de Tal"
          style={{ width: 128, height: 128 }}
          src={avatar}
        />

        <Box className="header-profile-detail-text">
          <Typography variant="h5"> {user.fullname} </Typography>
          <Typography variant="subtitle1" component={"h6"}>
            @{user.username}
          </Typography>
          <Typography variant="subtitle1" component={"p"}>
            {user.description}
          </Typography>
          <Typography variant="caption">
            <CalendarMonthOutlined />
            <IntlProvider locale="pt">
              Entrou em <></>
              <FormattedDate
                value={new Date(user.createdAt)}
                day="numeric"
                month="long"
                year="numeric"
              />
            </IntlProvider>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderProfile;

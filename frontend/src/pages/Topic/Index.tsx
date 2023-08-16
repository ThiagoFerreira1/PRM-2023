import { Box } from "@mui/material";
import HeaderProfile from "../../components/HeaderProfile";
import TopicList from "../../components/TopicList";

function TopicPage() {
  const profile = {
    fullname: "Thiago Alves Ferreira",
    username: "thiagof",
    description: "Imagina uma descrição bonita aqui",
    createdAt: "2022-08-13 00:00:00",
  };

  const topics = [
    {
      owner: { fullname: "Joao Carlos" },
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rerum laboriosam magni repellat, odio est dolore veritatis porro consequuntur nesciunt iste, excepturi voluptatibus, quaerat adipisci nulla ratione necessitatibus.",
      comments: 1,
      reposts: 1,
      likes: 30,
      createdAt: "2023-08-01 19:30:00",
    },
    {
      owner: { fullname: "Mateus Fernandes" },
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rerum laboriosam magni repellat, odio est dolore veritatis porro consequuntur nesciunt iste, excepturi voluptatibus, quaerat adipisci nulla ratione necessitatibus.",
      comments: 12,
      reposts: 2,
      likes: 300,
      createdAt: "2019-05-01 18:30:00",
    },
    {
      owner: { fullname: "Bolsonaro" },
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rerum laboriosam magni repellat, odio est dolore veritatis porro consequuntur nesciunt iste, excepturi voluptatibus, quaerat adipisci nulla ratione necessitatibus.",
      comments: 2,
      reposts: 6,
      likes: 500,
      createdAt: "20023-06-17 06:30:00",
    },
    {
      owner: { fullname: "Fernando Chagas" },
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rerum laboriosam magni repellat, odio est dolore veritatis porro consequuntur nesciunt iste, excepturi voluptatibus, quaerat adipisci nulla ratione necessitatibus.",
      comments: 2,
      reposts: 0,
      likes: 87,
      createdAt: "2023-01-09 14:30:00",
    },
    {
      owner: { fullname: "Joao Mineiro" },
      content:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit rerum laboriosam magni repellat, odio est dolore veritatis porro consequuntur nesciunt iste, excepturi voluptatibus, quaerat adipisci nulla ratione necessitatibus.",
      comments: 2,
      reposts: 2,
      likes: 2,
      createdAt: "2023-08-01 19:30:00",
    },
  ];

  return (
    <Box
      id="topic-page"
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={3}
    >
      <HeaderProfile user={profile} />

      <TopicList items={topics} />
    </Box>
  );
}

export default TopicPage;

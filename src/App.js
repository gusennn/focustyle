import './App.css';
import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";

function App() {
  return (
    <div className="App">
        <Typography variant={'h1'}>Заголовок</Typography>
        <Container>
            <Button variant={'contained'} color={'primary'}>Кнопка</Button>
            <Button variant={'contained'} color={'secondary'}>Кнопка</Button>
        </Container>
        <Typography variant={'h2'} >Просто текст</Typography>
        <Typography variant={'h3'} >Просто текст</Typography>
        <Typography variant={'h4'} >Просто текст</Typography>
        <Typography variant={'h5'} >Просто текст</Typography>
        <Typography variant={'h6'} >Просто текст</Typography>
        <Typography variant={'h7'} >Просто текст</Typography>
        <br/>
        <Typography variant={'body'} >Просто текст</Typography>
        <Typography variant={'body2'} >Просто текст</Typography>
        <Container maxWidth={'md'}>
            <Paper elevation={3}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Accusamus aliquid autem consequuntur delectus deserunt dolorum,
                eum, exercitationem ipsa iusto minus neque nisi officia porro quam quisquam,
                recusandae ullam veniam voluptatem?
            </Paper>
        </Container>
    </div>
  );
}

export default App;

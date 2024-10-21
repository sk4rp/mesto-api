import express, {Response} from "express";

const app = express();
const port = 3000;

app.get('/', (res: Response) => {
  res.send('Test server!');
});

app.listen(port, () => {
  console.log(`Server start with port: ${port}`);
});

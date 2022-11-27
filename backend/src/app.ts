import 'dotenv/config';
import express,{ Request, Response } from "express";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());

app.listen(PORT, () => {
    console.log(PORT, "서버가 실행되었습니다.");
});

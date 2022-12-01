import 'dotenv/config';
import express, {NextFunction, Request, Response} from "express";

const app = express();
const PORT = process.env.PORT;
app.use(express.json());


app.use((error:Error,req:Request, res:Response, next:NextFunction) => {
    next();
});

app.listen(PORT, () => {
    console.log(PORT, "서버가 실행되었습니다.");
});

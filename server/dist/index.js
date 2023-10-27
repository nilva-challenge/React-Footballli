import axios from "axios";
import express from "express";
import cors from "cors";
const app = express();
const port = 4000;
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(express.json());
let response;
const FetchResponseForADate = async (date) => {
    response = await axios.get(`https://core-sport-api.zarebin.ir/api/football/fixtures/?date=${date}`, {
        headers: {
            "Content-Type": "application/json",
        },
        timeout: 10000,
    });
};
app.get(`/:date`, async (req, res) => {
    try {
        await FetchResponseForADate(req.params["date"]);
        res.send(response.data);
    }
    catch (error) {
        res.send(error.response.data);
    }
});
app.listen(port, () => {
    console.log(`now listening at http://localhost:${port}`);
});

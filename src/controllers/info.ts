import {Request, Response} from "express";
import {log} from "../utils/logger";
import * as dotenv from "dotenv";
import SteamAPI from "steamapi";

dotenv.config();
const steam = new SteamAPI(process.env.API_STEAM);

function infoGet(req: Request, res: Response): void {
    let sid = req.query.id; 

    if (!sid) {
        res.sendStatus(400);
        return;
    };

    steam.getUserSummary(sid)
        .then(summary => {
            res.json({
                name: summary.nickname,
                avatar: summary.avatar
            });
        })
        .catch(err => {
            res.sendStatus(500);
        });
};

export {infoGet as get};

log("INIT", "Loaded controllers/info.ts");
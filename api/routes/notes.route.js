import { Router } from "express";
import { getNote, postNote } from "../controller/notes.controller.js";
const route = Router();

route.get("/notes", getNote);
route.post("/notes/:id", postNote);
export default route;

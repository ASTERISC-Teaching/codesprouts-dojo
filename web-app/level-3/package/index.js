import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotev from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import postRoutes from "./routes/posts.js";
import { createPost } from "./controllers/posts.js";
import { verifyToken } from "./middleware/auth.js";
import User from "./models/User.js";
import Post from "./models/Post.js";
import { users, posts } from "./data/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotev.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin"}))
app.use(morgan("common"));
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

// STRIP THIS FOR PWN.COLLEGE
app.use((req, res, next) => {
  const prefix = '/workspace/challenge';
  if (req.url.startsWith(prefix)) {
    req.url = req.url.substring(prefix.length) || '/';
  }
  next();
});

app.use((req, res, next) => {
  const prefix = '/profile';
  const badlist = ['assets', 'users', 'posts']
  if (req.url.startsWith(prefix)) {
    for (let i = 0; i < badlist.length; i++) {
      if (req.url.includes(badlist[i])) {
        req.url = req.url.substring(prefix.length) || '/';
        break;
      }
    }
  }
  next();
});

app.use("/assets", express.static(path.join(__dirname, "public/assets")));
app.use(express.static("client"));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname);
    },
  });
const upload = multer({ storage });

app.post("/posts", verifyToken, upload.single("picture"), createPost);

/* ROUTES */
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

/* CATCH ALL */
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 80;
// app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
const uri = 'mongodb://localhost:27017/site';
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    User.insertMany(users);
    Post.insertMany(posts);
  })
  .catch((error) => console.log(`${error} did not connect`));

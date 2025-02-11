const express = require("express");
const cors = require('cors');
const { z } = require("zod");
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.post('/signup', (req, res) => {
    const requiredBody = z.object({
        email: z.string().min(3).max(50).email(),
        password: z.string().min(6).max(30),
    });
    const parsedDataWithSuccess = requiredBody.safeParse(req.body);
    if (!parsedDataWithSuccess.success) {
        res.status(400).json({
            message: "Incorrect format",
            error: parsedDataWithSuccess.error,
            success: false,
        })
        return;
    }

    res.status(202).json({
        message: "You are Signed up successfully",
        success: true,
    })
});

app.listen(process.env.PORT);
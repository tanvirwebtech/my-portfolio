import { Button, TextField, Typography, useTheme } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { makeStyles } from "@mui/styles";
const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    const theme = useTheme();
    const useStyles = makeStyles({
        formInput: {
            [theme.breakpoints.up("sm")]: {
                width: "50%",
            },
            [theme.breakpoints.down("sm")]: {
                width: "100%",
            },
            margin: "10px auto !important",
        },
    });
    const { formInput } = useStyles();
    return (
        <div id="contact">
            <Typography variant="h2" sx={{ my: 3 }}>
                {" "}
                Contact Me
            </Typography>
            <form
                onSubmit={handleSubmit(onSubmit)}
                style={{ display: "flex", flexDirection: "column" }}
            >
                <TextField
                    className={formInput}
                    label="Full Name"
                    variant="standard"
                    {...register("fullName")}
                    sx={{ mx: "auto" }}
                />
                <TextField
                    className={formInput}
                    label="Email"
                    variant="standard"
                    type="email"
                    {...register("email")}
                    sx={{ mx: "auto" }}
                />
                <TextField
                    className={formInput}
                    label="Message"
                    variant="standard"
                    type="text"
                    {...register("message")}
                    sx={{ mx: "auto" }}
                />

                <Button
                    className={formInput}
                    sx={{ mx: "auto" }}
                    variant="contained"
                    type="submit"
                >
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default Contact;

import {
    Button,
    TextField,
    Typography,
    Box,
    useTheme,
    Container,
} from "@mui/material";
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
        <Box id="contact" sx={{ py: 4 }}>
            <Container>
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
                        label="Type your message"
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
                        Send
                    </Button>
                </form>
            </Container>
        </Box>
    );
};

export default Contact;

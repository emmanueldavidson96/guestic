"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import { RxCross2 } from "react-icons/rx";
import {
  Button as Btn,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import logoImg from "@/public/logo.png";
import Image from "next/image";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import axios from "axios";
import { useRouter } from "next/router";

const HeaderButtonGroup = ({
  popup,
  set_popup,
  registerpopup,
  setregister_popup,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [email, set_email] = useState("");
  const [password, set_password] = useState("");
  const [confirmPassword, set_confirm_pass] = useState("");

  const [errors, setErrors] = useState(null);
  const [error, setError] = useState(null);
  const [sucessfulSignup, setSucessfulSignup] = useState(false);
  const [sucessfulSignin, setSucessfulSignin] = useState(null);

  const handle_popup = () => {
    set_popup(true);
  };

  const handle_popup_out = () => {
    set_popup(false);
    setregister_popup(false);
  };

  const handle_registerpop = () => {
    setregister_popup(true);
  };

  const handle_signin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://guestic.onrender.com/auth/signin", {
        email,
        password,
      });
      console.log(res);
      if (res.status === 201 && res.data) {
        setError(null);
        setErrors(null);
        setSucessfulSignin(res.data);

        setTimeout(() => {
          handle_popup_out();
          window.location.href = "/profile";
        }, 3000);
      }
    } catch (err) {
      console.log(err);
      setSucessfulSignin(null);
      setErrors(null);
      setError(null);

      if (err.response.data.errors) {
        const errors = err.response.data.errors;
        setErrors(errors);
      }

      if (err.response.data.error) {
        const error = err.response.data;
        setError(error);
      }
    }
  };

  const handle_signup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://guestic.onrender.com/auth/signup", {
        email,
        password,
        confirmPassword,
      });
      console.log(res);
      if (res.status === 201 && res.data.id) {
        setError(null);
        setErrors(null);
        setSucessfulSignup(true);

        setTimeout(() => {
          handle_popup_out();
        }, 3000);
      }
    } catch (err) {
      console.log(err);
      setSucessfulSignup(false);
      setErrors(null);
      setError(null);

      if (err.response.data.errors) {
        const errors = err.response.data.errors;
        setErrors(errors);
      }

      if (err.response.data.error) {
        const error = err.response.data;
        setError(error);
      }
    }
  };

  useEffect(() => {
    if (errors) {
      console.log(errors);
    }
  }, [errors]);

  return (
    <section className="hidden md:flex gap-2">
      {/* <Link href="/login"> */}
      <Button
        className="rounded-[10px] bg-white border-2 border-goldenrod text-goldenrod font-bold hover:bg-goldenrod hover:text-white duration-300"
        onClick={handle_popup}
      >
        Login
      </Button>
      {/* <LoginModal isVisible={showModal} onClose={()=>setShowModal(false)}/> */}
      {popup && (
        <div
          className="w-screen h-screen top-0 left-0 z-30 fixed bg-neutral-600 opacity-85"
          onClick={handle_popup_out}
        ></div>
      )}
      {registerpopup && (
        <div
          className="w-screen h-screen top-0 left-0 z-30 fixed bg-neutral-600 opacity-85"
          onClick={handle_popup_out}
        ></div>
      )}
      {popup && (
        <Container
          component="main"
          maxWidth="xs"
          className="w-1/4 h-fit bg-white flex flex-col gap-1 rounded-2xl fixed left-[600px] z-50 p-4 top-[120px] "
        >
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <RxCross2 cursor={"pointer"} className="self-end" />
            <Image src={logoImg} className="mt-[-15px]" alt=""/>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="user@example.com"
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    type="email"
                    value={email}
                    autoFocus
                    onChange={(e) => set_email(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => set_password(e.target.value)}
                  />
                </Grid>

                {sucessfulSignin && (
                  <Grid item xs={12}>
                    <p className="bg-green-500 text-white text-md my-1 p-3 rounded-md">
                      {sucessfulSignin}
                    </p>
                  </Grid>
                )}

                {errors && (
                  <Grid item xs={12}>
                    <ul className="my-1 bg-slate-100 p-3 list-inside rounded-mg">
                      {errors.map((error, index) => (
                        <li key={index} className="my-2">
                          <p className="text-red-600 text-xs">
                            {error.message}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                )}

                {error && (
                  <Grid item xs={12}>
                    <ul className="my-1 bg-slate-50 p-3 list-inside">
                      <li className="my-2">
                        <p className="text-red-600 text-xs">{error.message}</p>
                      </li>
                    </ul>
                  </Grid>
                )}

                <Grid
                  item
                  xs={12}
                  className="flex justify-between items-center"
                >
                  <FormControlLabel
                    required
                    control={<Checkbox />}
                    label="Keep me signed in"
                    size="extrasmall"
                  />
                  <Typography
                    component="p"
                    variant="p"
                    className="text-sm text-yellow-600 font-semibold"
                  >
                    Forgot Password?
                  </Typography>
                </Grid>
              </Grid>
              {/* <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt:3, mb:2}}
                    
                  >
                    Sign Up
                  </Button> */}
              <div className="flex flex-col gap-1">
                <button
                  className="p-3 flex items-center bg-yellow-500 text-white w-full justify-center rounded-md"
                  onClick={handle_signin}
                >
                  Log Inn
                </button>

                <div className="flex w-full items-center gap-2 my-2">
                  <hr className="w-1/2 h-0.5 bg-black" />
                  <span>or</span>
                  <hr className="w-1/2 h-0.5 bg-black" />
                </div>

                <button className="flex items-center justify-center w-full border-2 rounded-md">
                  <span className="flex items-center gap-2 p-4 ">
                    <FcGoogle />
                    <span>Log in with Google</span>
                  </span>
                </button>

                <button className="flex items-center justify-center w-full border-2 rounded-md">
                  <span className="flex items-center gap-2 p-4 ">
                    <BsFacebook color="blue" />
                    <span>Log in with Google</span>
                  </span>
                </button>

                <button className="flex items-center justify-center w-full border-2 rounded-md">
                  <span className="flex items-center gap-2 p-4 ">
                    <FaXTwitter />
                    <span>Log in with Twitter</span>
                  </span>
                </button>
                <button className="flex items-center justify-center w-full border-2 rounded-md">
                  <span className="flex items-center gap-2 p-4 ">
                    <FaLinkedin color="#0076B2" />
                    <span>Log in with LinkedIn</span>
                  </span>
                </button>
              </div>
              <div className="py-2">
                <p className="text-sm">
                  Dont have an account yet{" "}
                  <span className="text-yellow-500 cursor-pointer">
                    Create a free account!
                  </span>
                </p>
              </div>
            </Box>
          </Box>
        </Container>
      )}

      {/* </Link> */}
      {/* </LoginModal> */}
      {/* <Link href="/register"> */}
      <Button
        className="rounded-[10px] bg-goldenrod border-2 border-goldenrod text-white font-bold hover:bg-white hover:text-goldenrod duration-300"
        onClick={handle_registerpop}
      >
        Register
      </Button>
      {/* </Link> */}
      {registerpopup && (
        <Container
          component="main"
          maxWidth="xs"
          className="w-1/4 h-fit bg-white flex flex-col gap-1 rounded-2xl fixed left-[600px] z-50 p-4 top-[100px] "
        >
          <Box
            sx={{
              marginTop: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <RxCross2 cursor={"pointer"} className="self-end" />
            <Image src={logoImg} className="mt-[-15px]" alt="" />
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <Grid container spacing={1}>
                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="email"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    autoFocus
                    value={email}
                    onChange={(e) => set_email(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="Password"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    autoFocus
                    type="password"
                    value={password}
                    onChange={(e) => set_password(e.target.value)}
                  />
                </Grid>

                <Grid item xs={12}>
                  <TextField
                    autoComplete="given-name"
                    name="ConfirmPassword"
                    required
                    fullWidth
                    id="confirmpassword"
                    label="Confirm Password"
                    autoFocus
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => set_confirm_pass(e.target.value)}
                  />
                </Grid>

                {sucessfulSignup && (
                  <Grid item xs={12}>
                    <p className="bg-green-500 text-white text-md my-1 p-3 rounded-md">
                      Sign up is successful, please login in!
                    </p>
                  </Grid>
                )}

                {errors && (
                  <Grid item xs={12}>
                    <ul className="my-1 bg-slate-100 p-3 list-inside rounded-mg">
                      {errors.map((error, index) => (
                        <li key={index} className="my-2">
                          <p className="text-red-600 text-xs">
                            {error.message}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </Grid>
                )}

                {error && (
                  <Grid item xs={12}>
                    <ul className="my-1 bg-slate-50 p-3 list-inside">
                      <li className="my-2">
                        <p className="text-red-600 text-xs">{error.message}</p>
                      </li>
                    </ul>
                  </Grid>
                )}

                <Grid
                  item
                  xs={12}
                  className="flex justify-between items-center"
                >
                  <FormControlLabel
                    // required
                    control={<Checkbox />}
                    label="Keep me signed in?"
                    size="extrasmall"
                  />
                  <Typography
                    component="p"
                    variant="p"
                    className="text-sm text-yellow-600 font-semibold"
                  >
                    Forgot Password?
                  </Typography>
                </Grid>
              </Grid>

              <div className="flex flex-col gap-1">
                <button
                  className="p-3 flex items-center bg-yellow-500 text-white w-full justify-center rounded-md"
                  onClick={handle_signup}
                >
                  Sign Up
                </button>

                <div className="flex w-full items-center gap-2 my-2">
                  <hr className="w-1/2 h-0.5 bg-black" />
                  <span>or</span>
                  <hr className="w-1/2 h-0.5 bg-black" />
                </div>

                <button className="flex items-center justify-center w-full border-2 rounded-md">
                  <span className="flex items-center gap-2 p-4 ">
                    <FcGoogle />
                    <span>Log in with Google</span>
                  </span>
                </button>

                <button className="flex items-center justify-center w-full border-2 rounded-md">
                  <span className="flex items-center gap-2 p-4 ">
                    <BsFacebook color="blue" />
                    <span>Log in with Google</span>
                  </span>
                </button>

                <button className="flex items-center justify-center w-full border-2 rounded-md">
                  <span className="flex items-center gap-2 p-4 ">
                    <FaXTwitter />
                    <span>Log in with Twitter</span>
                  </span>
                </button>
                <button className="flex items-center justify-center w-full border-2 rounded-md">
                  <span className="flex items-center gap-2 p-4 ">
                    <FaLinkedin color="#0076B2" />
                    <span>Log in with LinkedIn</span>
                  </span>
                </button>
              </div>

              <div className="py-2">
                <p className="text-sm">
                  Already have an account?{" "}
                  <span className="text-yellow-500 cursor-pointer">Log in</span>
                </p>
              </div>
            </Box>
          </Box>
        </Container>
      )}
    </section>
  );
};

export default HeaderButtonGroup;

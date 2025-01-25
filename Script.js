"use strict";

const rock = document.getElementById("photo--1");
const paper = document.getElementById("photo--2");
const scissors = document.getElementById("photo--3");
const comp = document.querySelector(".computer");
const player = document.querySelector(".player");

rock.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 3) + 1;
});

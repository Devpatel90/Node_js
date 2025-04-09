const express = require("express");
const path = require("path");
const port  = 1212;
const db = require("./Config/db");
const fschema = require("./Model/fschema");

const app = express();
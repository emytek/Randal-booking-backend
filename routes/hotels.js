import express from "express";
import {
  countByCity,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotelRooms,
  getHotels,
  updateHotel,
} from "../controllers/hotel.js";
import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import {verifyAdmin, verifyUser} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
// router.post("/", async (req, res) => {

//   const newHotel = new Hotel(req.body)
//   try {
//     const savedHotel = await newHotel.save()
//     res.status(200).json(savedHotel)
//   } catch(err) {
//       res.status(500).json(err)
//   }
// })

// //CREATE
// router.put("/:id", async (req, res) => {

//   try {
//     const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id, 
//     { $set: req.body },
//     { new: true })
//     res.status(200).json(updatedHotel)
//   } catch(err) {
//       res.status(500).json(err)
//   }
// })

// //CREATE
// router.delete("/:id", async (req, res) => {

//   try {
//     await Hotel.findByIdAndDelete(req.params.id)
//     res.status(200).json("Hotel has been deleted")
//   } catch(err) {
//       res.status(500).json(err)
//   }
// })

// //GET A HOTEL
// router.get("/:id", async (req, res) => {

//   try {
//     const hotel = await Hotel.findById(req.params.id)
//     res.status(200).json(hotel)
//   } catch(err) {
//       res.status(500).json(err)
//   }
// })

//GET A HOTEL
router.post("/", verifyAdmin, createHotel);
//UPDATE
router.put("/:id", verifyAdmin, updateHotel);
//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);
//GET
router.get("/find/:id", getHotel);
//GET ALL
router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

export default router;

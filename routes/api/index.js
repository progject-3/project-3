const router = require("express").Router();
const bookRoutes = require("./calendars");

// Book routes
router.use("/calendars", calendarRoutes);

module.exports = router;

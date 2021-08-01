const router = require('express').Router();
const userRoutes = require('./userRoutes');
const connectionRoutes = require('./connectionRoutes');
const matchesRoutes = require('./matchesRoutes');

router.use('/matches', matchesRoutes);
router.use('/users', userRoutes);
router.use('/connections', connectionRoutes);
// router.use('/projects', projectRoutes);

module.exports = router;

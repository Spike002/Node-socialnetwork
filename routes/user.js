const express = require('express')
const { userById,
        allUsers,
        getUser,
        updateUser,
        deleteUser,
        userPhoto,
        addFollowing,
        addFollower,
        removeFollowing,
        removefollower,
        findPeople
      } = require('../controllers/user')

const {requireSignin} = require('../controllers/auth')

const router = express.Router()

router.put('/user/follow', requireSignin, addFollowing, addFollower)
router.put('/user/unfollow', requireSignin, removeFollowing,removefollower)

router.get('/users', allUsers)
router.get('/user/:userId',  requireSignin, getUser)
router.put('/user/:userId',  requireSignin, updateUser)
router.delete('/user/:userId',  requireSignin, deleteUser)

//Photo
router.get("/user/photo/:userId", userPhoto)

//who to follow
router.get('/user/findpeople/:userId', requireSignin, findPeople)

//any route containing: userId, our app will first execute userById()
router.param("userId", userById)


module.exports = router;
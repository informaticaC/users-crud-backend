const catchError = require('../utils/catchError');
const User = require('../models/User');


const getAll = catchError(async (req, res) => {
  const users = await User.findAll()
  return res.json(users)
});

const create = catchError(async (req, res) => {
  const user = req.body
  const createUser = await User.create(user)
  return res.status(201).json(createUser)
})

const getOne = catchError(async (req, res) => {
  const { id } = req.params
  const userOne = await User.findByPk(id)
  if (!userOne) return res.status(404).json({ message: " user not found " })
  return res.json(userOne)
})

const deleteOne = catchError(async (req, res)=> {
    const {id} = req.params
    const deleteUser = await User.destroy({where: {id}})
    if(!deleteUser) return res.status(404).json({ message: " user not found " })
    return res.status(204)
})

const update = catchError(async (req, res) => {
const { id } = req.params
const userBody = req.body
const userUpdate = await User.update(userBody, { where: { id }, returning: true })
if (userUpdate[0] === 0) return res.status(404).json({ message: " user not found "})
return res.json(userUpdate[1][0])
})

module.exports = {
  getAll,
  create,
  getOne,
  deleteOne,
  update 
}
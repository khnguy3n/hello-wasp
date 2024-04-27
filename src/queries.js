export const getUsers = async (args, context) => {
  return context.entities.User.findMany({
    orderBy: { id: 'asc' },
  })
}
export const getBoxes = async (args, context) => {
  return context.entities.Box.findMany({
    orderBy: { id: 'asc' },
  })
}
export const getItemsByBox = async (boxId, context) => {
  return context.entities.Item.findMany({
    where: {
      boxId
    },
    orderBy: { id: 'asc' },
  })
}

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
export const getItemsByBox = async (arg, context) => {
  return context.entities.Item.findMany({
    where: {
      boxId: '1yh4KS9pnirLgpKOl8Z6B'
    },
    orderBy: { id: 'asc' },
  })
}

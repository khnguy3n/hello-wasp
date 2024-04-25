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

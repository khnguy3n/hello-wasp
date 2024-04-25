export const getUsers = async (args, context) => {
  return context.entities.User.findMany({
    orderBy: { id: 'asc' },
  })
}

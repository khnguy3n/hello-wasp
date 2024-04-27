import { HttpError } from "wasp/server";

export const getUsers = async (args, context) => {
	return context.entities.User.findMany({
		orderBy: { id: "asc" },
	});
};
export const getBoxes = async (args, context) => {
	return context.entities.Box.findMany({
		orderBy: { id: "asc" },
	});
};
export const getItemsByBox = async (boxId, context) => {
	if (!context.entities.Item) {
		throw new HttpError(401);
	}
	try {
		const items = await context.entities.Item.findMany({
			where: {
				boxId,
			},
			orderBy: { id: "asc" },
		});
    return items;
	} catch (error) {
		throw new HttpError(404);
	}
};

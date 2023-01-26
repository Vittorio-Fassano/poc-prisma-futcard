import Joi from "joi";

const gameSchema = Joi.object({
    teams: Joi.string().required(),
    result: Joi.string().required(),
    stadium: Joi.string().required()
})

export default gameSchema;
import Joi from "joi";

const gameSchema = Joi.object({
    teams: Joi.string().required(),
    result: Joi.valid("vitória", "empate", "derrota").required(),
    stadium: Joi.string().required()
})

export default gameSchema;
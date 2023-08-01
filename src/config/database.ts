import { Sequelize } from "sequelize";
import config from './'

const connect = new Sequelize(`postgres://${config.POSTGRES_USER}:${config.POSTGRES_PASSWORD}@${config.POSTGRES_HOST}:${config.POSTGRES_PORT}/${config.POSTGRES_DB}`)

export default connect;
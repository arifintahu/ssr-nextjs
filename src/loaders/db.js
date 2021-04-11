module.exports = ({ fs, Sequelize, basedir }) => {
    return new Promise(async (resolve, reject) => {
        const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
            host    : process.env.DB_HOST,
            port    : parseInt(process.env.DB_PORT, 10) || 5432,
            dialect : 'postgres',
            logging : process.env.DB_LOGGING ? console.log : false,
            native  : true,
            ssl     : true
        });

        const connection = function (sequelize){
            return new Promise ((resolve, reject) => {
                sequelize.authenticate()
                .then(() => {
                    console.log('Database connection has been established successfully.');
                    const path  = `${basedir}/src/schemas`;
                    const db    = {};

                    fs.readdirSync(path).map((file, idx) => {

                        if(file.replace(/.js|.ts/g, ``) === `relation`) {
                            return;
                        }

                        db[file.replace(/.js|.ts/g, ``)] = require(`${path}/${file}`)(sequelize);
                    });

                    resolve(db);
                }).catch((error) => {
                    reject(error);
                });
            });
        }

        const db = await connection(sequelize).catch((err) => {
            reject(err);
        });

        resolve(require(`${basedir}/src/schemas/relation`)(db));
    });
};

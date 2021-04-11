module.exports = (dataAccess) => {
    return {
        listUser: async () => {
            return new Promise(async (resolve, reject) => {
                const result = await dataAccess.user.getAllUser().catch(err => reject(err));
                resolve(result);
            });
        }
    }
}
module.exports = app => {
    const { INTEGER, STRING, DATE } = app.Sequelize;
    const User = app.model.define('user', {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: STRING(30),
        age: INTEGER,
        created_at: DATE,
        updated_at: DATE
    })
    return User
}
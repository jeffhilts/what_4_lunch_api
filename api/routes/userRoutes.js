import * as user from '../conrollers/userController';
module.exports = (app) => {
   app.route('/api/random')
        .get(user.getRandomPlace);

    app.route('/api/places/:name')
        .put(user.selectPlace);
}
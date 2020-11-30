var config = {}; config.app = {};

// Db Configuration
config.db = {}
config.db.uri = 'mongodb+srv://demo1:demo_tra@cluster0-7mvod.mongodb.net/sample_mflix?retryWrites=true&w=majority';
config.app.clientRoutes = ['/', '/viewMovieDetails/:id'];

module.exports = config;
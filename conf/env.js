function getClientEnvironment() {
  const envKeys = [
    'BASE_URL',
    'APP_URL',
    'APP_NAME',
  ];

  const raw = envKeys
    .filter(envKey => process.env[envKey])
    .reduce(
      (env, key) => {
        env[key] = process.env[key];
        return env;
      },
      {
        // Useful for determining whether we’re running in production mode.
        NODE_ENV: process.env.NODE_ENV || 'dev'
      }
    );

  // Stringify all values so we can feed into Webpack DefinePlugin
  const stringified = {
    'process.env': Object.keys(raw).reduce((env, key) => {
      env[key] = JSON.stringify(raw[key]);
      return env;
    }, {})
  };

  const replaceArray = envKeys.map(key => {
    return {
      search: `%${key}%`,
      replace: process.env[key],
      flags: 'g'
    };
  });

  return {raw, stringified, replaceArray};
}

module.exports = getClientEnvironment;

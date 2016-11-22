module.exports = function(SwaggerApi) {

  /**
   * Get entry

   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {entry-input} result Result object
   */
  SwaggerApi.GETEntry = function(callback) {
    // Replace the code below with your implementation.
    // Please make sure the callback is invoked.
    process.nextTick(function() {
      var ds = SwaggerApi.dataSource;
      var sql = "SELECT * FROM products WHERE category=?";
      ds.connector.query(sql, category, function(err, products) {
        if (err) console.error(err);
        callback(err, products);

      });
    });

  }

  /**
   * Update entry
   * @param {entry-input} body undefined
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {entry-input} result Result object
   */
  SwaggerApi.PUTEntry = function(body, callback) {
    // Replace the code below with your implementation.
    // Please make sure the callback is invoked.
    process.nextTick(function() {
      var ds = SwaggerApi.dataSource;
      var sql = "SELECT * FROM products WHERE category=?";
      ds.connector.query(sql, category, function(err, products) {
        if (err) console.error(err);
        callback(err, products);

      });
    });

  }

  /**
   * Delete entry

   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {any} result Result object
   */
  SwaggerApi.DELETEEntry = function(callback) {
    // Replace the code below with your implementation.
    // Please make sure the callback is invoked.
    process.nextTick(function() {
      var ds = SwaggerApi.dataSource;
      var sql = "SELECT * FROM products WHERE category=?";
      ds.connector.query(sql, category, function(err, products) {
        if (err) console.error(err);
        callback(err, products);

      });
    });

  }

  /**
   * List entries

   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {any} result Result object
   */
  SwaggerApi.LISTEntries = function(callback) {
    // Replace the code below with your implementation.
    // Please make sure the callback is invoked.
    process.nextTick(function() {
      var ds = SwaggerApi.dataSource;
      var sql = "SELECT * FROM products WHERE category=?";
      ds.connector.query(sql, category, function(err, products) {
        if (err) console.error(err);
        callback(err, products);

      });
    });

  }

  /**
   * Create entry
   * @param {entry-input} body undefined
   * @callback {Function} callback Callback function
   * @param {Error|string} err Error object
   * @param {entry-input} result Result object
   */
  SwaggerApi.POSTEntry = function(body, callback) {
    // Replace the code below with your implementation.
    // Please make sure the callback is invoked.
    process.nextTick(function() {
      var ds = SwaggerApi.dataSource;
      var sql = "SELECT * FROM products WHERE category=?";
      ds.connector.query(sql, category, function(err, products) {
        if (err) console.error(err);
        callback(err, products);

      });
    });

  }



  SwaggerApi.remoteMethod('GETEntry', {
    isStatic: true,
    accepts: [],
    returns: [{
      description: '',
      type: 'entry-input',
      arg: 'data',
      root: true
    }],
    http: {
      verb: 'get',
      path: '/entries/:id'
    },
    description: undefined
  });

  SwaggerApi.remoteMethod('PUTEntry', {
    isStatic: true,
    accepts: [{
      arg: 'body',
      type: 'entry-input',
      description: undefined,
      required: undefined,
      http: {
        source: 'body'
      }
    }],
    returns: [{
      description: '',
      type: 'entry-input',
      arg: 'data',
      root: true
    }],
    http: {
      verb: 'put',
      path: '/entries/:id'
    },
    description: undefined
  });

  SwaggerApi.remoteMethod('DELETEEntry', {
    isStatic: true,
    accepts: [],
    returns: [],
    http: {
      verb: 'delete',
      path: '/entries/:id'
    },
    description: undefined
  });

  SwaggerApi.remoteMethod('LISTEntries', {
    isStatic: true,
    accepts: [],
    returns: [],
    http: {
      verb: 'get',
      path: '/entries'
    },
    description: undefined
  });

  SwaggerApi.remoteMethod('POSTEntry', {
    isStatic: true,
    accepts: [{
      arg: 'body',
      type: 'entry-input',
      description: undefined,
      required: undefined,
      http: {
        source: 'body'
      }
    }],
    returns: [{
      description: '',
      type: 'entry-input',
      arg: 'data',
      root: true
    }],
    http: {
      verb: 'post',
      path: '/entries'
    },
    description: undefined
  });

}

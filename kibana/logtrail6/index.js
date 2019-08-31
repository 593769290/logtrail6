var serverRoute = require('./server/routes/server');
export default function (kibana) {
  return new kibana.Plugin({
    name: 'logtrail6',
    require: ['kibana', 'elasticsearch'],
    uiExports: {
      app: {
        title: 'LogTrail6',
        description: 'Plugin to view, search & tail logs in Kibana',
        main: 'plugins/logtrail6/app',
        url: '/app/logtrail6',
        // injectVars: function (server, options) {
        //   var config = server.config();
        //   return {
        //     kbnIndex: config.get('kibana.index'),
        //     esShardTimeout: config.get('elasticsearch.shardTimeout'),
        //     esApiVersion: config.get('elasticsearch.apiVersion')
        //   };
        // }
      }
    },
    init: function (server, options) {
      // Add server routes and initalize the plugin here
      serverRoute(server);
    }

  });
};

require.config({
  shim: {
    bpopup: {
      deps: [
        'jquery'
      ],
      exports: 'bPopup'
    }
  },
  paths: {
    bpopup: 'bower_components/bpopup/jquery.bpopup',
    jquery: 'bower_components/jquery/jquery',
    requirejs: 'bower_components/requirejs/require',
    crafty: 'bower_components/crafty/crafty'
  },
  baseUrl: '/js',
  packages: [

  ]
});

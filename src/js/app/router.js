define(function(require) {

  "use strict";

  // Vendor
  var $ = require('jquery');
  var Backbone = require('backbone');

  // Libs
  var ViewHandler = require('libs/viewHandler');
  
  // Page Views
  var HomeView = require('app/home/home');
  var ResumeView = require('app/resume/resume');
  var ProjectsView = require('app/projects/projects');
    
  return Backbone.Router.extend({

    routes: {
		  '': 'projects',
      '/': 'projects',
      'resume': 'resume',
      'projects': 'projects'
    },

    initialize: function() {

    },

    index: function() {
      var homeView = new HomeView();

      ViewHandler.setCurrent(homeView, "About Me");
    },

    resume: function() {
      var resumeView = new ResumeView();

      ViewHandler.setCurrent(resumeView, "Resume");
    },

    projects: function() {
      var projectsView = new ProjectsView();

      ViewHandler.setCurrent(projectsView, "Projects");
    }

  });

});
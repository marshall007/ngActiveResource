angular
  .module('ActiveResource.Mocks', [])
  .provider('ActiveResource.Mocks', function() {
    this.$get = ['ARMockSystem', 'ARMockSensor',
      'Post', 'Comment', 'Author',
      function(System, Sensor, Post, Comment, Author) {
        Mocks         = {};
        Mocks.System  = System;
        Mocks.Sensor  = Sensor;
        Mocks.Post    = Post;
        Mocks.Comment = Comment;
        Mocks.Author  = Author;
      
        return Mocks;
    }];
  });

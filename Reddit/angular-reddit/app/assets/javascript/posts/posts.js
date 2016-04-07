angular.module('angularReddit')
.factory('posts', [
function(){
  var o = {
    posts: [
      {title: 'post 1', upvotes: 5},
      {title: 'post 2', upvotes: 2},
      {title: 'post 3', upvotes: 7},
      {title: 'post 4', upvotes: 4},
      {title: 'post 5', upvotes: 5}
    ]
  };
  return o;
}]);

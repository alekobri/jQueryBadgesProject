
$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/Naypersand.json',
    dataType: 'jsonp',
    success: function(response) {
      showBadges(response.courses.completed);
    }
  });

  function showBadges(courses) {
    var $badges = $('#badges');

    courses.forEach(function(course) {
      var $div = $('<div />', {
        'class': 'course'
      });

      $badges.append($div);

      $div.append($('<h3 />', {
        text: course.title
      }));

      $div.append($('<img />', {
        src: course.badge
      }));

      $div.append($('<a />', {
        href: course.url,
        target: '_blank',
        'class': 'btn btn-primary',
        text: 'See Course'
      }));
    });
  }

});
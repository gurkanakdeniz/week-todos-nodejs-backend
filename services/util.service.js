exports.getWeekNumber = function weekNumber(date) {
  var instance;

  if (typeof date === "string" && date.length) {
    instance = new Date(date);
  } else if (date instanceof Date) {
    instance = date;
  } else {
    instance = new Date();
  }

  // Create a copy of this date object
  var target = new Date(instance.valueOf());

  // ISO week date weeks start on monday
  // so correct the day number
  var dayNr = (instance.getDay() + 6) % 7;

  // ISO 8601 states that week 1 is the week
  // with the first thursday of that year.
  // Set the target date to the thursday in the target week
  target.setDate(target.getDate() - dayNr + 3);

  // Store the millisecond value of the target date
  var firstThursday = target.valueOf();

  // Set the target to the first thursday of the year
  // First set the target to january first
  target.setMonth(0, 1);
  // Not a thursday? Correct the date to the next thursday
  if (target.getDay() !== 4) {
    target.setMonth(0, 1 + ((4 - target.getDay() + 7) % 7));
  }

  // The weeknumber is the number of weeks between the
  // first thursday of the year and the thursday in the target week
  var weekNumber = 1 + Math.ceil((firstThursday - target) / 604800000);
  return weekNumber;
};

exports.format = function format(todos) {
  var weekday = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var result = {};

  //asekron calistigi icin boyle yazildi daha guzel yazilmasi lazim
  for (var wd in weekday) {
    result[weekday[wd]] = new Array();
    if (wd == weekday.length - 1) {
      if (
        todos == null ||
        todos === null ||
        todos == undefined ||
        todos === undefined ||
        todos.length <= 0
      ) {
        return result;
      }

      // // var options = {
      // //   weekday: "long",
      // //   year: "numeric",
      // //   month: "long",
      // //   day: "numeric",
      // //   hour: "2-digit",
      // //   minute: "2-digit",
      // //   second: "2-digit",
      // //   hour12: false
      // // };
      // var options = {
      //   weekday: "long"
      // };
      // var prnDt = new Date().toLocaleDateString("en-us", options);

      var options = {
        weekday: "short"
      };
      for (var i in todos) {
        // var date = todos[i].date;
        // var day = date.getDay();
        // day = (((day - 1) % 7) + 7) % 7;
        // var name = weekday[day];
        var name = todos[i].date.toLocaleDateString("en-us", options);
        result[name].push(todos[i]);

        if (i == todos.length - 1) {
          return result;
        }
      }
    }
  }
  // for (var i in todos) {
  //   var day = weekday[todos[i].date.getDay()];
  //
  //   if (!result[day]) {
  //     result[day] = new Array();
  //   }
  //
  //   result[day].push(todos[i]);
  //
  //   if (i == todos.length - 1) {
  //     for (var ww in weekday) {
  //       if (!result[weekday[ww]]) {
  //         result[weekday[ww]] = new Array();
  //       }
  //     }
  //
  //     return result;
  //   }
  // }
};

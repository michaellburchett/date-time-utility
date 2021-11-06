/**
 * Takes a date and adds a certain number of days to it
 *
 * @param {Date} date This is the date you would like to add to
 * @param {Number} days This is the number of days you would like to add
 * @return {Date}
 */
exports.addDaysToDate = function(date, days) {

    date.setDate(date.getDate() + days);

    return date;
};
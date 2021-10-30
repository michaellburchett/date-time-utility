/**
 * Takes a date and determines how many minutes away it is from now
 *
 * @param {Date} date This is the date you would like to compare against
 * @return {Number}
 */
exports.fromCurrentTime = function(date) {

    validateIsInstanceOf(date, Date);

    const now = new Date();

    return getUnitsBetweenDates(now, date);
};

/**
 * Takes two dates and determines how many minutes away they are from each other
 *
 * @param {Date} date1 This is the first date you would like to compare against
 * @param {Date} date2 This is the second date you would like to compare against
 * @return {Number}
 */
exports.betweenDates = function(date1, date2) {

    validateIsInstanceOf(date1, Date);

    validateIsInstanceOf(date2, Date);

    return getUnitsBetweenDates(date1, date2);
};

/**
 * Takes an entity that you would like to validate that it is a certain type
 *
 * @param entity This is the entity that you would like to validate
 * @param type This is the type that you re validating against
 * @throws
 */
function validateIsInstanceOf(entity, type) {

    if(!entity instanceof type){
        throw new Error(`You must give a valid ${type}`);
    }
}

/**
 * Takes two dates and determines how many minutes away they are from each other
 *
 * @param {Date} date1 This is the first date you would like to compare against
 * @param {Date} date2 This is the second date you would like to compare against
 * @return {Number}
 */
function getUnitsBetweenDates(date1, date2) {

    const difference = date2 - date1;

    return Math.round((difference / 1000) / 60);
}
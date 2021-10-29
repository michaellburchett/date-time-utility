exports.fromCurrentTime = function(date) {

    validateIsInstanceOf(date, Date);

    const difference = date - Date.now();

    return Math.round(difference / 1000);
};

exports.betweenDates = function(date1, date2) {

    validateIsInstanceOf(date1, Date);

    validateIsInstanceOf(date2, Date);

    const difference = date1 - date2;

    return Math.round(difference / 1000);
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
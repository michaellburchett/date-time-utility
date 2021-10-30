/**
 * Takes an entity that you would like to validate that it is a Date
 *
 * @param entity This is the entity that you would like to validate
 * @throws
 */
exports.validateIsInstanceOf = function(entity) {

    if(!entity instanceof Date){
        throw new Error(`You must give a valid Date`);
    }
};
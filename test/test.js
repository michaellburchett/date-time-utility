'use strict';

const dateTimeUtility = require('../src/index.js');
const assert = require('assert');

describe('Test Date Time Utilities Successes', function() {

    describe('How many seconds in the future is a specified date from the current time?', function() {
        it('should get seconds away a specified date is from the current time.', function() {
            const date = new Date();

            date.setDate(date.getDate() + 365);

            const seconds = dateTimeUtility.seconds.fromCurrentTime(date);

            assert.equal(seconds, 31536000);
        });
    });

    describe('How many minutes in the future is a specified date from the current time?', function() {
        it('should get minutes away a specified date is from the current time.', function() {
            const date = new Date();

            date.setDate(date.getDate() + 365);

            const minutes = dateTimeUtility.minutes.fromCurrentTime(date);

            assert.equal(minutes, 525600);
        });
    });

    describe('How many hours in the future is a specified date from the current time?', function() {
        it('should get hours away a specified date is from the current time.', function() {
            const date = new Date();

            date.setDate(date.getDate() + 365);

            const hours = dateTimeUtility.hours.fromCurrentTime(date);

            assert.equal(hours, 8760);
        });
    });

    describe('How many days in the future is a specified date from the current time?', function() {
        it('should get days away a specified date is from the current time.', function() {
            const date = new Date();

            date.setDate(date.getDate() + 30);

            const days = dateTimeUtility.days.fromCurrentTime(date);

            assert.equal(days, 30);
        });
    });

    describe('How many weeks in the future is a specified date from the current time?', function() {
        it('should get weeks away a specified date is from the current time.', function() {
            const date = new Date();

            date.setDate(date.getDate() + 365);

            const weeks = dateTimeUtility.weeks.fromCurrentTime(date);

            assert.equal(weeks, 52);
        });
    });

    describe('How many months in the future is a specified date from the current time?', function() {
        it('should get months away a specified date is from the current time.', function() {
            const date = new Date();

            date.setDate(date.getDate() + 365);

            const months = dateTimeUtility.months.fromCurrentTime(date);

            assert.equal(months, 12);
        });
    });

    describe('How many years in the future is a specified date from the current time?', function() {
        it('should get years away a specified date is from the current time.', function() {
            const date = new Date();

            date.setDate(date.getDate() + 365);

            const years = dateTimeUtility.years.fromCurrentTime(date);

            assert.equal(years, 1);
        });
    });

    describe('How many seconds are between two given dates?', function() {
        it('should get seconds between two given dates.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 370);

            const seconds = dateTimeUtility.seconds.betweenDates(date1, date2);

            assert.equal(seconds, 31536000);
        });
    });

    describe('How many minutes are between two given dates?', function() {
        it('should get minutes between two given dates.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 370);

            const minutes = dateTimeUtility.minutes.betweenDates(date1, date2);

            assert.equal(minutes, 525600);
        });
    });

    describe('How many hours are between two given dates?', function() {
        it('should get hours between two given dates.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 370);

            const hours = dateTimeUtility.hours.betweenDates(date1, date2);

            assert.equal(hours, 8760);
        });
    });

    describe('How many days are between two given dates?', function() {
        it('should get days between two given dates.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 30);

            date2.setDate(date2.getDate() + 60);

            const days = dateTimeUtility.days.betweenDates(date1, date2);

            assert.equal(days, 30);
        });
    });

    describe('How many weeks are between two given dates?', function() {
        it('should get weeks between two given dates.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 370);

            const weeks = dateTimeUtility.weeks.betweenDates(date1, date2);

            assert.equal(weeks, 52);
        });
    });

    describe('How many months are between two given dates?', function() {
        it('should get months between two given dates.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 370);

            const months = dateTimeUtility.months.betweenDates(date1, date2);

            assert.equal(months, 12);
        });
    });

    describe('How many years are between two given dates?', function() {
        it('should get years between two given dates.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 370);

            const years = dateTimeUtility.years.betweenDates(date1, date2);

            assert.equal(years, 1);
        });
    });

    describe('Seconds between two given dates should be 0 if same.', function() {
        it('should be 0 seconds between two given dates if the dates are the same.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 5);

            const seconds = dateTimeUtility.seconds.betweenDates(date1, date2);

            assert.equal(seconds, 0);
        });
    });

    describe('Minutes between two given dates should be 0 if same.', function() {
        it('should be 0 minutes between two given dates if the dates are the same.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 5);

            const minutes = dateTimeUtility.minutes.betweenDates(date1, date2);

            assert.equal(minutes, 0);
        });
    });

    describe('Hours between two given dates should be 0 if same.', function() {
        it('should be 0 hours between two given dates if the dates are the same.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 5);

            const hours = dateTimeUtility.hours.betweenDates(date1, date2);

            assert.equal(hours, 0);
        });
    });

    describe('Days between two given dates should be 0 if same.', function() {
        it('should be 0 days between two given dates if the dates are the same.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 5);

            const days = dateTimeUtility.days.betweenDates(date1, date2);

            assert.equal(days, 0);
        });
    });

    describe('Weeks between two given dates should be 0 if same.', function() {
        it('should be 0 weeks between two given dates if the dates are the same.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 5);

            const weeks = dateTimeUtility.weeks.betweenDates(date1, date2);

            assert.equal(weeks, 0);
        });
    });

    describe('Months between two given dates should be 0 if same.', function() {
        it('should be 0 months between two given dates if the dates are the same.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 5);

            const months = dateTimeUtility.months.betweenDates(date1, date2);

            assert.equal(months, 0);
        });
    });

    describe('Years between two given dates should be 0 if same.', function() {
        it('should be 0 years between two given dates if the dates are the same.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 5);

            const years = dateTimeUtility.years.betweenDates(date1, date2);

            assert.equal(years, 0);
        });
    });

    describe('How many weeks are between two given dates less than one half week?', function() {
        it('should get weeks between two given dates less than one half week apart.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 5);

            date2.setDate(date2.getDate() + 7);

            const weeks = dateTimeUtility.weeks.betweenDates(date1, date2);

            assert.equal(weeks, 0);
        });
    });

    describe('How many weeks are between two given dates just less than one full week?', function() {
        it('should get weeks between two given dates just less than one full week apart.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 1);

            date2.setDate(date2.getDate() + 7);

            const weeks = dateTimeUtility.weeks.betweenDates(date1, date2);

            assert.equal(weeks, 0);
        });
    });
});

describe('Test Date Time Utilities Errors', function() {

    describe('Should error when non date is passed with seconds from now function.', function() {
        it('should return an error when a non-date is passed to the seconds function.', function() {
            assert.throws(
                () => dateTimeUtility.seconds.fromCurrentTime("text")
            );
        });
    });

    describe('Should error when non date is passed with minutes from now function.', function() {
        it('should return an error when a non-date is passed to the minutes function.', function() {
            assert.throws(
                () => dateTimeUtility.minutes.fromCurrentTime("text")
            );
        });
    });

    describe('Should error when non date is passed with hours from now function.', function() {
        it('should return an error when a non-date is passed to the hours function.', function() {
            assert.throws(
                () => dateTimeUtility.hours.fromCurrentTime("text")
            );
        });
    });

    describe('Should error when non date is passed with days from now function.', function() {
        it('should return an error when a non-date is passed to the days function.', function() {
            assert.throws(
                () => dateTimeUtility.days.fromCurrentTime("text")
            );
        });
    });

    describe('Should error when non date is passed with weeks from now function.', function() {
        it('should return an error when a non-date is passed to the weeks function.', function() {
            assert.throws(
                () => dateTimeUtility.weeks.fromCurrentTime("text")
            );
        });
    });

    describe('Should error when non date is passed with months from now function.', function() {
        it('should return an error when a non-date is passed to the months function.', function() {
            assert.throws(
                () => dateTimeUtility.months.fromCurrentTime("text")
            );
        });
    });

    describe('Should error when non date is passed with years from now function.', function() {
        it('should return an error when a non-date is passed to the years function.', function() {
            assert.throws(
                () => dateTimeUtility.years.fromCurrentTime("text")
            );
        });
    });
});
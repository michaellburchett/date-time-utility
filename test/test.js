'use strict';

const dateTimeUtility = require('../src/index.js');
const assert = require('assert');

describe('Test Date Time Utilities', function() {

    describe('How many seconds in the future is a specified date from the current time?', function() {
        it('should get seconds away a specified date is from the current time.', function() {
            const date = new Date();

            date.setDate(date.getDate() + 360);

            const seconds = dateTimeUtility.seconds.fromCurrentTime(date);

            assert.equal(seconds, 31104000);
        });
    });

    describe('How many minutes in the future is a specified date from the current time?', function() {
        it('should get minutes away a specified date is from the current time.', function() {
            const date = new Date();

            date.setDate(date.getDate() + 360);

            const minutes = dateTimeUtility.minutes.fromCurrentTime(date);

            assert.equal(minutes, 525960);
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

            date.setDate(date.getDate() + 30);

            const weeks = dateTimeUtility.weeks.fromCurrentTime(date);

            assert.equal(weeks, 4);
        });
    });

    describe('How many months in the future is a specified date from the current time?', function() {
        it('should get months away a specified date is from the current time.', function() {
            const date = new Date();

            date.setDate(date.getDate() + 90);

            const months = dateTimeUtility.months.fromCurrentTime(date);

            assert.equal(months, 3);
        });
    });

    describe('How many years in the future is a specified date from the current time?', function() {
        it('should get years away a specified date is from the current time.', function() {
            const date = new Date();

            date.setDate(date.getDate() + 1480);

            const years = dateTimeUtility.years.fromCurrentTime(date);

            assert.equal(years, 4);
        });
    });

    describe('How many seconds are between two given dates?', function() {
        it('should get seconds between two given dates.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate());

            date2.setDate(date2.getDate() + 360);

            const seconds = dateTimeUtility.seconds.betweenDates(date1, date2);

            assert.equal(seconds, 31104000);
        });
    });

    describe('How many minutes are between two given dates?', function() {
        it('should get minutes between two given dates.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate());

            date2.setDate(date2.getDate() + 360);

            const minutes = dateTimeUtility.minutes.betweenDates(date1, date2);

            assert.equal(minutes, 525960);
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

            date1.setDate(date1.getDate() + 30);

            date2.setDate(date2.getDate() + 60);

            const weeks = dateTimeUtility.weeks.betweenDates(date1, date2);

            assert.equal(weeks, 4);
        });
    });

    describe('How many months are between two given dates?', function() {
        it('should get months between two given dates.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 90);

            date2.setDate(date2.getDate() + 180);

            const months = dateTimeUtility.months.betweenDates(date1, date2);

            assert.equal(months, 3);
        });
    });

    describe('How many years are between two given dates?', function() {
        it('should get years between two given dates.', function() {
            const date1 = new Date();

            const date2 = new Date();

            date1.setDate(date1.getDate() + 1480);

            date2.setDate(date2.getDate() + 2960);

            const years = dateTimeUtility.years.betweenDates(date1, date2);

            assert.equal(years, 4);
        });
    });
});
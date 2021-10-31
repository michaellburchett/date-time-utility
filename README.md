# date-time-utility
This package consists of several functions that assists users in handling the 
complexities of dates and times.

## Features:
  - Vanilla Javascript, no additional packages used.
  - Given a specific date, how many seconds, minutes, hours, days, weeks, 
  months, or years away is it?
  - Given two specific dates, how many seconds, minutes, hours, days, weeks, 
    months, or years away are they from each other?
    
## Modules:

Users have the ability to use one of the following modules that 
give users the functions corresponding to the timespan of choice:

    * seconds
    * minutes
    * hours
    * days
    * weeks
    * months
    * years

### timespan.fromCurrentTime(date)

Takes a date and determines how many `{timespans}` away it is from right now.

```javascript
var date = new Date();
     
date.setDate(date.getDate() + 365);

const seconds = dateTimeUtility.seconds.fromCurrentTime(date); //31536000
const minutes = dateTimeUtility.minutes.fromCurrentTime(date); //525600
const hours = dateTimeUtility.hours.fromCurrentTime(date); //8760
const days = dateTimeUtility.days.fromCurrentTime(date); //360
const weeks = dateTimeUtility.weeks.fromCurrentTime(date); //52
const months = dateTimeUtility.months.fromCurrentTime(date); //12
const years = dateTimeUtility.years.fromCurrentTime(date); //1
```

### timespan.betweenDates(date1, date2)


Takes two dates and determines how many `{timespans}` away they are from each other

```javascript
const date1 = new Date();

const date2 = new Date();

date1.setDate(date1.getDate() + 5);

date2.setDate(date2.getDate() + 370);

const seconds = dateTimeUtility.seconds.betweenDates(date1, date2) //31536000
const minutes = dateTimeUtility.minutes.betweenDates(date1, date2) //525600
const hours = dateTimeUtility.hours.betweenDates(date1, date2) //8760
const days = dateTimeUtility.days.betweenDates(date1, date2) //360
const weeks = dateTimeUtility.weeks.betweenDates(date1, date2) //52
const months = dateTimeUtility.months.betweenDates(date1, date2) //12
const years = dateTimeUtility.years.betweenDates(date1, date2) //1
```

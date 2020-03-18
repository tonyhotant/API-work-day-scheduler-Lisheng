# 05 Third-Party APIs: Work Day Scheduler

## User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Usage

- The URL of the deployed application: <https://tonyhotant.github.io/API-work-day-scheduler-Lisheng/>

- The URL of the GitHub repository: <https://github.com/tonyhotant/API-work-day-scheduler-Lisheng>

## Log

v0.9 16/03/20 initial release
v1.0 17/3/20 major update

## To do

   1. AM PM check
   2. check duplicate item in array
   3. reset everything when in new day


# Count events in Google calendar

If you are like me (a very organized person :-)) perhaps you are using Google calendar to store information about
events. I for instance tend to make a note when I have exercised, had a run etc. But the next question is then
often "how many times did I exercise last month?". Was it zero? (probably!).

Anyway, to answer this question (and to learn Java Script and _apps script_) I wrote this code.

### Usage

Just copy the code to a Google apps script project and call the function _runner.js_ (or _runner.gs_ when it resides inside gdrive).

```javascript
function runner() { 

  // --- PARAMS

  // from_date: example "2017-01-01"
  // to_date: example "2017-12-31"
  // searchstring: example "gym"
  // docname: example "Gym stats for 2017"
  
  make_calendar_stats("2017-01-01", "2017-12-31", "gym", "Gym stats for 2017") ; 
}
```

The script will extract all calendar events (in your default calendar) that match this search criteria and creates 
a document in your Google drive with some statistics related to these events.

### What could be better (to fix / add later)

* The time calculations are pretty rough, these could be improved
* the search is pretty non-inclusive (it finds __exactly__ the word what you specify), this could also probably be improved
* The created document could be prettier
* deal with no events found and other possible failures
* add the possibility to list the title of the events that are found

### Notes

I learned what I know about Google scripts here.

https://developers.google.com/apps-script/

and I also used _clasp_ to be able to do the coding locally and use GIT

https://developers.google.com/apps-script/guides/clasp

### Change log



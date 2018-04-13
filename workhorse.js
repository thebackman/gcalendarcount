
/* --- main workhorse function --- */

function make_calendar_stats(from_date, to_date, searchstring, docname, include_titles) {

  // --- access calendar data

  // define start date
  var startdate = new Date(from_date) ;
  // define enddate
  var enddate = new Date(to_date) ;
  // get the calendar data for the particular search string
  var calevents = CalendarApp.getDefaultCalendar().getEvents(startdate, enddate, {search: searchstring}) ;
  
  // --- calculate overall stats
  
  // calculate days between first and last date
  var dayss = days_b_dates(startdate, enddate) ;
  // calculate number of months (approx)
  var monthss =  rounder(dayss / 30) ;
  // get number of events
  var tot_events = calevents.length ;
  // calculate mean events per month (overall statistic - mean number of events)
  var mean_ev = rounder(tot_events / monthss) ;
  
  // --- calculate monthly statistics
  
  // create empty array to hold month and year (needed as key)
  var month_year = [] ;
  // create empty object to hold event counts
  var counts_event = {} ;
  // create empty object to hold titles
  var titles = {} ;
  // loop through events to combine month, year and titles
   for (var i = 0 ; i < calevents.length ; i++) {
     // save month and year info as key
     month_year.push(month_string(calevents[i].getStartTime().getMonth()) + " " + String(calevents[i].getStartTime().getYear())) ;
     // calculate events and add to object / dict
     counts_event[month_year[i]] = 1 + (counts_event[month_year[i]] || 0) ;
     // add titles to titles obj
     if (typeof titles[month_year[i]] == 'undefined') {
       titles[month_year[i]] = [] ;
       titles[month_year[i]].push(calevents[i].getTitle()) ;
     } else {
       titles[month_year[i]].push(calevents[i].getTitle()) ;
     }
   } 
   
  // --- Create new doc
  
  // create the doc and access the body
  var doc = create_stat_doc(docname) ;
  var docbody = doc.getBody() ;
  // write initial heading to document
  docbody.appendParagraph("Statistics").setHeading(DocumentApp.ParagraphHeading.HEADING1) ;
  
  // --- write overall stats
  
  docbody.appendParagraph(
  "In the period " + 
  from_date + 
  " to " + 
  to_date + 
  " the search string " + 
  searchstring + 
  " was found " + 
  String(tot_events) + 
  " times. This period contains " + 
  String(dayss) + 
  " days which corresponds to approx " + 
  String(monthss) + 
  " months. This will give you a mean count of events of " + 
  String(mean_ev) + 
  " per month. Below is a count of events per month.");
  
  // --- write monthly stats and perhaps titles
  
  for(var key in counts_event){
    write_month_heading(docbody, key) ;
    docbody.appendParagraph(counts_event[key] + " events found") ;
    if(include_titles == true) {
      docbody.appendParagraph(titles[key].toString()).editAsText().setItalic(true) ;
    }
  }
}

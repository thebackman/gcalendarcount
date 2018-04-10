
/* --- check if a document exists in drive, delete, create new --- */

function create_stat_doc(docname) {
  // get document with given name (there will be none or one)
  var files = DriveApp.getFilesByName(docname) ;
  // check if a file was found by using next
  if (files.hasNext() == true) {
    files.next().setTrashed(true) ;
    stat_file = DocumentApp.create(docname) ;
  } else {
    var stat_file = DocumentApp.create(docname) ;
  }
  return stat_file ;
}

/* --- calculates number of days between two dates --- */

function days_b_dates(dat1, dat2) {
    // Milliseconds in one day
    var one_day = 1000 * 60 * 60 * 24
    // Convert both dates to milliseconds
    var date1_ms = dat1.getTime()
    var date2_ms = dat2.getTime()
    // Calculate the difference in milliseconds
    var diff_ms = (date2_ms - date1_ms)
    // Convert back to days and return
    return Math.round(diff_ms / one_day)
}

/* --- takes java script month number, returns text ---*/

function month_string(month_num) {
 // define a array to take month values
  var month = [] ;
 // fill it 
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  // return the string with month name based on month number
  return month[month_num] ;
}

/* --- rounds a number to two decimals --- */

function rounder(num) {
 var rounded = Math.round(num * 100) / 100
 return rounded ;
}

/* --- writes a month section heading to the document --- */ 

function write_month_heading(docbody, text) {
  var this_heading = docbody.appendParagraph(text) ;
  this_heading.setHeading(DocumentApp.ParagraphHeading.HEADING2);
}

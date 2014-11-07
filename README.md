From Pen to Press
======
This project is a kiosk website for iPad. It will display a single manuscript, digitized from the collection of the Walters Art Museum in Baltimore, Maryland.
The iPad will be on view in the focus show, [From Pen to Press: Experimentation and Innovation in the Age of Print](http://thewalters.org/events/eventdetails.aspx?e=3614). 

This project is built from a previous project, which was an iMac display of 8 books for the focus show, "[Living by the Book: Monks, Nuns and their Manuscripts](http://thewalters.org/exhibitions/bythebook/)". 


## Technology

- [OpenLibrary's BookReader](https://github.com/openlibrary/bookreader)
- [The Digital Walters](http://www.thedigitalwalters.org/)
- [Wget](https://www.gnu.org/software/wget/)
- - [BootStrap CSS Framework](http://getbootstrap.com/) is included for overkill/future-use


## How to Use This

### Step 0. Get to know the technology listed above.

In addition to those, a working knowledge of html and javascript are of course prerequisite. Johannes Baiter has published a good introduction to [Using the OpenLibrary BookReader](http://jbaiter.de/ol-bookreader-basics.html).

### Step 1. Review the contents of this project

This small, one-page website is designed to run locally on a tablet like an iPad. The important files are:

- `index.html` - the one-page website
- `embed.html` - displays the book, included via iframe
- `assets/js/bookreader-custom.js` - edit this to show a different manuscript
- `/assets/` - contains the scripts, stylesheets, images, etc.

The /lib/ folder contains source for things like bootstrap, used to build or update the files above.

### Step 2. Choose (and get) a book to display

To download images from the book you want to display, [install](http://www.hacksparrow.com/how-to-install-wget-on-your-mac.html) and [use](https://www.gnu.org/software/wget/manual/wget.html) [Wget](https://www.gnu.org/software/wget/) and point it to the Digital Walters like so:

`wget -r -l1 -nd -e robots=off -R*thumb* -A "jpg" http://www.thedigitalwalters.org/Data/WaltersManuscripts/html/W281/`

For example, images of Walters manuscript W.281 are stored in /assets/book-w281/

### Step 3. Display the book

Edit `assets/js/bookreader-custom.js` to change the display to a different book
Line 28 contains a path to the images gathered in step 2, above.
Lines 80-84 are also very interesting.

Often we like to display a manuscript with a specific opening so that certain 
pages are visible. Similarly, you can choose which page number will display by 
default. To do this, edit the URL in the `iframe` on `index.html`. Bookreader's documentation has more information on [what you can control with the URL](https://openlibrary.org/dev/docs/bookurls).

If you're using an iPad app like Kiosk Pro, 
[you can set a "timeout"](http://support.kioskproapp.com/knowledgebase/articles/302258-timer-settings-idle-time-limit). This way,
if a museum visitor flips through the book's pages on the ipad, and then goes 
away, the display will be reset after a specified period of time.


### Step 4. Publish!

You can [put the site on an iPad](http://support.kioskproapp.com/knowledgebase/articles/302181-general-settings-local-mode) (with [Kiosk Pro](http://www.kioskproapp.com/) or similar) or you can publish on a 
web server. The files you need:
- `index.html`
- `embed.html`
- `/assets/`

## Contact

- Developer: [@dylan_k](https://twitter.com/dylan_k "dylan_k on twitter") 

#### The Walters Art Museum

- Homepage: thewalters.org
- e-mail:  waltersweb@thewalters.org
- Twitter: [@walters_museum](https://twitter.com/walters_museum "walters_museum on twitter")
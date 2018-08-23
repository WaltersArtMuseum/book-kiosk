

Museum Book Kiosk
=================

This project is a kiosk website for iPad. It will display a single book, digitized from the collection of the Walters Art Museum in Baltimore, Maryland.

## How to Use This

### Step 0. Get to know the toolset

- [OpenLibrary's BookReader](https://github.com/openlibrary/bookreader)
- [The Digital Walters](http://www.thedigitalwalters.org/)
- [Wget](https://www.gnu.org/software/wget/)

In addition to those, a working knowledge of html and javascript are of course prerequisite. Johannes Baiter has published a good introduction to [Using the OpenLibrary BookReader](http://jbaiter.de/ol-bookreader-basics.html).

### Step 1. Review the contents of this project

This small, one-page website is designed to run locally on a tablet like an iPad. 

### Step 2. Choose (and get) a book to display

To download images from the book you want to display, [install](http://www.hacksparrow.com/how-to-install-wget-on-your-mac.html) and [use](https://www.gnu.org/software/wget/manual/wget.html) [Wget](https://www.gnu.org/software/wget/) and point it to the Digital Walters like so:

  ```bash
  cd assets/book/ && wget -r -l1 -nd -e robots=off -R*thumb* -A "jpg" http://www.thedigitalwalters.org/Data/WaltersManuscripts/92123/data/92.123/sap/
  ```

At this point, images of a Walters manuscript 92.123 are stored in `/assets/book/`. Isn't it beautiful!


### Step 3. Display the book

Edit `assets/js/bookreader-custom.js` to change the display to a different book
Line 28 contains a path to the images gathered in step 2, above.
Lines 80-84 are also very interesting.

Often we like to display a book with specific pages open by default. Similarly, you can choose which page number will display by 
default. To do this, edit the URL to something like `index.html#page/n3/mode/2up` where n3 has the number of the page to show and 2up is the default display.

Bookreader's documentation has more information on [what you can control with the URL](https://openlibrary.org/dev/docs/bookurls).

If you're using an iPad app like Kiosk Pro, 
[you can set a "timeout"](http://support.kioskproapp.com/knowledgebase/articles/302258-timer-settings-idle-time-limit). This way,
if a museum visitor flips through the book's pages on the ipad, and then goes 
away, the display will be reset after a specified period of time.


### Step 4. Publish!

You can [put the site on an iPad](https://docs.kioskproapp.com/article/814-storing-content-locally-on-the-ipad) (with [Kiosk Pro](http://www.kioskproapp.com/) or similar) or you can publish on a 
web server. 


## Contact

- Developer: [@dylan_k](https://twitter.com/dylan_k "dylan_k on twitter") 


#### The Walters Art Museum

- Homepage: thewalters.org
- e-mail:  waltersweb@thewalters.org
- Twitter: [@walters_museum](https://twitter.com/walters_museum "walters_museum on twitter")

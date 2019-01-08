


Museum Book Kiosk
=================

This project is a kiosk website for iPad. It will display a single book, digitized from the collection of the Walters Art Museum in Baltimore, Maryland.


Step 0. Get to know the toolset
-------------------------------------------------------------------------------

- [OpenLibrary's BookReader](https://github.com/openlibrary/bookreader)
- [The Digital Walters](http://www.thedigitalwalters.org/)
- [Wget](https://www.gnu.org/software/wget/)
- [Kiosk Pro Plus](https://www.kioskproapp.com/)

In addition to those, a working knowledge of html and javascript are of course prerequisite. Johannes Baiter has published a good introduction to [Using the OpenLibrary BookReader](http://jbaiter.de/ol-bookreader-basics.html).


Step 1. Review the contents of this project
-------------------------------------------------------------------------------

This small, one-page website is designed to run locally on a tablet like an iPad. The index.html file displays the book, with help from javascript files and JPG images of the book pages.

Step 2. Choose (and get) a book to display

-------------------------------------------------------------------------------

To download images from the book you want to display, [install](http://www.hacksparrow.com/how-to-install-wget-on-your-mac.html) and [use](https://www.gnu.org/software/wget/manual/wget.html) [Wget](https://www.gnu.org/software/wget/) and point it to the Digital Walters in the command line like so:

  ```bash
  cd assets/book/ && wget -r -l1 -nd -e robots=off -R*thumb* -A "jpg" http://www.thedigitalwalters.org/Data/WaltersManuscripts/92123/data/92.123/sap/
  ```
  
...sometimes the server's directory structure is different so your `wget` command could look like this:  
  
`wget -r -l1 -nd -e robots=off -R*thumb* -A "jpg" http://www.thedigitalwalters.org/Data/WaltersManuscripts/html/W281/`

After you've run the command, images of a Walters manuscript 92.123 are stored in `/assets/book/`. Isn't it beautiful!


Step 3. Display the book
-------------------------------------------------------------------------------

Edit `BookReaderJSAdvanced.js` to change the display to a different book.

Look for the function `getNumLeafs` and change the number to match the number of pages in the book. (This should also be the same number as JPGs in the /assets/book/ directory, of course.)

`getPageWidth` and `getPageHeight` may also need adjustment, to match the dimensions of the images.

The function `getPageURI` has two important variables you may need to edit.
`leafStr` is usually the string of leading zeroes within the JPG filenames.
`url` includes the path to the directory where the images are stored.

Later in the file, there are variables for `bookTitle` and other metadata.

### URL Variables

Often we like to display a book with specific pages open by default. Similarly, you can choose which page number will display by 
default. To do this, edit the URL to something like `index.html#page/3/mode/2up` where 3 which pagenumber to show and 2up is the default display.

Bookreader's documentation has more information on [what you can control with the URL](https://openlibrary.org/dev/docs/bookurls).


Step 4. Publish!
-------------------------------------------------------------------------------

You can [put the site on an iPad](https://docs.kioskproapp.com/article/814-storing-content-locally-on-the-ipad) (with [Kiosk Pro](http://www.kioskproapp.com/) or similar) or you can publish on a 
web server. 

If you're using an iPad app like Kiosk Pro, 
[you can set a "timeout"](https://docs.kioskproapp.com/article/800-timer-settings). This way,
if a museum visitor flips through the book's pages on the ipad, and then goes 
away, the display will be reset after a specified period of time.


Project Management
-------------------------------------------------------------------------------

These files are part of a git repository hosted at https://github.com/WaltersArtMuseum/book-kiosk. There are seperate branches for different installations.


## Contact

- Developer: [@dylan_k](https://twitter.com/dylan_k "dylan_k on twitter") 


#### The Walters Art Museum

- Homepage: thewalters.org
- e-mail:  waltersweb@thewalters.org
- Twitter: [@walters_museum](https://twitter.com/walters_museum "walters_museum on twitter")

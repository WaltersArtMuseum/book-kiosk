


Museum Book Kiosk
=================

This project is a kiosk website for iPad. It will display a single book, digitized from the collection of the Walters Art Museum in Baltimore, Maryland.


Get to know the toolset
-------------------------------------------------------------------------------

- [OpenLibrary's BookReader](https://github.com/openlibrary/bookreader)
- [The Digital Walters](http://www.thedigitalwalters.org/)
- [Wget](https://www.gnu.org/software/wget/)
- [ImageMagick](https://www.sethvargo.com/install-imagemagick-on-osx-lion/)
- [Kiosk Pro Plus](https://www.kioskproapp.com/)

In addition to those, a working knowledge of html and javascript are of course prerequisite. Johannes Baiter has published a good introduction to [Using the OpenLibrary BookReader](http://jbaiter.de/ol-bookreader-basics.html).


Review the contents of this project
-------------------------------------------------------------------------------

This small, one-page website is designed to run locally on a tablet like an iPad. The index.html file displays the book, with help from javascript files and JPG images of the book pages.

You may want to check for a new version of OpenLibrary's BookReader, which is included with this proejct's files.


Choose (and get) a book to display
-------------------------------------------------------------------------------

To download images from the book you want to display, [install](http://www.hacksparrow.com/how-to-install-wget-on-your-mac.html) and [use](https://www.gnu.org/software/wget/manual/wget.html) [Wget](https://www.gnu.org/software/wget/) and point it to the Digital Walters in the command line like so:

  ```bash
  cd assets/book/ && wget -r -l1 -nd -e robots=off -R*thumb* -A "jpg" http://www.thedigitalwalters.org/Data/WaltersManuscripts/92123/data/92.123/sap/
  ```
  
...sometimes the server's directory structure is different so your `wget` command could look like this:  
  
`wget -r -l1 -nd -e robots=off -R*thumb* -A "jpg" http://www.thedigitalwalters.org/Data/WaltersManuscripts/html/W313/`

After you've run the command, images of a Walters manuscript are stored in `/assets/book/`. Isn't it beautiful!


Image Cropping
-------------------------------------------------------------------------------

A side-effect of the way these scholarly images are produced is that, on one edge of each image, you can see a sliver of the facing page. This is intentional, but it makes for a more realistic looking user experience to remove these slivers.

1. make a directory for odd-numbered pages, and move them into it
`mkdir odd; mv *[13579]_sap.jpg odd`
2. do likewise with the even-numbered pages
`mkdir even; mv *[24680]_sap.jpg even`
3. measure an average pixel width of the "slivers" for this book e.g. 24px
4. Use [ImageMagick](https://lib.bsu.edu/wiki/index.php?title=ImageMagick)'s `mogrify` to trim from the RIGHT side of files in `odd/`  
`mogrify -chop 24x0 -gravity East *.jpg`  
...or from the LEFT side of files in `even/`  
`mogrify -chop 24x0 -gravity West *.jpg`
5. flatten the filestructure back out and do some cleanup. cd into the assets/ directory and then `find book/ -mindepth 2 -type f -exec mv -i '{}' book/ ';' && rm -rf book/even/ && rm -rf book/odd/`



Display the Book
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
default. To do this, edit the URL to something like `index.html#page/64/mode/2up` where 64 is the pagenumber to show, and 2up is the default display.

Bookreader's documentation has more information on [what you can control with the URL](https://openlibrary.org/dev/docs/bookurls).


Publish!
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

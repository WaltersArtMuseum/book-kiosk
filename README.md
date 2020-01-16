


Museum Book Kiosk
=================

"Museum Book Kiosk" displays a book, digitized from the collection of the Walters Art Museum in Baltimore, Maryland. 

A small, one-page website runs locally on an iPad or other tablet. `index.html` displays the book, with help from javascript files and JPG images of the book pages.

The git repository has a different branch for different projects.


Get to know the toolset
-------------------------------------------------------------------------------

- [The Internet Archive BookReaderr](https://github.com/openlibrary/bookreader)
- [The Digital Walters](http://www.thedigitalwalters.org/)
- [Wget](https://www.gnu.org/software/wget/)
- [ImageMagick](https://www.sethvargo.com/install-imagemagick-on-osx-lion/)
- [Kiosk Pro Plus](https://www.kioskproapp.com/)

A working knowledge of html and javascript are also prerequisite. Johannes Baiter has published a good introduction to [Using the OpenLibrary BookReader](http://jbaiter.de/ol-bookreader-basics.html).


Review Project Contents
-------------------------------------------------------------------------------

Check for [new releases of The Internet Archive BookReader](https://github.com/internetarchive/bookreader/releases), to upgrade the version used here.


Choose (and get) Book Images
-------------------------------------------------------------------------------

To download images from the book you want to display, [install](http://www.hacksparrow.com/how-to-install-wget-on-your-mac.html) and [use](https://www.gnu.org/software/wget/manual/wget.html) [Wget](https://www.gnu.org/software/wget/) and point to the Digital Walters in the command line:

  ```bash
  cd assets/book/ && wget -r -l1 -nd -e robots=off -R*thumb* -A "jpg" http://thedigitalwalters.org/Data/WaltersManuscripts/92808/data/92.808/sap/
  ```
... where 92.808 is the shelf number of the book whose images you want to retrieve.

**note:** The server's directory structure varies at times. You would need to do:  
  
`wget -r -l1 -nd -e robots=off -R*thumb* -A "jpg" http://www.thedigitalwalters.org/Data/WaltersManuscripts/html/W313/`

After you've run the command, images of a Walters manuscript go to `/assets/book/`. Beautiful!


Image Cropping
-------------------------------------------------------------------------------

For scholarly reasons, the images show a sliver of each facing page. The sliver demonstrates the position of each image within the book. For a more realistic, bookish interface, remove the slivers.

1. move odd-numbered pages to a new directory
`mkdir odd; mv *[13579]_sap.jpg odd`
2. do likewise with the even-numbered pages
`mkdir even; mv *[24680]_sap.jpg even`
3. measure an average pixel width of the "slivers" for this book e.g. 24px
4. Use [ImageMagick](https://lib.bsu.edu/wiki/index.php?title=ImageMagick)'s `mogrify` to trim from the _right_ side of files in `odd/`  
`mogrify -chop 24x0 -gravity East *.jpg`  
...then from the _left_ side of files in `even/`  
`mogrify -chop 24x0 -gravity West *.jpg`
5. cd into the assets/ directory 
6. then flatten the file structure back out and do cleanup.  
`find book/ -mindepth 2 -type f -exec mv -i '{}' book/ ';' && rm -rf book/even/ && rm -rf book/odd/`



Display the Book
-------------------------------------------------------------------------------

Edit `BookReaderJSAdvanced.js` to change the display to a different book.

For the function `getNumLeafs`, change the number to match the filename numbering. For example, if the largest number is 622 for example, enter `000` because 622 has three digits.

If necessary, adjust `getPageWidth` and `getPageHeight` to match the image dimensions.

The function `getPageURI` has two important variables to check.
`leafStr` is the string of leading zeroes within the JPG filenames.
`url` determines the path to the book images.

Later in the file, look for `bookTitle` and other metadata variables.

### URL Variables

Choose which specific pages to display by default. Edit the URL to, for eample:  `index.html#page/64/mode/2up` where 64 is the pagenumber to show, and 2up is the default display.

Bookreader's documentation has more information about [book URLs](https://openlibrary.org/dev/docs/bookurls).


Publish!
-------------------------------------------------------------------------------

[Put the site on an iPad](https://docs.kioskproapp.com/article/814-storing-content-locally-on-the-ipad) (with [iMazing](https://imazing.com/)) or publish on a web server. 

Using Kiosk Pro, [you have a "timeout" option](https://docs.kioskproapp.com/article/800-timer-settings). If a user flips through the book's pages on the iPad, and then goes away, the default returns after a specified amount of time.


Contact
-------------------------------------------------------------------------------

- Developer: [@dylan-k](https://github.com/dylan-k) 

#### The Walters Art Museum

- Homepage: thewalters.org
- e-mail:  waltersweb@thewalters.org
- Twitter: [@walters_museum](https://twitter.com/walters_museum "walters_museum on twitter")

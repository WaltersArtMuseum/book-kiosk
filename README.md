


Museum Book Kiosk
=================

"Museum Book Kiosk" displays a book, digitized from the collection of the Walters Art Museum in Baltimore, Maryland.

A small, one-page website runs locally on an iPad or other tablet. `index.html` displays the book, using related JavaScript images.

This git repository uses a different branch for different projects, which display different books.


Tools
-------------------------------------------------------------------------------

This project uses a variety of apps, command-line utilities, HTML, and JavaScript/jQuery.

  - [The Internet Archive BookReader](https://github.com/openlibrary/bookreader) tool for creating a simple book-like web interface
  - [The Digital Walters](https://www.thedigitalwalters.org/) repository of images digitized from books in the collection of the Walters Art Museum
  - [Wget](https://www.gnu.org/software/wget/) (for linux, [mac](https://www.hacksparrow.com/how-to-install-wget-on-your-mac.html), and [windows](https://builtvisible.com/download-your-website-with-wget/)) for downloading images of digitized books
  - [ImageMagick](https://imagemagick.org/index.php) for editing images
  - [Kiosk Pro Plus](https://www.kioskproapp.com/) for running an iPad in "kiosk mode"
  - [iMazing](https://imazing.com/) for managing files on iPads without iTunes. Or you can use iTunes.


Getting Book Images
-------------------------------------------------------------------------------

Use WGET to download images from the book you want to display:

  ```bash
  cd assets/book/ && wget -r -l1 -nd -e robots=off -R*thumb* -A "jpg" https://www.thedigitalwalters.org/Data/WaltersManuscripts/W934/data/W.934/sap/
  ```

... where `W934` and `W.934` above correspond to the shelf number of the book whose images you want to retrieve.

After you've run the command, images of a Walters manuscript go to `assets/book/`. Beautiful!

### A Note about Image Paths

**note:** The [server's directory structure varies at times](https://thedigitalwalters.org/04_TechnicalReadMe.html#folder_names). You may need to do something like:  
  
`wget -r -l1 -nd -e robots=off -R*thumb* -A "jpg" https://thedigitalwalters.org/Data/WaltersManuscripts/92808/data/92.808/sap/`


Cropping Images
-------------------------------------------------------------------------------

For scholarly reasons, each image of a page shows a sliver of the facing page. The sliver proves the position of each page within the book. The right-side images show a sliver of the left-side pages, and vice versa. For a more realistic, bookish interface, you can remove the slivers.

1. Use Pan image editor like Photoshop or GIMP to measure the average pixel width of the "slivers" for this book e.g. 25px
2. `cd` into the `assets/book/` directory
3. Use ImageMagick's `mogrify` to trim from the _left_ edges from the odd-numbered images  
`mogrify -chop 25x0 -gravity West *[13579]_sap.jpg`
1. Then trim the _right_ edge of the _even_-numbered images  `mogrify -chop 25x0 -gravity East *[24680]_sap.jpg`


Script Config
-------------------------------------------------------------------------------

Edit `BookReaderJSAdvanced.js` to change the display to a different book.

Number of Pages
--------------------------------------------------------------------------------

For the function `getNumLeafs`, change the number to match the filename numbering. Review the filenames for the images you downloaded. For example, if the largest number is 622 for example, enter `622` for the "total number of leafs."

Image Size
--------------------------------------------------------------------------------

If necessary, adjust `getPageWidth` and `getPageHeight` to match the image dimensions.

Image Files
--------------------------------------------------------------------------------

The function `getPageURI` has important variables to check.

  - The function assumes images paths are like `assets/book/W934_000008_sap.jpg` for example, but you can adjust this.
  - `leafStr` contains leading zeroes for image filenames. If your filenames use 6 digit numbers, enter 6 zeroes: `000000`
  - `url` determines the path to the book images

Metadata
--------------------------------------------------------------------------------

Later in the file, look for `bookTitle` and other metadata variables.


Book Display
-------------------------------------------------------------------------------

With the files in place, and the JavaScript configured, you can browse to `index.html` to view the book.

Choose which specific pages to display by default. Edit [BookReader URL parameters](https://openlibrary.org/dev/docs/bookurls):  `index.html#page/64/mode/2up` uses 64 as the pagenumber to show, and 2up mode shows the pages side-by-side.


Updating BookReader
-------------------------------------------------------------------------------

Check for [new releases of The Internet Archive BookReader](https://github.com/internetarchive/bookreader/releases), to upgrade the version in this project.

  - Copy the download's `/BookReader` directory, replacing the one here.
  - Also copy `src/assets/images`, replacing this project's `assets/images/`

Publish
-------------------------------------------------------------------------------

Copy the finished project files to a tablet.

[Put the site on an iPad](https://docs.kioskproapp.com/article/814-storing-content-locally-on-the-ipad) (with [iMazing](https://imazing.com/) or iTunes) or publish on a web server.

Configure the tablet's settings

Using Kiosk Pro, [you have a "timeout" option](https://support.kioskgroup.com/article/991-idle-time-limit). If a user flips through the book's pages on the iPad, and then goes away, the browser can reset to a default URL (like `index.html#page/64/mode/2up`). This will "reset" the book view, so that it is open to the specified page(s).


You may also want to consider any settings in the tablet's operating system to put it in "lock-down" or "kiosk" mode. Restrict access to only the kiosk app, disable wifi, multi-touch gestures, etc.


Contact
-------------------------------------------------------------------------------

  - Developer: [@dylan-k](https://github.com/dylan-k)

### The Walters Art Museum

  - Homepage: thewalters.org
  - Email:  waltersweb@thewalters.org
  - See Also: https://api.thewalters.org

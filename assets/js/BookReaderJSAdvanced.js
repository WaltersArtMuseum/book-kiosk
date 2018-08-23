//
// This file shows the minimum you need to provide to BookReader to display a book
//
// Copyright(c)2008-2009 Internet Archive. Software license AGPL version 3.

// Create the BookReader object
var options = {
  // Total number of leafs
  getNumLeafs: function() {
      return 67;
  },

  // Return the width of a given page.  Here we assume all images are 800 pixels wide
  getPageWidth: function(index) {
      return 800;
  },

  // Return the height of a given page.  Here we assume all images are 1200 pixels high
  getPageHeight: function(index) {
      return 1200;
  },

  // We load the images from archive.org -- you can modify this function to retrieve images
  // using a different URL structure
  getPageURI: function(index, reduce, rotate) {
      // reduce and rotate are ignored in this simple implementation, but we
      // could e.g. look at reduce and load images from a different directory
      // or pass the information to an image server
      var leafStr = '000000'; // edit these leading zeroes to match image filenames in /assets/book./   
      var imgStr = (index+1).toString();
      var re = new RegExp("0{"+imgStr.length+"}$");
      var url = 'assets/book/92123_'+leafStr.replace(re, imgStr) + '_sap.jpg'; // edit to match book filenames
      return url;
  },

  // Return which side, left or right, that a given page should be displayed on
  getPageSide: function(index) {
      if (0 == (index & 0x1)) {
          return 'R';
      } else {
          return 'L';
      }
  },

  // This function returns the left and right indices for the user-visible
  // spread that contains the given index.  The return values may be
  // null if there is no facing page or the index is invalid.
  getSpreadIndices: function(pindex) {
      var spreadIndices = [null, null];
      if ('rl' == this.pageProgression) {
          // Right to Left
          if (this.getPageSide(pindex) == 'R') {
              spreadIndices[1] = pindex;
              spreadIndices[0] = pindex + 1;
          } else {
              // Given index was LHS
              spreadIndices[0] = pindex;
              spreadIndices[1] = pindex - 1;
          }
      } else {
          // Left to right
          if (this.getPageSide(pindex) == 'L') {
              spreadIndices[0] = pindex;
              spreadIndices[1] = pindex + 1;
          } else {
              // Given index was RHS
              spreadIndices[1] = pindex;
              spreadIndices[0] = pindex - 1;
          }
      }
      return spreadIndices;
  },

  // For a given "accessible page index" return the page number in the book.
  //
  // For example, index 5 might correspond to "Page 1" if there is front matter such
  // as a title page and table of contents.
  getPageNum: function(index) {
      return index+1;
  },

  // Book title and the URL used for the book title link
  bookTitle: "THE SILK BOOK",
  bookUrl: 'index.html',
  bookUrlText: 'regarded as the first book produced by a computer',
  bookUrlTitle: 'Livre de Prières',
  // thumbnail is optional, but it is used in the info dialog
  thumbnail: '//archive.org/download/BookReader/img/page014.jpg',
  // Metadata is optional, but it is used in the info dialog
  metadata: [
    {label: 'Name', value: "THE SILK BOOK"},
    {label: 'Creators', value: "Charles Meunier (French, 1865-1940) (Binder), J. Hervier (Artist)"},
    {label: 'Info', value: "This work was woven in silk, using the Jacquard loom method of punch cards. Approximately 106,000 cards per leaf were used in this highly complex application. This extremely rare volume, which is the only successful example of an entirely woven book, is often regarded as the first book produced by a computer, since Jacquard's process is viewed as an early precursor to the computer. The printed silk was mounted on paper pages and then bound."},
  ],
  // This toggles the mobile drawer (not shown in 'embed' mode)
  enableMobileNav: false,
  mobileNavTitle: 'BookReader demo',

  // Override the path used to find UI images
  imagesBaseURL: 'assets//images/',

  getEmbedCode: function(frameWidth, frameHeight, viewParams) {
      return "Embed code not supported in bookreader demo.";
  },

  // Note previously the UI param was used for mobile, but it's going to be responsive
  // embed === iframe

  ui: 'full', // embed, full (responsive)

};
var br = new BookReader(options);

// Let's go!
br.init();

README
======

This folder should contain images of a digitized manuscript.
To get them, you can something like this:

`wget -r -l1 -nd -e robots=off -R*thumb* -A "jpg" http://www.thedigitalwalters.org/Data/WaltersManuscripts/html/W281/`

... or sometimes they're structured differently so try a different URL liks

```
wget -r -l1 -nd -e robots=off -R*thumb* -A "jpg" http://www.thedigitalwalters.org/Data/WaltersManuscripts/92123/data/92.123/sap/
```

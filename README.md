# escape-room

This serves as the central place for escape rooms for Nuevo Foundation.  To setup a new escape room:

1. Find a theme you like in Hugo
2. Clone that theme into a separate folder.
3. Delete the .git version control there (ie. don't make the theme a submodule) and then copy all of the files under the 'themes' folder in this repo, with the folder name being the same name as the escape room.  For example, the Outerspace escape room has a folder called 'outerspace' in the themes folder.  This contains all the information for the outerspace theme (aka a version of the air theme from hugo library)
4. Once theme files are there, create a folder under 'content' with the same name of the escape room (ie. 'outerspace') and put some content there, like an _index.md. 
5. Create a new config file called config-<nameofescaperoom> in the root folder.  For example, the config-outerspace.toml file is already there.  These will specify parameters for your specific theme for the room.  
6. To build, first run `hugo` in root to build all the files.  Then run `hugo server -d --config <your config file here>` and see if your website loads up with localhost! 

To publish this website, make sure your config.toml file for your room as a base URL that points to the escape room (ie. escaperooms.nuevofoundation.org/outerspace).  This should serve as the root of the escape room.  To build the showcase of escape rooms (ie. the main website), you can run `hugo server -d` to load the `escaperooms.nuevofoundation.org` website.  
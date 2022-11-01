# node-note-taking-app

#   Purpose:    to demonstrate how node can import not only its own core modules
#               and third party modules, but also custom modules written by the
#               developer.
#
#
#               Once created, notes created persist until explicitly removed.
#
#
#

#   Usage:      Run node app.js with these command line options:
#               (adding a note, no duplicates allowed)
#               add
#                   mandatory:    --title="note-title", --body="note-body"
#
#
#
#               (removing an existing note, removing an nonexisting note not allowed)
#               remove
#                   mandatory:     --title="note-title"
#
#
#
#               (iterating all existing notes)
#               list
#
#
#
#               (reading the note by its title, revealing its body content)
#               read
#                   mandatory:     --title="note-title"
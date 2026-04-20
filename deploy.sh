#!/bin/bash
# AVS Deployment Script for Turtle Rescue Page
echo "Pushing updates to local server..."
cp *.html /var/www/turtle-rescue/
cp *.css /var/www/turtle-rescue/
echo "Update complete. Site is live at crossville-rehab.local"

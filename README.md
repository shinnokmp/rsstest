# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!


## What will I learn?

You will learn how to use Jasmine to write a number of tests against a pre-existing application. These will test the underlying business logic of the application as well as the event handling and DOM manipulation.


## How will this help my career?

* Writing effective tests requires analyzing multiple aspects of an application including the HTML, CSS and JavaScript - an extremely important skill when changing teams or joining a new company.
* Good tests give you the ability to quickly analyze whether new code breaks an existing feature within your codebase, without having to manually test all of the functionality.


## How will I run this project?

This is a feed reader testing project. You can clone or download the project repository and open the 'index.html' file in any browser of choice. It is important to note that
your device must be connected to a network with internet access as some tests depend on the DOM being loaded, else the test fails.

## Tests run in this project

This program tests for the following:
* That the RSS Feeds are defined and has names and urls
* That each RSS Feed has a name
* That each RSS Feed has an url
* That the menu is hidden by default
* That the menu changes visibility to visible on click of the menu icon
* That at least one content is gotten from the API
* That the content changes when new feed is loaded

## Contributing

The starter code of this project was given by Udacity including Jasmine 2.1 and files such as app.js and feedreader.js
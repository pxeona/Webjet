# Webjet Hotels mockup

A mockup of the search window of Webjet Hotels website.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development.

### Prerequisites

What things you need to install the software and how to install them

- Download and install Node.js from https://nodejs.org/en/download/
- Clone the repository to your local machine using the command below
```
git clone https://github.com/pxeona/Webjet.git
```

### Installing

A step by step series of examples that tell you how to get the development env running

- Navigate to the root directory of the cloned project and run the below command:
```
npm install
```
- Once all the dependencies are installed, run the below command to run the project:
```
npm start
```

## Authors

* **Pravin Xeona**

## Assumptions

- Advertisement component is added as an image
- Hotel list and rating filter list is stored as mock data in Search component state. (Can be stored in a Redux store, if required)
- The navbar position is fixed at the top
- Partial matching not added in hotel name search
- Added error message if no results returned after filtering
- When a particular rating is choosen to filter, all ratings equal to and above that rating, and less than the next rating, is displayed

## Choice of framework/library

- Library - React
- Stylesheets - CSS modules

#va-vacancies

Veterans Affairs Job Vacancies Lookup

##Development

The requirements for this project are Node.js, Bower and Grunt. 

To install node with Hombrew:
`brew install node`

Or head over to the [Node website](http://nodejs.org/) and install from there.
Once Node is installed, install Grunt with
`npm install -g grunt-cli`

and install Bower with 
`npm install -g bower`

Once those dependencies are set up, from this repository run `npm install`, then run `grunt`

##Data Tools
To use the data tools to convert/process the data in this project, first set up your Python environment (virtualenv reccomended), and 
```
pip install -r requirements.txt
```

Then run 

```
python data_tools/read_file.py
```

This will process the `data_tools/input/data.xlsx` file and output to `data_tools/output/data.json`. This file should be suitable for ingestion in the app.

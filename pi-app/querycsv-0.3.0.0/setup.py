from distutils.core import setup

setup(name='querycsv',
	version='0.3.0.0',
	description="Execute SQL code against data contained in one or more comma-separated-value (CSV) files.",
	author='Dreas Nielsen',
	author_email='dreas.nielsen@gmail.com',
    url='none',
	scripts=['querycsv/querycsv.py'],
	classifiers=[
		'Development Status :: 5 - Production/Stable',
		'Environment :: Console',
		'Intended Audience :: End Users/Desktop',
		'License :: OSI Approved :: GNU General Public License (GPL)',
		'Natural Language :: English',
		'Operating System :: OS Independent',
		'Topic :: Text Processing :: General',
		'Topic :: Office/Business'
		],
	long_description="""``querycsv.py`` is a Python module and program 
that executes SQL code against data contained in one or more 
comma-separated-value (CSV) files. The output of the SQL query will be 
displayed on the console by default, but may be saved in a new CSV file.
"""
	)

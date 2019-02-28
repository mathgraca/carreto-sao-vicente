const sm = require('sitemap');    

module.exports = function(app) {
	app.use('/robots.txt', function (req, res, next) {
	    res.type('text/plain')
	    res.send("User-agent: *\nAllow: / \n\nSitemap: https://www.carretosaovicente.com.br/sitemap.xml");
	});

	app.use('/sitemap.xml', function (req, res, next) {
	    const sitemap = sm.createSitemap({
		    hostname: 'https://www.carretosaovicente.com.br',
		    cacheTime: 600000,  //600 sec (10 min) cache purge period
		    urls: [
			{ url: '/' , changefreq: 'monthly', priority: 1, lastmodrealtime: true, lastmodfile: 'views/index.ejs' }
		 /* useful to monitor template content files instead of generated static files */
		    ]
	   });

	    res.type('application/xml')
	    res.send( sitemap.toString() );
	});

	
	app.use('/health', function (req, res, next) {
	   res.status(200).json({status:"ok"})
	});

	app.get('/*', function(req, res) {
		res.render('./index.ejs');
	});
};

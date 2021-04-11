const { json } = require('body-parser');

module.exports.index = function(application, req, res){
        res.render("home", {url:{}}) 
}

module.exports.url = function(application, req, res){
    var url = req.body;
    console.log(url);

    video = url.url;
    console.log(video);

    const youtubedl = require('youtube-dl-exec')

    youtubedl(video, {
    dumpJson: true,
    noWarnings: true,
    noCallHome: true,
    noCheckCertificate: true,
    preferFreeFormats: true,
    youtubeSkipDashManifest: true,
    referer: video
    })
    .then(output => console.log(output))

    res.render('home')

}
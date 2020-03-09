const reg = /^https?:\/\//;

module.exports.checkLink = (link) => reg.test(link);

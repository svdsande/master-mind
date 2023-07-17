module.exports = function(environment) {
    return {
      delivery: ['meta'],
      policy: {
        // Deny everything by default
        'default-src':  ["'none'"],
        // Allow scripts, images and media from the same host as the index.html is served ('self')
        'script-src':   ["'self'"],
        'img-src':      ["'self'"],
        'media-src':    ["'self'"],
        // Style sheet should be loaded from same host and from https://fonts.googleapis.com for Google fonts
        'style-src':    ["'self'", 'https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
        // Only allow fonts from https://fonts.googleapis.com
        'font-src':     ['https://fonts.googleapis.com', 'https://fonts.gstatic.com'],
      },
    };
  };
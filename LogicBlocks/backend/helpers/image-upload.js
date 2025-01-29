const multer = require('multer');
const path = require('path');

// destination to sotre the images
const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
    
        let folder = ""

        if(req.baseUrl.includes("users")) {
            folder = "users"
        }

        // this part here, I want it to be in the admin folder, but I don't know if it will really be necessary, but I'll leave it halfway here
        /*
        else if(req.baseUrl.includes("admin")) {
            folder = "admin"
        }
        */

        cb(null, `public/images/${folder}`);

    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
})

const imageUpload = multer({
    storage: imageStorage,
    fileFilter: function (req, file, cb) {
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error("Por favor, envie apenas imagens!"))
        }
        cb(undefined, true)
    }
})

module.exports = imageUpload;
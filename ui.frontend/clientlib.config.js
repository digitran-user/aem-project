// module.exports = {
//   // default working directory (can be changed per 'cwd' in every asset option)
//   context: __dirname,

//   // path to the clientlib root folder (output)
//   clientLibRoot: "./../content/jcr_root/apps/aem-react-components/clientlibs",

//   libs: {
//     name: "aem-react-components",
//     allowProxy: true,
//     categories: ["aem-react-components"],
//     embed: ["aem-react-components.bundle"],
//     jsProcessor: ["min:gcc"],
//     serializationFormat: "xml",
//     assets: {
//       js: ["dist/**/*.js"],
//       css: ["dist/**/*.css"],
//     },
//   },
// }




const path = require('path');

const BUILD_DIR = path.join(__dirname, 'dist');
const CLIENTLIB_DIR = path.join(
    __dirname,
    '..',
    'ui.apps',
    'src',
    'main',
    'content',
    'jcr_root',
    'apps',
    'capstoneproject',
    'clientlibs'
);

const libsBaseConfig = {
    allowProxy: true,
    serializationFormat: 'xml',
};

// Config for `aem-clientlib-generator`
module.exports = {
    context: BUILD_DIR,
    clientLibRoot: CLIENTLIB_DIR,
    libs: [
        {
            ...libsBaseConfig,
            name: 'clientlib-site',
            cssProcessor: ['default:none,min:none'],
            categories: ['capstoneproject.site'],
            assets: {
                // Copy entrypoint scripts and stylesheets into the respective ClientLib
                // directories
                js: {
                    files: ['*.js'],
                    flatten: false,
                },
                css: {
                    files: ['*.css'],
                    flatten: false,
                },

                // Copy all other files into the `resources` ClientLib directory
                resources: {
                    cwd: path.join('static', 'media'),
                    files: ['**/*.*'],
                    flatten: false,
                    ignore: ['**/*.js', '**/*.css'],
                },
            },
        },
    ],
};

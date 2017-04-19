Step 1 :- 
    Install dependecies :
    a)Webpack dependecies
        1.webpack
        2.webpack-dev-server
    b)Webpack loaders
        1.angular2-template-loader
        2.awesome-typescript-loader
        3.css-loader
        4.file-loader
        5.html-loader
        6.null-loader 
        7.raw-loader 
        8.style-loader 
        9.to-string-loader    
    c)Webpack plugins
        1.html-webpack-plugin
        2.webpack-merge 
        3.extract-text-webpack-plugin


NPM commands -

1.Getting npm configs .
npm config ls -l

2.installing package.
npm install rxjs.

3.uninstalling package
npm uninstall rxjs.

4. dependecies
npm install rxjs --save-dev
or
npm install rxjs -D
-------------------------
npm install rxjs --save
or
npm install rxjs -S


As an example, mocha would normally be a devDependency, since testing isn't necessary in production, while express would be a dependency.
5. npm config settings
npm config set <key> <value> [-g|--global]
npm config get <key>
npm config delete <key>
npm config list
npm config edit
npm get <key>
npm set <key> <value> [-g|--global]



some short hand commands.

-v: --version
-h, -?, --help, -H: --usage
-s, --silent: --loglevel silent
-q, --quiet: --loglevel warn
-d: --loglevel info
-dd, --verbose: --loglevel verbose
-ddd: --loglevel silly
-g: --global
-C: --prefix
-l: --long
-m: --message
-p, --porcelain: --parseable
-reg: --registry
-f: --force
-desc: --description
-S: --save
-D: --save-dev
-O: --save-optional
-B: --save-bundle
-E: --save-exact
-y: --yes
-n: --yes false
ll and la commands: ls --long


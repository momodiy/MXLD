module.exports = function(grunt) {

    var sassStyle = 'expanded';

    // 项目任务配置.所有插件的配置信息
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //uglify插件配置信息
        uglify: {
            options: {
                stripBanners: true,
                banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'test/public.js',
                dest: 'build/<%=pkg.name%>-<%=pkg.version%>.js.min.js'
            }
        },
        //jshint插件配置信息
        jshint:{
            build: ['back-end/js/login.js','fore-end/js/scripts.js'],
            options: {
                jshintrc: '.jshintrc'
            }
        },
        //csshint插件配置信息
        csslint:{
            css: ['fore-end/css/**/*.css','back-end/css/**/*.css'],
            options: {
                csslintrc: '.csslintrc'
            }
        },
        watch:{
            "execMap": {
                "pl": "fore-end/index.html"
            }


        },
        nodemon: {
            fore:{
                "execMap": {
                    "pl": "fore-end/index.html"
                }
            },back:{

            }
                }


    });



    // 加载包含 "uglify" 任务的插件。
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 默认被执行的任务列表。（告诉grunt当我们在终端输入grunt时需要做什么[注意先后顺序]）
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('uglify', ['uglify']);

    grunt.registerTask('jslint', ['jshint']);

    grunt.registerTask('csslint', ['csslint']);
};
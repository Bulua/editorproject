var testEditor;


$(function() {
    testEditor = editormd("test-editormd", {
        width   : "90%",
        height  : 640,
        syncScrolling : "single",
        path    : "lib/"
    });


});
//上传博客按钮点击事件
var uploadBlogBtn = $('#uploadBlogBtn');
var articleTitle = $('#articleTitle');
var articleContent = $('#articleContent');
var noticeBoxTitle = $('.notice-box-title');
var noticeBoxContent = $('.notice-box-content');

var noticeBox = $('.notice-box');
uploadBlogBtn.click(function () {
    //判断文章标题
    if (articleTitle.val().length === 0){
        noticeBoxTitle.show();
    }
    //判断文章内容
    else if (articleContent.val().length === 0) {
        noticeBoxContent.show();
    }
    //
    else {
        $('#myModal').modal();
    }

    // 定时关闭错误提示框
    var closeNoticeBox = setTimeout(function () {
        noticeBox.hide();
    }, 3000);
});

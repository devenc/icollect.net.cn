KindEditor.plugin('uploadFile', function(K) {
  var editor = this,
    name = 'uploadFile';
  // 点击图标时执行
  editor.clickToolbar(name, function() {
    top.openUploadDialog&&top.openUploadDialog(editor,'file')
    // editor.insertHtml('xxx');
  });
});


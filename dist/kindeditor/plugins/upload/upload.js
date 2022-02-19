KindEditor.plugin('upload', function(K) {
  var editor = this,
    name = 'upload';
  // 点击图标时执行
  editor.clickToolbar(name, function() {
    top.openUploadDialog&&top.openUploadDialog(editor,'image')
    // editor.insertHtml('xxx');
  });
});


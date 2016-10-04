function getCursortPosition(ctrl) {
  var caretPos = 0; // IE Support
  if (document.selection) {
    ctrl.focus();
    var sel = document.selection.createRange();
    sel.moveStart('character', -ctrl.value.length);
    CaretPos = sel.text.length;
  }
  // Firefox support
  else if (ctrl.selectionStart || ctrl.selectionStart == '0')
    CaretPos = ctrl.selectionStart;
  return (CaretPos);
}

function priceInput(el, pre, length) {
  var allowKeyCode = [49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 8, 190, 37, 38, 39, 40];
  el.addEventListener('keydown', function(e) {
    if (allowKeyCode.indexOf(e.keyCode) < 0) {
      e.preventDefault();
      return;
    }
    var cursorIndex = getCursortPosition(el);
    if (cursorIndex < 1 && e.keyCode > 49) {
      e.preventDefault();
      return;
    }
    //判断删除
    if (e.keyCode === 8) {
      if (cursorIndex === pre.length) {
        e.preventDefault();
      }
    }
    var value = el.value;
    if (value.indexOf('.') > -1) {
      //判断小数点的输入
      if (e.keyCode === 190) {
        e.preventDefault();
        return;
      }
      //保留小数点的位数 
      if (cursorIndex > value.indexOf('.') + 1) {
        var arr = value.split('.');
        if (arr[1].length + 1 > length && e.keyCode !== 8) {
          e.preventDefault();
        }

      }
    }
    //加减价格
    var num = value.replace(pre, '');
    switch (e.keyCode) {
      case 38:
        el.value = pre + (++num);
        break;
      case 40:
        el.value = pre + (--num);
        break;
    }
  });
  
  el.addEventListener('input', function(e) {
    //防止选择多个文字之后覆盖输入
    if (el.value.indexOf(pre) < 0) {
      el.value = pre + el.value;
    }
    //防止中文输入法出错
    var num = el.value.replace(pre,'');
    num = num.replace(/[^0-9\.]+/g,'');
    console.log(num)
     el.value = pre + num;
  });
}

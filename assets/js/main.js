let calc_btns = document.querySelectorAll(".calc_btn");
let display = document.querySelector("#display");
var is_symbol_clicked = false;
for (let calc_btn of calc_btns) {
  calc_btn.addEventListener("click", function () {
    var this_element = this;
    if (display.value == 0) {
      if (this_element.classList.contains("symbol_btn")) {
        return false;
      }
    }
    if (this_element.value == "AC") {
      display.value = 0;
      is_symbol_clicked = false;
    } else if (this_element.value == "=") {
      if (is_symbol_clicked == true) {
        return false;
      }
      var display_content = display.value;
      let calculated_value = eval(display_content);
      display.value = calculated_value;
    } else if (this_element.value == "C") {
      let display_content = display.value;
      display.value = display_content.slice(0, -1);
      if (display_content.length == 1) {
        display.value = 0;
      }
      is_symbol_clicked = false;
    } else {
      if (display.value == 0) {
        display.value = "";
      }
      if (!this_element.classList.contains("symbol_btn")) {
        is_symbol_clicked = false;
      }

      if (is_symbol_clicked == false) {
        display.value += this_element.value;
      }

      if (this_element.classList.contains("symbol_btn")) {
        let display_content = display.value;
        display.value = display_content.slice(0, -1);
        display.value += this_element.value;
        is_symbol_clicked = true;
      }
    }
  });
}

display.addEventListener("input", function (evt) {
  alert();
  evt = evt || window.event;
  if (!evt.ctrlKey && !evt.metaKey && !evt.altKey) {
    var charCode = typeof evt.which == "undefined" ? evt.keyCode : evt.which;
    if (charCode && !/\d/.test(String.fromCharCode(charCode))) {
      return false;
    }
  }
  // containsAlphabets();
});

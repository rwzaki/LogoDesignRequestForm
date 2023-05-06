function limitCheckboxes() {
    var checkboxes = document.querySelectorAll('input[name="brand-adjectives"]:checked');
    if (checkboxes.length > 4) {
      alert("You can only select up to 4 options.");
      event.target.checked = false; // uncheck the last checked checkbox
    } else {
      var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
      for (var i = 0; i < allCheckboxes.length; i++) {
        if (!allCheckboxes[i].checked) {
          allCheckboxes[i].disabled = false; // enable checkboxes that are not checked
        } else {
          allCheckboxes[i].disabled = (checkboxes.length >= 4 && !allCheckboxes[i].checked);
          // disable checkboxes that are not checked and limit to 4
        }
      }
    }
  }
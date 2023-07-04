

function toggleDropdown() {
    var dropdownMenu = document.getElementById("dropdownMenu");
    dropdownMenu.classList.toggle("hidden");
    var dropdownToggleIcon = document.querySelector(
      ".dropdown-toggle i.fa-chevron-down"
    );
    dropdownToggleIcon.classList.toggle("fa-chevron-up");
  }

  function selectItem(item) {
  var dropdownToggle = document.querySelector('.dropdown-toggle');
  var selectedText = item.textContent.trim();
  var selectedIcon = item.querySelector('.flag-icon');
  var dropdownToggleIcon = dropdownToggle.querySelector('.fa-chevron-down');
  var dropdownToggleText = dropdownToggle.querySelector('.selected-text');

  if (dropdownToggleText) {
    dropdownToggleText.textContent = selectedText;
  } else {
    dropdownToggleText = document.createElement('span');
    dropdownToggleText.classList.add('selected-text');
    dropdownToggleText.textContent = selectedText;
    dropdownToggle.insertBefore(dropdownToggleText, dropdownToggle.firstChild);
  }

  var dropdownToggleFlagIcon = dropdownToggle.querySelector('.flag-icon');
  if (dropdownToggleFlagIcon) {
    dropdownToggleFlagIcon.parentNode.removeChild(dropdownToggleFlagIcon);
  }

  if (selectedIcon) {
    var clonedIcon = selectedIcon.cloneNode(true);
    dropdownToggle.insertBefore(clonedIcon, dropdownToggle.firstChild);
  }

  toggleDropdown();
}






  function toggleHidden() {
    var myElement = document.getElementById("myElement");
    var myButton = document.getElementById("active");
    myButton.classList.toggle("underline");
    myElement.classList.toggle("hidden");
  }
  var targetElement = document.getElementById("targetElement");
  var otherElement = document.getElementById("show-list1");

  // Function to change the class of the other element when hovering
	function toggleOtherElementClass() {
		otherElement.classList.toggle('hidden');

	}

	// Event listeners for mouseover and mouseout on the target element
	targetElement.addEventListener('mouseover', toggleOtherElementClass);
	targetElement.addEventListener('mouseout', toggleOtherElementClass);
function searchFunction() {

  let input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("TypesOfExchange");
  li = ul.getElementsByTagName('li');


  for (i = 0; i < li.length; i++) {
    a = li[i];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}



function readMore(unique) {
  let colon = document.getElementById("colon" + unique);
  let moreText = document.getElementById("more" + unique);
  let btnText = document.getElementById("Btn" + unique);

  if (colon.style.display === "none") {
    colon.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    colon.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

  const font = document.getElementById('font');
  const zc_lista = document.getElementById('zc_lista');
  const ch_pogrubienie = document.getElementById('ch_pogrubienie');
  const ch_pochylenie = document.getElementById('ch_pochylenie');
  const ch_podkreslenie = document.getElementById('ch_podkreslenie');
  const ch_przekreslenie = document.getElementById('ch_przekreslenie');

  function updateTextStyle() {
    font.style.fontFamily = zc_lista.value;
    font.style.fontWeight = ch_pogrubienie.checked ? "bold" : "normal";
    font.style.fontStyle = ch_pochylenie.checked ? "italic" : "normal";

    let decorations = [];
    if (ch_podkreslenie.checked) decorations.push("underline");
    if (ch_przekreslenie.checked) decorations.push("line-through");
    font.style.textDecoration = decorations.join(" ");
  }

 
  zc_lista.addEventListener("change", updateTextStyle);
  ch_pogrubienie.addEventListener("change", updateTextStyle);
  ch_pochylenie.addEventListener("change", updateTextStyle);
  ch_podkreslenie.addEventListener("change", updateTextStyle);
  ch_przekreslenie.addEventListener("change", updateTextStyle);
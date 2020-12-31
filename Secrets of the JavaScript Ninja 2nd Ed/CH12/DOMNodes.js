function getNodes(htmlString, doc) {
  const map = {
    "<td": [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    "<th": [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    "<tr": [2, "<table><thead>", "</thead></table>"],
    "<option": [1, "<select multiple>", "</select>"],
    "<optgroup": [1, "<select multiple>", "</select>"],
    "<legend": [1, "<fieldset>", "</fieldset>"],
    "<thead": [1, "<table>", "</table>"],
    "<tbody": [1, "<table>", "</table>"],
    "<tfoot": [1, "<table>", "</table>"],
    "<colgroup": [1, "<table>", "</table>"],
    "<caption": [1, "<table>", "</table>"],
    "<col": [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
  };
  const tagName = htmlString.match(/<\w+/);
  let mapEntry = tagName ? map[tagName[0]] : null;
  if (!mapEntry) {
    mapEntry = [0, " ", " "];
  }
  let div = (doc || document).createElement("div");
  div.innerHTML = mapEntry[1] + htmlString + mapEntry[2];
  while (mapEntry[0]--) {
    div = div.lastChild;
  }
  return div.childNodes;
}
assert(
  getNodes("<td>test</td><td>test2</td>").length === 2,
  "Get two nodes back from the method."
);
assert(
  getNodes("<td>test</td>")[0].nodeName === "TD",
  "Verify that we're getting the right node."
);

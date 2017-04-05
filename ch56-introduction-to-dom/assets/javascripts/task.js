(function () {
  var form = document.getElementById('form-with-countries-select-box');
  // escaping the literal newline, in order to use a multi-line string
  form.innerHTML = '<select name="countries"> \
                      <option value="Netherlands">Netherlands</option> \
                      <option value="Greece">Greece</option> \
                      <option value="USA">USA</option> \
                      <option value="Australia">Australia</option> \
                    </select> \
                    <button type="submit">Save</button>';
})()

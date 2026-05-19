<script>
document.addEventListener("DOMContentLoaded", function() {
  var form = document.getElementById("ProductForm-{{ section.id }}");
  var minusBtn = form.querySelector(".qty-minus");
  var plusBtn = form.querySelector(".qty-plus");
  var qtyInput = form.querySelector(".product-form__quantity-input");

  function sanitizeValue(val) {
    var num = parseInt(val, 10);
    if (isNaN(num) || num < 1) num = 1;
    return num;
  }

  minusBtn.addEventListener("click", function() {
    qtyInput.value = sanitizeValue(qtyInput.value) - 1;
    if (parseInt(qtyInput.value, 10) < 1) qtyInput.value = 1;
  });

  plusBtn.addEventListener("click", function() {
    qtyInput.value = sanitizeValue(qtyInput.value) + 1;
  });

  qtyInput.addEventListener("input", function() {
    qtyInput.value = sanitizeValue(qtyInput.value);
  });
});
</script>
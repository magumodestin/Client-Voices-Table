const clientFilter = document.getElementById("clientFilter");
const statusFilter = document.getElementById("statusFilter");
const rows = document.querySelectorAll("tbody tr");

function filterTable() {
  const clientValue = clientFilter.value;
  const statusValue = statusFilter.value;

  rows.forEach((row) => {
    const client = row.getAttribute("data-client");
    const status = row.getAttribute("data-status");

    const clientMatch = clientValue === "all" || client === clientValue;
    const statusMatch = statusValue === "all" || status === statusValue;

    if (clientMatch && statusMatch) {
      row.style.display = "";
    } else {
      row.style.display = "none";
    }
  });
}

clientFilter.addEventListener("change", filterTable);
statusFilter.addEventListener("change", filterTable);

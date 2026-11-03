# Client Invoices Table

A clean client invoices dashboard table with live dropdown filters. Filter the list by client name, by payment status, or both at the same time, and the table updates instantly without reloading the page.

## Features

- Invoice table showing client name and email, invoice ID, amount, status, date and action
- Filter by client using a dropdown in the table header
- Filter by status (Paid, Pending, Overdue) using a dropdown in the table header
- Both filters work together
- Color-coded status badges: green for Paid, yellow for Pending, red for Overdue
- Rounded card layout with soft shadows
- Pure HTML, CSS and JavaScript, with no frameworks or libraries

## Built With

- HTML5
- CSS3
- Vanilla JavaScript

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/client-invoices-table.git
   ```
2. Open the folder in VS Code.
3. Right-click `client-table.html` and choose **Open with Live Server**, or double-click the file to open it in your browser.

## How the Filters Work

Each table row stores its client and status in `data-client` and `data-status` attributes. When a dropdown changes, `client-table.js` compares the selected values with each row and hides the rows that do not match. Choosing "All" in a dropdown removes that filter.

| Client filter | Status filter | Result |
|---------------|---------------|--------|
| All | All | Every invoice |
| Olivia Chen | All | Only Olivia Chen's invoices |
| All | Overdue | Every overdue invoice |
| Noah Kim | Paid | Noah Kim's paid invoices |

## Project Structure

```
client-invoices-table/
├── client-table.html
├── client-table.js
├── vercel.json
└── README.md
```

## Deploying to Vercel

1. Push the project to a GitHub repository.
2. On Vercel, choose **Add New**, then **Project**, and import the repository.
3. Leave the framework preset as **Other** and deploy.

The included `vercel.json` makes the main link open `client-table.html`.

## Future Improvements

- Search box for client name or invoice ID
- Sort by amount or date
- Working Filter, Export and New Invoice buttons
- Row actions menu
- Load invoices from a database

## License

This project is open source and free to use for learning and personal projects.

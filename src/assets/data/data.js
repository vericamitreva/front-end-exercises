const cardData = [
  {
    "header": "Project Update",
    "footer": "Last Updated: 2023-11-01",
    "style": { "backgroundColor": "#f0f0f0" },
    "className": "card-component",
    "collapsible": false,
    "onClick": () => alert("Card Project Update clicked!"),
    "refreshInterval": 6000,
    "badges": [{
      position: "top-left",
      type: "filled",
      content: "New",
      color: "blue"
    }, {
      position: "top-right",
      type: "filled",
      content: "Hot",
      color: "red"
    }],
    "backContent": "Detailed project status will be provided soon.",
    "children": "The project has reached a significant milestone, with the team working diligently to meet the upcoming deadlines."
  },
  {
    "header": "Team Performance",
    "footer": "Q4 Report",
    "style": { "backgroundColor": "#fff" },
    "className": "card-component",
    "collapsible": true,
    "onClick": () => alert("Card Team Performance clicked!"),
    "badges": [{
      position: "top",
      type: "full",
      content: "Performance",
      color: "blue"
    }, {
      position: "bottom-right",
      type: "outlined",
      content: "Q4",
      color: "green"
    }],
    "backContent": "In-depth performance metrics and analytics for Q4 will be shared.",
    "children": "The team has shown remarkable performance this quarter, exceeding all targets and KPIs."
  },
  {
    "header": "Market Analysis",
    "footer": "October 2023",
    "style": { "backgroundColor": "#e0e0e0" },
    "className": "card-component",
    "collapsible": false,
    "refreshInterval": 7000,
    "badges": [{
      position: "top-center",
      type: "outlined",
      content: "Featured",
      color: "purple"
    }],
    "children": "The latest market analysis shows a positive trend in our sector, with opportunities for expansion."
  }
]

  export default cardData
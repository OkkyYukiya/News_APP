import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export const prepareChart = (data) => {
  const chart = am4core.create("chartdiv", am4charts.XYChart);
  chart.dateFormatter.inputDateFormat = "yyyy-MM-dd";
  chart.paddingRight = 20;

  const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
  dateAxis.renderer.grid.template.location = 0;
  dateAxis.renderer.minGridDistance = 60;
  dateAxis.skipEmptyPeriods = true;

  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.tooltip.disabled = true;
  valueAxis.renderer.minWidth = 35;

  let series = chart.series.push(new am4charts.CandlestickSeries());
  series.dataFields.dateX = "date";
  series.dataFields.valueY = "close";
  series.dataFields.openValueY = "open";
  series.dataFields.lowValueY = "low";
  series.dataFields.highValueY = "high";

  series.tooltipText =
    "Open: [bold]{openValueY.value}[/]\nLow: [bold]{lowValueY.value}[/]\nHigh: [bold]{highValueY.value}[/]\nClose: [bold]{valueY.value}[/]";

  chart.cursor = new am4charts.XYCursor();

  const scrollbarX = new am4charts.XYChartScrollbar();
  scrollbarX.series.push(series);
  chart.scrollbarX = scrollbarX;

  chart.scrollbarX = new am4core.Scrollbar();

  chart.data = data;

  return chart;
};

export const formatDate = () => {
  const date = new Date();
  const ymd = date.toLocaleDateString();
  const dateArray = ymd.split("/");
  return `${dateArray[2]}-${dateArray[0]}-${dateArray[1] - 1}`;
};

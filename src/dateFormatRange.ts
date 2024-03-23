import moment from "moment";

export function CustomeFormatDateRange(date1: Date, date2: Date, separator: string, format: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format(format) + ` ${separator} ` + moment(date2).locale(locale).format(format);
}
export function FormatDateRange(date1: Date, date2: Date, format: string,separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format("DD MMMM YYYY") + ` ${separator} ` + moment(date2).locale(locale).format("DD MMMM YYYY");
}

export function FormatShortDateRange(date1: Date, date2: Date, separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format('DD MM YY') + ` ${separator} ` + moment(date2).locale(locale).format('DD MM YY');
}

export function FormatDateTimeRange(date1: Date, date2: Date, separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format('DD MMMM YYYY HH:mm') + ` ${separator} ` + moment(date2).locale(locale).format('DD MMMM YYYY HH:mm');
}

export function FormatShortDateTimeRange(date1: Date, date2: Date, separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format('DD MM YY HH:mm') + ` ${separator} ` + moment(date2).locale(locale).format('DD MM YY HH:mm');
}

export function FormatDateTimeSecondRange(date1: Date, date2: Date, separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format('DD MMMM YYYY HH:mm:ss') + ` ${separator} ` + moment(date2).locale(locale).format('DD MMMM YYYY HH:mm:ss');
}

export function FormatShortDateTimeSecondRange(date1: Date, date2: Date, separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format('DD MM YY HH:mm:ss') + ` ${separator} ` + moment(date2).locale(locale).format('DD MM YY HH:mm:ss');
}

export function FormatMonthRange(date1: Date, date2: Date, separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format('MMMM YYYY') + ` ${separator} ` + moment(date2).locale(locale).format('MMMM YYYY');
}

export function FormatYearRange(date1: Date, date2: Date, separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format('YYYY')  + ` ${separator} ` + moment(date2).locale(locale).format('YYYY');
}

export function FormatDayRange(date1: Date, date2: Date, separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format('dddd')  + ` ${separator} ` + moment(date2).locale(locale).format('dddd');
}

export function FormatShortDayRange(date1: Date, date2: Date, separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format('ddd') + ` ${separator} ` + moment(date2).locale(locale).format('ddd');
}

export function FormatShortMonthRange(date1: Date, date2: Date, separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format('MMM') + ` ${separator} ` + moment(date2).locale(locale).format('MMM');
}

export function FormatShortYearRange(date1: Date, date2: Date, separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format('YY')  + ` ${separator} ` + moment(date2).locale(locale).format('YY');
}

export function FormatTimeRange(date1: Date, date2: Date, separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format('HH:mm')  + ` ${separator} ` + moment(date2).locale(locale).format('HH:mm');
}
export function FormatTimeSecondRange(date1: Date, date2: Date, separator: string, locale: string = "id"): string {
  return moment(date1).locale(locale).format('HH:mm:ss')  + ` ${separator} ` + moment(date2).locale(locale).format('HH:mm:ss');
}